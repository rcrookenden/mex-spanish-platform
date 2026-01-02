const words = [
  {
    slug: "chela",
    title: "Chela",
    partOfSpeech: "nf",
    meaning: "Beer 🍻",

    tags: ["B1 (¡Ya le agarras la onda!)", "Used EVERYWHERE 🇲🇽", "Slang 🌶️"],

    examples: [
      { spanish: "¿Nos lanzamos por unas chelas, wey?", english: "Wanna go grab some beers, dude?" },
      { spanish: "Se me antoja una chela bien muerta.", english: "I feel like an ice-cold beer." }
    ],
    audioUrls: [
      "https://example.com/audio/chela1.mp3",
      "https://example.com/audio/chela2.mp3"
    ],
    similarWords: ["chelear", "chelería", "chelero", "cheve"],
    usefulChunks: [
      { chunk: "echarse una chela", translation: "to have a beer" },
      { chunk: "poner las chelas", translation: "to bring the beers" },
      { chunk: "invitarle una chela", translation: "to buy someone a beer" }
    ],
    cartoonImage: "/images/caguama.png",
    notes: "'Chela' is to Mexicans what 'brew' or 'brewski' is to English speakers... maybe even more common, in fact!",
    conversation: [
      { spanish: "¿Qué onda, vamos por unas chelas?", english: "What's up, wanna go grab some beers?" },
      { spanish: "¡Va!", english: "I'm in!" }
    ],
    quiz: {
      q1: {
        question: "Which of these can mean 'to have a beer'?",
        correct: "echarse una chela",
        wrong: "lanzar la chancla"
      },
      q2: {
        question: "If someone asks for 'una chela bien muerta', how do they want their beer?",
        correct: "Very cold",
        wrong: "Very hot"
      }
    }
  },
 {
  slug: "chido",
  title: "Chido",
  partOfSpeech: "adj",

  meaning: `👉 <strong>cool / awesome</strong><br>
💡 <strong>Chido</strong> is the go-to Mexican way (along with <strong>padre</strong>) to say something's cool, awesome, fun, etc.<br>
Just keep it far away from formal settings and you'll be gold!
  `,

  tags: ["A2 (¡Vas bien!)", "Used EVERYWHERE 🇲🇽", "Slang 🌶️"],

  tone: `✅ Informal but not offensive!<br>
  ✅ Positive, friendly, upbeat vibe.<br>
  ✅ Perfect for casual speech with friends.<br>
  ❌ <strong>NOT</strong> recommended in formal or professional contexts.
  `,

  examples: [
    { spanish: "Qué chido está tu carro.", english: "Your car is so cool." },
    { spanish: "¡Estuvo chido el concierto!", english: "The concert was awesome!" }
  ],

  audioUrls: [
    "https://example.com/audio/chido1.mp3",
    "https://example.com/audio/chido2.mp3"
  ],

  similarWords: ["padre", "chingón", "perro", "cool"],

  usefulChunks: [
    { chunk: "estar chido", translation: "to be cool" },
    { chunk: "qué chido", translation: "how cool" },
    { chunk: "bien / súper chido", translation: "really cool" }
  ],

  cartoonImage: "/images/chido.png",

  conversation: [], // triggers fallback wild message

  quiz: {
    q1: { 
      question: "What does <strong>chido</strong> mean?", 
      correct: "A. Cool", 
      wrong: "B. Sad" 
    },
    q2: { 
      question: "If you say <strong>estuvo chido</strong>, what do you mean?", 
      correct: "B. It was awesome", 
      wrong: "A. It was terrible" 
    }
  }
},

  {
    slug: "mande",
    title: "¿Mande?",
    partOfSpeech: "interj",
    meaning:
      "1. A polite way of saying 'Pardon?' or 'Sorry?'\n\n 2. Used to respond when someone calls your name, like 'Yeah?' or 'What?'",

    tags: ["A1 (¡Vas empezando!)", "Used EVERYWHERE 🇲🇽", "Standard Mexican Spanish 💀", "Formal 💼"],

    examples: [
      { spanish: "¿Mande? No te escuché bien.", english: "Sorry? I didn't catch that." },
      { spanish: "Mande, Má.", english: "What is it, Mom?" }
    ],
    audioUrls: [
      "https://example.com/audio/mande1.mp3",
      "https://example.com/audio/mande2.mp3"
    ],
    similarWords: ["¿Perdón?", "¿Cómo?", "¿Qué?"],
    usefulChunks: [
      { chunk: "¿Mande?", translation: "Pardon? / Sorry?" },
      { chunk: "¿Mande? ¡No te escucho! (cuando hablas por teléfono)", translation: "What was that? I can't hear you!" }
    ],
    cartoonImage: "/images/mande.png",
    notes:
      "Sooooo, when you don't understand something, what should you use: \n\n ¿Mande?', ¿Cómo?', or '¿Qué?' \n\n You've just asked the million-dollar question, my Spanish-speaking friend. 😉 \n\n Here's a super quick run-down: \n\n – '¿Mande?' carries a more polite and deferential tone. It's also more common among older generations. \n\n –	'¿Cómo?' is neutral and casual – perfect for pal-to-pal interactions and modern speech. It's also VERY popular in urban areas. \n\n –	'¿Qué?' sounds just as abrupt as it does in English. Uh-oh!",
    conversation: [
      { spanish: "¡Erika!", english: "Erika!" },
      { spanish: "Mande, Má.", english: "Yeah, Mom?" }
    ],
    quiz: {
      q1: {
        question: "What is 'mande' generally used for?",
        correct: "A. To respond when you didn't quite hear someone",
        wrong: "B. To tell someone what to do"
      },
      q2: {
        question: "Which of these is more polite?",
        correct: "A. ¿Mande?",
        wrong: "B. ¿Qué?"
      }
    },
    video: "https://www.youtube.com/embed/KQJZ_lnn4-A"
  },
  {
    slug: "güey",
    title: "Güey / Wey",
    partOfSpeech: "nm",
    meaning:
      "1. Dude / Bro / Mate (for you Brits!) / Guy \n\n 2. Idiot / Dummy / Idiot (in a playful or insulting way)",

    tags: ["A2 (¡Vas bien!)", "Used EVERYWHERE 🇲🇽", "Standard Mexican Spanish 🌶️"],

    examples: [
      { spanish: "Ese güey siempre llega tarde.", english: "That guy's always late." },
      { spanish: "¿Cómo estás, wey?", english: "How are you, bro?" },
      { spanish: "No seas güey, no se hace así.", english: "Don't be an idiot, that's not how you do it." },
      { spanish: "¡Fíjate por dónde vas, wey! ¿Qué no sabes caminar?", english: "Watch where you're going, idiot! Don't you know how to walk?" }
    ],
    audioUrls: [
      "https://example.com/audio/guey1.mp3",
      "https://example.com/audio/guey2.mp3",
      "https://example.com/audio/guey3.mp3",
      "https://example.com/audio/guey4.mp3"
    ],
    similarWords: ["tipo", "vato", "bro", "morro", "carnal"],
    usefulChunks: [
      { chunk: "¡No seas güey!", translation: "Don't be dumb!" },
      { chunk: "ese güey", translation: "that dude/guy" },
      { chunk: "¡Ya, wey!", translation: "Enough, man! / Stop it, dude!" },
      { chunk: "Vas, güey.", translation: "You're up, man. / Go for it, bro." },
      { chunk: "¡Ay, wey!", translation: "Damn! / Whoa! / Oh crap! / Duuude!" },
      { chunk: "¡Álzalas, wey!", translation: "Watch your step, dude!" },
      { chunk: "¿Neta, wey?", translation: "Seriously, dude?" },
      { chunk: "Órale, wey.", translation: "Alright, man." },
      { chunk: "¡Qué onda, güey!", translation: "What's up, dude!" },
      { chunk: "¡No te hagas güey!", translation: "Don't play dumb!" }
    ],
    cartoonImage: "/images/wey.png",
    notes:
      "'Wey' is THE most used slang word in Mexican Spanish. Period. \n\n But what's up with the two spellings? \n\n Well, 'güey' is the official version, according to the Royal Spanish Academy and the Mexican Academy of Language. \n\n It's actually derived from 'buey' (an ox), which is why it can also mean dumb. I mean, oxen aren't exactly known for their speed or wit. 😉 \n\n BUT in informal writing – texts, memes, social media, etc. – 'wey' is much more common.",
    conversation: [
      { spanish: "¿Viste lo que hizo ese güey?", english: "Did you see what that dude did?" },
      { spanish: "Sí, no manches.", english: "Yeah, no way!" }
    ],
    quiz: {
      q1: {
        question: "What does 'güey' usually mean?",
        correct: "Dude",
        wrong: "Dog"
      },
      q2: {
        question: "If someone says '¡No seas güey!', what do they mean?",
        correct: "Don't be dumb!",
        wrong: "Don't be mean!"
      }
    },
    video: "https://www.youtube.com/embed/n-Kk5FNmPjU"
  },
  {
    slug: "neta",
    title: "Neta",
    partOfSpeech: "nf",
    meaning: "Truth / For real?",

    tags: ["B2 (¡Nivelazo!)", "Used EVERYWHERE 🇲🇽", "Slang 🌶️"],
 
    examples: [
      { spanish: "¿Neta? No te creo.", english: "For real? I don't believe you." },
      { spanish: "Te lo digo neta.", english: "I'm telling you the truth." }
    ],
    audioUrls: [
      "https://example.com/audio/neta1.mp3",
      "https://example.com/audio/neta2.mp3"
    ],
    similarWords: ["de verdad", "en serio", "la verdad"],
    usefulChunks: [
      { chunk: "¿neta?", translation: "really? / for real?" },
      { chunk: "la neta", translation: "the truth / honestly" }
    ],
    cartoonImage: "/images/neta.png",
    notes:
      "'Neta' is a must-know word if you want to sound like a real chilango or anyone from Mexico.",
    conversation: [
      { spanish: "¿Ganó la lotería?", english: "He won the lottery?" },
      { spanish: "¡Sí, neta!", english: "Yeah, for real!" }
    ],
    quiz: {
      q1: {
        question: "What does '¿neta?' mean?",
        correct: "For real?",
        wrong: "Nevermind"
      },
      q2: {
        question: "If someone says 'la neta', what are they talking about?",
        correct: "The truth",
        wrong: "The net"
      }
    },
    video: "https://www.youtube.com/embed/8PkmMlK1P7o"
  },
 
];

export default words;