const topicData = {
  title: "Vocabulary",
  description: "Master English vocabulary including synonyms, antonyms, idioms, phrases, one-word substitutions, and root words.",
  theory: `
    <h3>1. Root Words for Vocabulary Building</h3>
    <p>Understanding root words is the most effective way to build a strong vocabulary. By knowing one root, you can often deduce the meanings of many related words.</p>
    <ul>
      <li><strong>Bene (Good/Well):</strong> Benefactor (one who gives), Benevolent (kind), Benign (harmless).</li>
      <li><strong>Mal (Bad/Evil):</strong> Malign (speak ill of), Malevolent (wishing evil), Malefactor (wrongdoer).</li>
      <li><strong>Dict (To speak):</strong> Dictate (speak aloud), Predict (foretell), Contradict (speak against).</li>
      <li><strong>Chron (Time):</strong> Chronic (lasting a long time), Chronological (in order of time), Synchronize (happen at same time).</li>
      <li><strong>Luc/Lum (Light):</strong> Lucid (clear), Illuminate (light up), Luminous (bright).</li>
      <li><strong>Voc/Vok (Call):</strong> Vocal (spoken), Evoke (call forth), Revoke (call back/cancel).</li>
      <li><strong>Phil (Love):</strong> Philanthropist (lover of mankind), Philosophy (love of wisdom), Bibliophile (lover of books).</li>
      <li><strong>Phob (Fear):</strong> Claustrophobia (fear of closed spaces), Acrophobia (fear of heights), Xenophobia (fear of strangers).</li>
      <li><strong>Path (Feeling):</strong> Sympathy (feeling for), Apathy (lack of feeling), Empathy (feeling with).</li>
      <li><strong>Cred (Believe):</strong> Credible (believable), Incredulous (unbelieving), Credential (proof of identity/qualifications).</li>
    </ul>

    <h3>2. Important Words (Synonyms and Antonyms)</h3>
    <p>Here is a list of important words frequently asked in competitive exams:</p>
    <ol>
      <li><strong>Abate (v):</strong> To become less active, less intense, or less in amount. <em>Syn: decrease, diminish. Ant: increase, intensify.</em></li>
      <li><strong>Aberration (n):</strong> Something that differs from the norm. <em>Syn: anomaly, deviation. Ant: normality, regularity.</em></li>
      <li><strong>Acrimony (n):</strong> Bitterness, ill feeling. <em>Syn: resentment, rancor. Ant: goodwill, benevolence.</em></li>
      <li><strong>Adulation (n):</strong> Excessive praise or admiration. <em>Syn: worship, flattery. Ant: criticism, condemnation.</em></li>
      <li><strong>Aesthetic (adj):</strong> Concerned with beauty or the appreciation of beauty. <em>Syn: artistic, visual. Ant: unattractive, displeasing.</em></li>
      <li><strong>Alleviate (v):</strong> To make (suffering, deficiency, or a problem) less severe. <em>Syn: reduce, ease. Ant: aggravate, worsen.</em></li>
      <li><strong>Ambiguous (adj):</strong> Open to more than one interpretation; having a double meaning. <em>Syn: equivocal, unclear. Ant: clear, unambiguous.</em></li>
      <li><strong>Ameliorate (v):</strong> Make (something bad or unsatisfactory) better. <em>Syn: improve, enhance. Ant: worsen, deteriorate.</em></li>
      <li><strong>Anachronism (n):</strong> A thing belonging or appropriate to a period other than that in which it exists. <em>Syn: misdate. Ant: current, contemporary.</em></li>
      <li><strong>Anomaly (n):</strong> Something that deviates from what is standard, normal, or expected. <em>Syn: oddity, abnormality. Ant: standard, norm.</em></li>
      <li><strong>Antipathy (n):</strong> A deep-seated feeling of dislike. <em>Syn: hostility, aversion. Ant: affinity, fondness.</em></li>
      <li><strong>Apathy (n):</strong> Lack of interest, enthusiasm, or concern. <em>Syn: indifference, unconcern. Ant: enthusiasm, passion.</em></li>
      <li><strong>Appease (v):</strong> Pacify or placate (someone) by acceding to their demands. <em>Syn: conciliate, satisfy. Ant: provoke, inflame.</em></li>
      <li><strong>Arbitrary (adj):</strong> Based on random choice or personal whim, rather than any reason or system. <em>Syn: capricious, random. Ant: rational, logical.</em></li>
      <li><strong>Arcane (adj):</strong> Understood by few; mysterious or secret. <em>Syn: esoteric, obscure. Ant: known, common.</em></li>
      <li><strong>Arduous (adj):</strong> Involving or requiring strenuous effort; difficult and tiring. <em>Syn: taxing, difficult. Ant: easy, effortless.</em></li>
      <li><strong>Articulate (adj):</strong> Having or showing the ability to speak fluently and coherently. <em>Syn: eloquent, fluent. Ant: inarticulate, hesitant.</em></li>
      <li><strong>Ascetic (adj):</strong> Characterized by or suggesting the practice of severe self-discipline and abstention from all forms of indulgence. <em>Syn: austere, abstinent. Ant: sybaritic, self-indulgent.</em></li>
      <li><strong>Assuage (v):</strong> Make (an unpleasant feeling) less intense. <em>Syn: relieve, ease. Ant: aggravate, intensify.</em></li>
      <li><strong>Audacious (adj):</strong> Showing a willingness to take surprisingly bold risks. <em>Syn: bold, daring. Ant: timid, cowardly.</em></li>
      <li><strong>Austere (adj):</strong> Severe or strict in manner, attitude, or appearance. <em>Syn: stern, strict. Ant: genial, luxurious.</em></li>
      <li><strong>Banal (adj):</strong> So lacking in originality as to be obvious and boring. <em>Syn: trite, hackneyed. Ant: original, fresh.</em></li>
      <li><strong>Belie (v):</strong> Fail to give a true notion or impression of (something); disguise or contradict. <em>Syn: contradict, debunk. Ant: reveal, attest.</em></li>
      <li><strong>Belligerent (adj):</strong> Hostile and aggressive. <em>Syn: aggressive, pugnacious. Ant: peaceful, friendly.</em></li>
      <li><strong>Benevolent (adj):</strong> Well meaning and kindly. <em>Syn: kind, charitable. Ant: malevolent, cruel.</em></li>
      <li><strong>Bolster (v):</strong> Support or strengthen; prop up. <em>Syn: strengthen, reinforce. Ant: undermine, weaken.</em></li>
      <li><strong>Burgeon (v):</strong> Begin to grow or increase rapidly; flourish. <em>Syn: multiply, expand. Ant: shrink, wither.</em></li>
      <li><strong>Cacophony (n):</strong> A harsh discordant mixture of sounds. <em>Syn: noise, discord. Ant: harmony, music.</em></li>
      <li><strong>Cajole (v):</strong> Persuade (someone) to do something by sustained coaxing or flattery. <em>Syn: wheedle, coax. Ant: bully, force.</em></li>
      <li><strong>Candid (adj):</strong> Truthful and straightforward; frank. <em>Syn: frank, honest. Ant: secretive, guarded.</em></li>
      <li><strong>Capricious (adj):</strong> Given to sudden and unaccountable changes of mood or behavior. <em>Syn: fickle, volatile. Ant: stable, consistent.</em></li>
      <li><strong>Castigate (v):</strong> Reprimand (someone) severely. <em>Syn: scold, berate. Ant: praise, commend.</em></li>
      <li><strong>Catalyst (n):</strong> A person or thing that precipitates an event. <em>Syn: stimulus, spark. Ant: block, hindrance.</em></li>
      <li><strong>Caustic (adj):</strong> Sarcastic in a scathing and bitter way. <em>Syn: biting, mordant. Ant: mild, sweet.</em></li>
      <li><strong>Censure (v):</strong> Express severe disapproval of (someone or something), especially in a formal statement. <em>Syn: condemn, criticize. Ant: praise, commend.</em></li>
      <li><strong>Chauvinist (n):</strong> A person displaying aggressive or exaggerated patriotism. <em>Syn: jingoist, bigot. Ant: egalitarian, internationalist.</em></li>
      <li><strong>Chicanery (n):</strong> The use of trickery to achieve a political, financial, or legal purpose. <em>Syn: deceit, deception. Ant: honesty, forthrightness.</em></li>
      <li><strong>Cogent (adj):</strong> Clear, logical, and convincing. <em>Syn: compelling, convincing. Ant: weak, ineffective.</em></li>
      <li><strong>Commensurate (adj):</strong> Corresponding in size or degree; in proportion. <em>Syn: equivalent, comparable. Ant: disproportionate, unequal.</em></li>
      <li><strong>Compelling (adj):</strong> Evoking interest, attention, or admiration in a powerfully irresistible way. <em>Syn: enthralling, gripping. Ant: boring, unconvincing.</em></li>
      <li><strong>Complacent (adj):</strong> Showing smug or uncritical satisfaction with oneself or one's achievements. <em>Syn: smug, self-satisfied. Ant: dissatisfied, humble.</em></li>
      <li><strong>Conciliatory (adj):</strong> Intended or likely to placate or pacify. <em>Syn: appeasing, peacemaking. Ant: antagonistic, hostile.</em></li>
      <li><strong>Condone (v):</strong> Accept and allow (behavior that is considered morally wrong or offensive) to continue. <em>Syn: disregard, overlook. Ant: condemn, punish.</em></li>
      <li><strong>Confound (v):</strong> Cause surprise or confusion in (someone), especially by acting against their expectations. <em>Syn: amaze, astonish. Ant: clarify, enlighten.</em></li>
      <li><strong>Connoisseur (n):</strong> An expert judge in matters of taste. <em>Syn: expert, authority. Ant: ignoramus, amateur.</em></li>
      <li><strong>Contend (v):</strong> Struggle to surmount (a difficulty or danger). <em>Syn: face, cope with. Ant: surrender, yield.</em></li>
      <li><strong>Contentious (adj):</strong> Causing or likely to cause an argument; controversial. <em>Syn: debatable, disputed. Ant: agreeable, undisputed.</em></li>
      <li><strong>Contrite (adj):</strong> Feeling or expressing remorse or penitence; affected by guilt. <em>Syn: remorseful, repentant. Ant: unrepentant, defiant.</em></li>
      <li><strong>Conundrum (n):</strong> A confusing and difficult problem or question. <em>Syn: puzzle, mystery. Ant: solution, clarification.</em></li>
      <li><strong>Convoluted (adj):</strong> (Especially of an argument, story, or sentence) extremely complex and difficult to follow. <em>Syn: complex, complicated. Ant: simple, straightforward.</em></li>
      <li><strong>Copious (adj):</strong> Abundant in supply or quantity. <em>Syn: abundant, plentiful. Ant: sparse, scarce.</em></li>
      <li><strong>Corroborate (v):</strong> Confirm or give support to (a statement, theory, or finding). <em>Syn: verify, endorse. Ant: contradict, refute.</em></li>
      <li><strong>Craven (adj):</strong> Contemptibly lacking in courage; cowardly. <em>Syn: cowardly, timid. Ant: brave, heroic.</em></li>
      <li><strong>Credulous (adj):</strong> Having or showing too great a readiness to believe things. <em>Syn: gullible, naive. Ant: skeptical, suspicious.</em></li>
      <li><strong>Culpable (adj):</strong> Deserving blame. <em>Syn: blameworthy, guilty. Ant: innocent, blameless.</em></li>
      <li><strong>Daunting (adj):</strong> Seeming difficult to deal with in anticipation; intimidating. <em>Syn: intimidating, formidable. Ant: encouraging, heartening.</em></li>
      <li><strong>Dearth (n):</strong> A scarcity or lack of something. <em>Syn: shortage, deficiency. Ant: abundance, surfeit.</em></li>
      <li><strong>Debilitate (v):</strong> Make (someone) weak and infirm. <em>Syn: weaken, enfeeble. Ant: strengthen, invigorate.</em></li>
      <li><strong>Decorum (n):</strong> Behavior in keeping with good taste and propriety. <em>Syn: propriety, decency. Ant: impropriety, indecency.</em></li>
      <li><strong>Deference (n):</strong> Humble submission and respect. <em>Syn: respect, yielding. Ant: disrespect, defiance.</em></li>
      <li><strong>Deleterious (adj):</strong> Causing harm or damage. <em>Syn: harmful, damaging. Ant: beneficial, advantageous.</em></li>
      <li><strong>Delineate (v):</strong> Describe or portray (something) precisely. <em>Syn: describe, outline. Ant: confuse, distort.</em></li>
      <li><strong>Demur (v):</strong> Raise doubts or objections or show reluctance. <em>Syn: object, protest. Ant: agree, accept.</em></li>
      <li><strong>Denigrate (v):</strong> Criticize unfairly; disparage. <em>Syn: disparage, belittle. Ant: praise, extol.</em></li>
      <li><strong>Deride (v):</strong> Express contempt for; ridicule. <em>Syn: mock, scoff at. Ant: respect, praise.</em></li>
      <li><strong>Derivative (adj):</strong> Imitative of the work of another person, and usually disapproved of for that reason. <em>Syn: unoriginal, uninventive. Ant: original, innovative.</em></li>
      <li><strong>Desiccate (v):</strong> Remove the moisture from (something); cause to become completely dry. <em>Syn: dry, dehydrate. Ant: moisten, hydrate.</em></li>
      <li><strong>Desultory (adj):</strong> Lacking a plan, purpose, or enthusiasm. <em>Syn: casual, cursory. Ant: keen, systematic.</em></li>
      <li><strong>Diatribe (n):</strong> A forceful and bitter verbal attack against someone or something. <em>Syn: tirade, harangue. Ant: compliment, praise.</em></li>
      <li><strong>Didactic (adj):</strong> Intended to teach, particularly in having moral instruction as an ulterior motive. <em>Syn: instructive, educational. Ant: uninformative, uninstructive.</em></li>
      <li><strong>Diffident (adj):</strong> Modest or shy because of a lack of self-confidence. <em>Syn: shy, bashful. Ant: confident, bold.</em></li>
      <li><strong>Digress (v):</strong> Leave the main subject temporarily in speech or writing. <em>Syn: deviate, stray. Ant: stay, focus.</em></li>
      <li><strong>Dirge (n):</strong> A lament for the dead, especially one forming part of a funeral rite. <em>Syn: elegy, requiem. Ant: anthem, paean.</em></li>
      <li><strong>Disabuse (v):</strong> Persuade (someone) that an idea or belief is mistaken. <em>Syn: undeceive, correct. Ant: deceive, mislead.</em></li>
      <li><strong>Discern (v):</strong> Perceive or recognize (something). <em>Syn: perceive, detect. Ant: overlook, miss.</em></li>
      <li><strong>Discordant (adj):</strong> Disagreeing or incongruous. <em>Syn: conflicting, at odds. Ant: harmonious, agreeable.</em></li>
      <li><strong>Discredit (v):</strong> Harm the good reputation of (someone or something). <em>Syn: disgrace, dishonor. Ant: honor, praise.</em></li>
      <li><strong>Discrepancy (n):</strong> An illogical or surprising lack of compatibility or similarity between two or more facts. <em>Syn: inconsistency, difference. Ant: similarity, consistency.</em></li>
      <li><strong>Discrete (adj):</strong> Individually separate and distinct. <em>Syn: separate, distinct. Ant: connected, continuous.</em></li>
      <li><strong>Disingenuous (adj):</strong> Not candid or sincere, typically by pretending that one knows less about something than one really does. <em>Syn: insincere, deceitful. Ant: ingenuous, sincere.</em></li>
      <li><strong>Disinterested (adj):</strong> Not influenced by considerations of personal advantage. <em>Syn: impartial, unbiased. Ant: biased, prejudiced.</em></li>
      <li><strong>Disparage (v):</strong> Regard or represent as being of little worth. <em>Syn: belittle, denigrate. Ant: praise, overrate.</em></li>
      <li><strong>Disparate (adj):</strong> Essentially different in kind; not allowing comparison. <em>Syn: contrasting, different. Ant: homogeneous, similar.</em></li>
      <li><strong>Dissemble (v):</strong> Conceal one's true motives, feelings, or beliefs. <em>Syn: feign, masquerade. Ant: reveal, disclose.</em></li>
      <li><strong>Disseminate (v):</strong> Spread (something, especially information) widely. <em>Syn: spread, circulate. Ant: suppress, hide.</em></li>
      <li><strong>Dissonance (n):</strong> Lack of harmony among musical notes. <em>Syn: discord, harshness. Ant: harmony, accord.</em></li>
      <li><strong>Diverge (v):</strong> (Of a road, route, or line) separate from another route and go in a different direction. <em>Syn: separate, part. Ant: converge, join.</em></li>
      <li><strong>Dogmatic (adj):</strong> Inclined to lay down principles as incontrovertibly true. <em>Syn: opinionated, arbitrary. Ant: open-minded, flexible.</em></li>
      <li><strong>Dupe (v):</strong> Deceive; trick. <em>Syn: trick, hoodwink. Ant: help, protect.</em></li>
      <li><strong>Ebullient (adj):</strong> Cheerful and full of energy. <em>Syn: exuberant, buoyant. Ant: depressed, apathetic.</em></li>
      <li><strong>Eclectic (adj):</strong> Deriving ideas, style, or taste from a broad and diverse range of sources. <em>Syn: wide-ranging, broad-based. Ant: narrow, specific.</em></li>
      <li><strong>Efficacy (n):</strong> The ability to produce a desired or intended result. <em>Syn: effectiveness, success. Ant: inefficacy, failure.</em></li>
      <li><strong>Elegy (n):</strong> A poem of serious reflection, typically a lament for the dead. <em>Syn: lament, dirge. Ant: paean, celebration.</em></li>
      <li><strong>Elicit (v):</strong> Evoke or draw out (a response, answer, or fact) from someone in reaction to one's own actions or questions. <em>Syn: obtain, draw out. Ant: hide, keep.</em></li>
      <li><strong>Eloquent (adj):</strong> Fluent or persuasive in speaking or writing. <em>Syn: fluent, articulate. Ant: inarticulate, tongue-tied.</em></li>
      <li><strong>Embellish (v):</strong> Make (something) more attractive by the addition of decorative details or features. <em>Syn: decorate, adorn. Ant: strip, simplify.</em></li>
      <li><strong>Empirical (adj):</strong> Based on, concerned with, or verifiable by observation or experience rather than theory or pure logic. <em>Syn: practical, firsthand. Ant: theoretical, hypothetical.</em></li>
      <li><strong>Emulate (v):</strong> Match or surpass (a person or achievement), typically by imitation. <em>Syn: imitate, copy. Ant: neglect, diverge.</em></li>
      <li><strong>Endemic (adj):</strong> (Of a disease or condition) regularly found among particular people or in a certain area. <em>Syn: local, regional. Ant: pandemic, global.</em></li>
      <li><strong>Enervate (v):</strong> Cause (someone) to feel drained of energy or vitality; weaken. <em>Syn: exhaust, tire. Ant: invigorate, energize.</em></li>
      <li><strong>Engender (v):</strong> Cause or give rise to (a feeling, situation, or condition). <em>Syn: produce, create. Ant: destroy, prevent.</em></li>
    </ol>

    <h3>3. Idioms and Phrases</h3>
    <p>Idioms are phrases whose meanings cannot be deduced from the literal definitions of the words.</p>
    <ul>
      <li><strong>A blessing in disguise:</strong> A good thing that seemed bad at first.</li>
      <li><strong>A dime a dozen:</strong> Something common.</li>
      <li><strong>Beat around the bush:</strong> Avoid saying what you mean, usually because it is uncomfortable.</li>
      <li><strong>Better late than never:</strong> Better to arrive late than not to come at all.</li>
      <li><strong>Bite the bullet:</strong> To get something over with because it is inevitable.</li>
      <li><strong>Break a leg:</strong> Good luck.</li>
      <li><strong>Call it a day:</strong> Stop working on something.</li>
      <li><strong>Cut somebody some slack:</strong> Don't be so critical.</li>
      <li><strong>Cutting corners:</strong> Doing something poorly in order to save time or money.</li>
      <li><strong>Easy does it:</strong> Slow down.</li>
      <li><strong>Get out of hand:</strong> Get out of control.</li>
      <li><strong>Get something out of your system:</strong> Do the thing you've been wanting to do so you can move on.</li>
      <li><strong>Get your act together:</strong> Work better or leave.</li>
      <li><strong>Give someone the benefit of the doubt:</strong> Trust what someone says.</li>
      <li><strong>Go back to the drawing board:</strong> Start over.</li>
      <li><strong>Hang in there:</strong> Don't give up.</li>
      <li><strong>Hit the sack:</strong> Go to sleep.</li>
      <li><strong>It's not rocket science:</strong> It's not complicated.</li>
      <li><strong>Let someone off the hook:</strong> To not hold someone responsible for something.</li>
      <li><strong>Make a long story short:</strong> Tell something briefly.</li>
      <li><strong>Miss the boat:</strong> It's too late.</li>
      <li><strong>No pain, no gain:</strong> You have to work for what you want.</li>
      <li><strong>On the ball:</strong> Doing a good job.</li>
      <li><strong>Pull someone's leg:</strong> To joke with someone.</li>
      <li><strong>Pull yourself together:</strong> Calm down.</li>
      <li><strong>So far so good:</strong> Things are going well so far.</li>
      <li><strong>Speak of the devil:</strong> The person we were just talking about showed up!</li>
      <li><strong>That's the last straw:</strong> My patience has run out.</li>
      <li><strong>The best of both worlds:</strong> An ideal situation.</li>
      <li><strong>Time flies when you're having fun:</strong> You don't notice how long something lasts when it's fun.</li>
      <li><strong>To get bent out of shape:</strong> To get upset.</li>
      <li><strong>To make matters worse:</strong> Make a problem worse.</li>
      <li><strong>Under the weather:</strong> Sick.</li>
      <li><strong>We'll cross that bridge when we come to it:</strong> Let's not talk about that problem right now.</li>
      <li><strong>Wrap your head around something:</strong> Understand something complicated.</li>
      <li><strong>You can say that again:</strong> That's true, I agree.</li>
      <li><strong>Your guess is as good as mine:</strong> I have no idea.</li>
      <li><strong>A bird in the hand is worth two in the bush:</strong> What you have is worth more than what you might have later.</li>
      <li><strong>A penny for your thoughts:</strong> Tell me what you're thinking.</li>
      <li><strong>A penny saved is a penny earned:</strong> Money you save today you can spend later.</li>
      <li><strong>A perfect storm:</strong> The worst possible situation.</li>
      <li><strong>A picture is worth 1000 words:</strong> Better to show than tell.</li>
      <li><strong>Actions speak louder than words:</strong> Believe what people do and not what they say.</li>
      <li><strong>Add insult to injury:</strong> To make a bad situation worse.</li>
      <li><strong>Barking up the wrong tree:</strong> To be mistaken, to be looking for solutions in the wrong place.</li>
      <li><strong>Birds of a feather flock together:</strong> People who are alike are often friends.</li>
      <li><strong>Bite off more than you can chew:</strong> Take on a project that you cannot finish.</li>
      <li><strong>Break the ice:</strong> Make people feel more comfortable.</li>
      <li><strong>By the skin of your teeth:</strong> Just barely.</li>
      <li><strong>Comparing apples to oranges:</strong> Comparing two things that cannot be compared.</li>
    </ul>

    <h3>4. One-Word Substitutions</h3>
    <p>One-word substitutions help in making writing concise and precise.</p>
    <ul>
      <li><strong>Agnostic:</strong> One who is not sure about God's existence.</li>
      <li><strong>Altruist:</strong> A lover of mankind.</li>
      <li><strong>Amateur:</strong> One who does a thing for pleasure and not as a profession.</li>
      <li><strong>Ambidextrous:</strong> One who can use either hand with ease.</li>
      <li><strong>Anarchist:</strong> One who is out to destroy all governance, law, and order.</li>
      <li><strong>Apostate:</strong> A person who has changed his faith.</li>
      <li><strong>Arbitrator:</strong> A person appointed by two parties to solve a dispute.</li>
      <li><strong>Ascetic:</strong> One who leads an austere life.</li>
      <li><strong>Atheist:</strong> A person who does not believe in God.</li>
      <li><strong>Bankrupt/Insolvent:</strong> One who is unable to pay his debts.</li>
      <li><strong>Bigot:</strong> One who is filled with excessive enthusiasm in religious matters.</li>
      <li><strong>Bohemian:</strong> An unconventional style of living.</li>
      <li><strong>Cacographist:</strong> One who is bad in spellings.</li>
      <li><strong>Cannibal:</strong> One who feeds on human flesh.</li>
      <li><strong>Carnivorous:</strong> One who feeds on flesh.</li>
      <li><strong>Chauvinist:</strong> A person who is blindly devoted to an idea/a person displaying aggressive patriotism.</li>
      <li><strong>Connoisseur:</strong> A critical judge of any art and craft.</li>
      <li><strong>Contemporaries:</strong> Persons living at the same time.</li>
      <li><strong>Convalescent:</strong> One who is recovering health after illness.</li>
      <li><strong>Coquette:</strong> A girl/woman who flirts with men.</li>
      <li><strong>Cosmopolitan:</strong> A person who regards the whole world as his country.</li>
      <li><strong>Cynosure:</strong> One who is a center of attraction.</li>
      <li><strong>Demagogue:</strong> A leader who sways his followers by his oratory.</li>
      <li><strong>Dilettante:</strong> A dabbler (not serious) in art, science, and literature.</li>
      <li><strong>Egoist:</strong> A lover of oneself, of one's advancement.</li>
      <li><strong>Egotist:</strong> One who often talks of his achievements.</li>
      <li><strong>Emigrant:</strong> A person who leaves his country to settle in another.</li>
      <li><strong>Epicure:</strong> One who is for pleasure of eating and drinking.</li>
      <li><strong>Fastidious:</strong> One hard to please (very selective in his habits).</li>
      <li><strong>Fatalist:</strong> One who believes in fate.</li>
    </ul>

    <h3>5. Common Phrasal Verbs</h3>
    <ul>
      <li><strong>Back down:</strong> To withdraw a claim or assertion in the face of opposition.</li>
      <li><strong>Bring up:</strong> To raise a child or to introduce a topic in conversation.</li>
      <li><strong>Call off:</strong> To cancel something that was scheduled.</li>
      <li><strong>Come across:</strong> To find by chance.</li>
      <li><strong>Give up:</strong> To stop doing something, to surrender.</li>
      <li><strong>Look after:</strong> To take care of someone or something.</li>
      <li><strong>Put off:</strong> To postpone.</li>
      <li><strong>Run into:</strong> To meet someone by chance.</li>
      <li><strong>Set up:</strong> To arrange or establish.</li>
      <li><strong>Take after:</strong> To resemble a parent or ancestor.</li>
    </ul>
  `,
  tricks: [
    {
      title: "Trick 1: Etymology and Root Words Method",
      content: "Instead of memorizing entire words, break them down into their roots, prefixes, and suffixes. This dramatically reduces the number of things you need to memorize.",
      example: "Consider the word 'Somnambulist'. Root 'Somn' = Sleep. Root 'Ambul' = Walk. Suffix 'ist' = Person who does. Thus, a somnambulist is a sleepwalker. If you see 'Somniloquy', you know 'loqu' means to talk (like loquacious), so it's someone who talks in their sleep."
    },
    {
      title: "Trick 2: The Grouping Technique (Synonym Clusters)",
      content: "Never learn words in isolation. Learn them in clusters of synonyms. This helps your brain create strong associative links.",
      example: "Instead of learning 'Abate', learn the cluster: Abate, Diminish, Dwindle, Ebb, Recede, Wane. If an exam asks for a synonym, recalling the cluster gives you multiple options."
    },
    {
      title: "Trick 3: Tone and Connotation Analysis",
      content: "In multiple-choice questions, you don't always need to know the exact meaning of a word to find the answer. You can often deduce it by analyzing whether the word has a positive, negative, or neutral connotation.",
      example: "Question: The dictator's ______ actions led to the downfall of his regime. \nOptions: A) Benevolent, B) Malevolent, C) Innocuous, D) Altruistic.\nBecause the context is a dictator causing a downfall, the word must be strongly negative. A (kind), C (harmless), and D (selfless) are positive/neutral. Even if you aren't sure what Malevolent means exactly, it's the only negative option."
    },
    {
      title: "Trick 4: Visual Mnemonics and Personal Association",
      content: "Create a vivid, often ridiculous mental image or a personal connection with the word.",
      example: "Word: 'Assuage' (to calm or soothe). Mnemonic: 'A sausage'. Imagine a crying child suddenly calming down when given 'a sausage'. This silly image makes it stick permanently."
    }
  ],
  questions: [
    {
      id: 1,
      type: "practice",
      year: null,
      question: "Choose the word which is most similar in meaning to the given word: OBFUSCATE",
      options: ["A) Clarify", "B) Illuminate", "C) Confuse", "D) Synthesize"],
      correctIndex: 2,
      explanation: "Obfuscate means to render obscure, unclear, or unintelligible. 'Confuse' is the closest synonym. 'Clarify' and 'Illuminate' are antonyms."
    },
    {
      id: 2,
      type: "practice",
      year: null,
      question: "Choose the word which is most opposite in meaning to the given word: EPHEMERAL",
      options: ["A) Transient", "B) Permanent", "C) Fragile", "D) Ethereal"],
      correctIndex: 1,
      explanation: "Ephemeral means lasting for a very short time. Therefore, the opposite is 'Permanent'. 'Transient' is a synonym."
    },
    {
      id: 3,
      type: "practice",
      year: null,
      question: "Select the most appropriate meaning of the given idiom: 'To spill the beans'",
      options: ["A) To drop something precious", "B) To reveal secret information unintentionally", "C) To cook a bad meal", "D) To make a mess"],
      correctIndex: 1,
      explanation: "The idiom 'to spill the beans' means to disclose a secret or reveal something prematurely."
    },
    {
      id: 4,
      type: "practice",
      year: null,
      question: "Substitute the phrase with a single word: 'A person who hates mankind'",
      options: ["A) Philanthropist", "B) Misanthrope", "C) Misogynist", "D) Altruist"],
      correctIndex: 1,
      explanation: "A misanthrope is a person who dislikes humankind and avoids human society. A philanthropist loves mankind, a misogynist hates women, and an altruist is selflessly concerned for others."
    },
    {
      id: 5,
      type: "practice",
      year: null,
      question: "Select the correctly spelt word.",
      options: ["A) Accomodation", "B) Accommodation", "C) Accomodassion", "D) Acommodation"],
      correctIndex: 1,
      explanation: "The correct spelling is 'Accommodation', featuring double 'c' and double 'm'."
    },
    {
      id: 6,
      type: "practice",
      year: null,
      question: "Choose the word that best completes the sentence: The manager's ______ attitude made it difficult for the team to propose new ideas without fear of harsh criticism.",
      options: ["A) Benevolent", "B) Caustic", "C) Apathetic", "D) Placid"],
      correctIndex: 1,
      explanation: "A caustic attitude is sarcastic and scathing in a bitter way, which fits the context of 'harsh criticism'."
    },
    {
      id: 7,
      type: "practice",
      year: null,
      question: "What is the meaning of the phrasal verb 'To look down upon'?",
      options: ["A) To inspect carefully", "B) To respect deeply", "C) To regard with contempt or feeling of superiority", "D) To search for something dropped on the floor"],
      correctIndex: 2,
      explanation: "To 'look down upon' someone means to consider oneself superior to them; to despise them."
    },
    {
      id: 8,
      type: "practice",
      year: null,
      question: "Select the synonym of 'METICULOUS'.",
      options: ["A) Sloppy", "B) Fastidious", "C) Careless", "D) Broad"],
      correctIndex: 1,
      explanation: "Meticulous means showing great attention to detail; very careful and precise. 'Fastidious' is the closest synonym."
    },
    {
      id: 9,
      type: "practice",
      year: null,
      question: "Select the antonym of 'AMELIORATE'.",
      options: ["A) Worsen", "B) Improve", "C) Mitigate", "D) Appease"],
      correctIndex: 0,
      explanation: "Ameliorate means to make something bad or unsatisfactory better. Thus, the antonym is 'Worsen'."
    },
    {
      id: 10,
      type: "practice",
      year: null,
      question: "Which root word is associated with 'time'?",
      options: ["A) Path", "B) Chron", "C) Dict", "D) Bene"],
      correctIndex: 1,
      explanation: "The root 'Chron' means time, as seen in words like chronology, chronic, and synchronize."
    },
    {
      id: 11,
      type: "practice",
      year: null,
      question: "Substitute the phrase: 'One who is indifferent to pleasure or pain'",
      options: ["A) Cynic", "B) Stoic", "C) Epicurean", "D) Ascetic"],
      correctIndex: 1,
      explanation: "A Stoic is a person who can endure pain or hardship without showing their feelings or complaining."
    },
    {
      id: 12,
      type: "practice",
      year: null,
      question: "Meaning of idiom: 'To beat about the bush'",
      options: ["A) To punish severely", "B) To boast about oneself", "C) To talk about irrelevant things to avoid the main topic", "D) To search thoroughly in a forest"],
      correctIndex: 2,
      explanation: "'Beat about the bush' means avoiding the main topic, not speaking directly about the issue."
    },
    {
      id: 13,
      type: "practice",
      year: null,
      question: "Choose the word most similar in meaning: SAGACIOUS",
      options: ["A) Foolish", "B) Wise", "C) Bitter", "D) Tasty"],
      correctIndex: 1,
      explanation: "Sagacious means having or showing keen mental discernment and good judgment; wise or shrewd."
    },
    {
      id: 14,
      type: "practice",
      year: null,
      question: "Complete the sentence: His ______ behavior at the formal dinner embarrassed his family.",
      options: ["A) Decorous", "B) Boorish", "C) Suave", "D) Urbane"],
      correctIndex: 1,
      explanation: "Boorish means rough and bad-mannered; coarse. This fits the context of causing embarrassment at a formal dinner."
    },
    {
      id: 15,
      type: "practice",
      year: null,
      question: "Antonym of 'LUCID':",
      options: ["A) Clear", "B) Obscure", "C) Rational", "D) Luminous"],
      correctIndex: 1,
      explanation: "Lucid means expressed clearly; easy to understand. Its antonym is 'Obscure'."
    },
    {
      id: 16,
      type: "practice",
      year: null,
      question: "One word for 'A handwriting that cannot be read':",
      options: ["A) Illegible", "B) Incorrigible", "C) Invincible", "D) Infallible"],
      correctIndex: 0,
      explanation: "Illegible refers to text that is not clear enough to be read."
    },
    {
      id: 17,
      type: "practice",
      year: null,
      question: "Identify the correct meaning: 'Bite the bullet'",
      options: ["A) To engage in a physical fight", "B) To accept an inevitable impending hardship and endure it", "C) To eat very fast", "D) To remain silent"],
      correctIndex: 1,
      explanation: "'Bite the bullet' means to decide to do something difficult or unpleasant that one has been putting off."
    },
    {
      id: 18,
      type: "practice",
      year: null,
      question: "Select the appropriately spelt word.",
      options: ["A) Harasment", "B) Harrassment", "C) Harassment", "D) Harrasment"],
      correctIndex: 2,
      explanation: "The correct spelling is 'Harassment', with one 'r' and two 's's."
    },
    {
      id: 19,
      type: "practice",
      year: null,
      question: "Synonym of 'ENIGMA':",
      options: ["A) Mystery", "B) Clarity", "C) Solution", "D) Energy"],
      correctIndex: 0,
      explanation: "An enigma is a person or thing that is mysterious, puzzling, or difficult to understand."
    },
    {
      id: 20,
      type: "practice",
      year: null,
      question: "Complete the sentence with correct phrasal verb: The meeting was ______ because of the manager's sudden illness.",
      options: ["A) called off", "B) called on", "C) called for", "D) called out"],
      correctIndex: 0,
      explanation: "'Called off' means to cancel an event or agreement."
    },
    {
      id: 21,
      type: "past_year",
      year: 2022,
      question: "Find the synonym of 'CANDID' (UIIC AO 2022)",
      options: ["A) Secretive", "B) Frank", "C) Deceitful", "D) Guarded"],
      correctIndex: 1,
      explanation: "Candid means truthful and straightforward; frank."
    },
    {
      id: 22,
      type: "past_year",
      year: 2021,
      question: "Choose the antonym for 'ARROGANT' (UIIC AO 2021)",
      options: ["A) Proud", "B) Humble", "C) Haughty", "D) Insolent"],
      correctIndex: 1,
      explanation: "Arrogant means having an exaggerated sense of one's own importance. Humble is the direct antonym."
    },
    {
      id: 23,
      type: "past_year",
      year: 2020,
      question: "Select the correct meaning of the idiom 'To add fuel to the fire' (UIIC AO 2020)",
      options: ["A) To calm a situation", "B) To make a bad situation worse", "C) To cook food over an open flame", "D) To encourage someone positively"],
      correctIndex: 1,
      explanation: "To add fuel to the fire means to do or say something that makes a difficult situation even worse."
    },
    {
      id: 24,
      type: "past_year",
      year: 2019,
      question: "One word substitution: 'A person who knows many languages' (UIIC AO 2019)",
      options: ["A) Linguist", "B) Polyglot", "C) Bilingual", "D) Translator"],
      correctIndex: 1,
      explanation: "A polyglot is a person who knows and is able to use several languages."
    },
    {
      id: 25,
      type: "past_year",
      year: 2018,
      question: "Fill in the blank: The new policy will ______ the burden on the middle class. (UIIC AO 2018)",
      options: ["A) Exacerbate", "B) Alleviate", "C) Enhance", "D) Aggravate"],
      correctIndex: 1,
      explanation: "Alleviate means to make suffering or a problem less severe. It fits perfectly with reducing a burden."
    }
  ]
};

export default topicData;
