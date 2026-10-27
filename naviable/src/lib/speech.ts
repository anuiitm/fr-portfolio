import { useCallback, useEffect, useRef, useState } from 'react';

// The Web Speech API is not in TypeScript's DOM lib yet; this is the slice we use.
type Recognition = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: ((e: { resultIndex: number; results: ArrayLike<{ isFinal: boolean; 0: { transcript: string } }> }) => void) | null;
  onerror: ((e: { error: string }) => void) | null;
  onend: (() => void) | null;
};

const Ctor = (window as unknown as { SpeechRecognition?: new () => Recognition; webkitSpeechRecognition?: new () => Recognition }).SpeechRecognition ??
  (window as unknown as { webkitSpeechRecognition?: new () => Recognition }).webkitSpeechRecognition;

export const canListen = Boolean(Ctor);
export const canSpeak = 'speechSynthesis' in window;

export function speak(text: string, rate = 1) {
  if (!canSpeak) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = rate;
  speechSynthesis.speak(u);
}

export const stopSpeaking = () => canSpeak && speechSynthesis.cancel();

// Continuous recognition that restarts itself when the browser stops it
// after a pause, until the caller turns it off.
export function useListener(onFinal: (text: string) => void, lang = 'en-IN') {
  const [on, setOn] = useState(false);
  const [interim, setInterim] = useState('');
  const [error, setError] = useState<string | null>(null);
  const rec = useRef<Recognition | null>(null);
  const wanted = useRef(false);
  const cb = useRef(onFinal);
  cb.current = onFinal;

  const stop = useCallback(() => {
    wanted.current = false;
    rec.current?.stop();
    setOn(false);
    setInterim('');
  }, []);

  const start = useCallback(() => {
    if (!Ctor) return;
    const r = new Ctor();
    r.continuous = true;
    r.interimResults = true;
    r.lang = lang;
    r.onresult = (e) => {
      let partial = '';
      for (let i = e.resultIndex; i < e.results.length; i += 1) {
        const res = e.results[i];
        if (res.isFinal) cb.current(res[0].transcript.trim());
        else partial += res[0].transcript;
      }
      setInterim(partial);
    };
    r.onerror = (e) => {
      if (e.error === 'no-speech') return;
      setError(e.error === 'not-allowed' ? 'Microphone permission was denied.' : `Speech recognition error: ${e.error}`);
      wanted.current = false;
    };
    r.onend = () => {
      if (wanted.current) r.start();
      else setOn(false);
    };
    rec.current = r;
    wanted.current = true;
    setError(null);
    r.start();
    setOn(true);
  }, [lang]);

  useEffect(() => stop, [stop]);
  return { on, interim, error, start, stop };
}
