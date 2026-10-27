# NaviAble

Accessibility tools that run entirely in the browser. Nothing you type, upload or say leaves the device.

```bash
npm install
npm run dev
npm run build   # type-checks first
```

| Tool | What it does | Built with |
|---|---|---|
| Page reader | Text size, spacing, a readable font, high contrast, link highlighting, a reading guide, read aloud, and voice commands ("bigger", "next heading", "check page") | CSS custom properties, Web Speech API |
| Page check | Finds skipped heading levels, images without alt text, unlabelled inputs, unnamed buttons, vague link text and low contrast. Click an issue to see it on the page; switch to "Fixed" to see the corrected page pass | DOM traversal, WCAG contrast maths |
| Plain language | Rewrites formal text, lists every change, and shows Flesch reading ease and grade level before and after | Rule tables, syllable counting |
| Colour check | Contrast ratio with AA/AAA results and the nearest passing colour, a palette from any image, and protanopia / deuteranopia / tritanopia simulation | Canvas, Machado (2009) matrices |
| Live captions | Speech to text, downloadable as WebVTT or plain text | Web Speech API |

Voice features need Chrome or Edge. Elsewhere they are disabled with a message, not hidden.

## Compared with the first version

The first version was a Create React App front end for a Python server (T5, Vosk, AWS Rekognition and Transcribe). Every component posted to a hard-coded `http://localhost:8000`, so nothing worked without the backend. The logo image was broken and the page title read "NavAble". A colour analyser was written but never routed, and polling intervals were kept in state. This version uses Vite, strict TypeScript, and route-level code splitting, and needs no server.
