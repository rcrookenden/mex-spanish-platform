const words = [
  {
    slug: "chela",
    title: "Chela",
    partOfSpeech: "nf",
    meaning: "Beer 🍻",
    tags: [
      { label: "Slang 💀", color: "bg-green-700 text-white" },
      { label: "B1 (¡Ya le agarras la onda!)", color: "bg-yellow-400 text-black" },
      { label: "Used EVERYWHERE 🇲🇽", color: "bg-red-600 text-white" }
    ],
    examples: [
      { spanish: "¿Nos lanzamos por unas chelas, wey?", english: "Wanna go grab some beers, dude?" },
      { spanish: "Se me antoja una chela bien muerta.", english: "I feel like an ice-cold beer." }
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
      { spanish: "¿Qué onda, vamos por unas chelas?", english: "What’s up, wanna go grab some beers?" },
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
    meaning: "Cool / Awesome",
    tags: [
      { label: "Slang 💀", color: "bg-green-700 text-white" },
      { label: "A2 (¡Vas bien!)", color: "bg-yellow-400 text-black" },
      { label: "Used EVERYWHERE 🇲🇽", color: "bg-red-600 text-white" }
    ],
    examples: [
      { spanish: "Qué chido está tu carro.", english: "Your car is so cool." },
      { spanish: "¡Estuvo chido el concierto!", english: "The concert was awesome!" }
    ],
    similarWords: ["padre", "chingón", "perro", "cool"],
    usefulChunks: [
      { chunk: "estar chido", translation: "to be cool" },
      { chunk: "qué chido", translation: "how cool" },
      { chunk: "bien / súper chido", translation: "really cool" }
    ],
    cartoonImage: "/images/chido.png",
    notes: "'Chido' is an excellent way to describe anything awesome, cool, or great in Mexico!\n\nYou WILL also hear 'padre' a lot, though.\n\nThe difference?\n\nWell, ‘padre’ is a bit more old-school and family-friendly, while ‘chido’ is slangier and more popular with the younger crowd. 🤙",
    conversation: [
      { spanish: "¿Te gustó la película?", english: "Did you like the movie?" },
      { spanish: "Sí, estuvo chido.", english: "Yeah, it was cool." }
    ],
    quiz: {
      q1: {
        question: "What does 'chido' mean?",
        correct: "A. Cool",
        wrong: "B. Sad"
      },
      q2: {
        question: "If you say 'estuvo chido', what do you mean?",
        correct: "B. It was awesome",
        wrong: "A. It was terrible"
      }
    },
    video: "https://www.youtube.com/embed/lG0Ys-2d4MA"
  },
  {
    slug: "mande",
    title: "¿Mande?",
    partOfSpeech: "interj",
    meaning: "1. A polite way of saying 'Pardon?' or 'Sorry?' \n\n 2. Used to respond when someone calls your name, like 'Yeah?' or 'What?'",
    tags: [
      { label: "Formal 💼", color: "bg-green-700 text-white" },
      { label: "A1 (¡Vas emepezando!)", color: "bg-yellow-400 text-black" },
      { label: "Used EVERYWHERE 🇲🇽 ", color: "bg-red-600 text-white" }
    ],
    examples: [
      { spanish: "¿Mande? No te escuché bien.", english: "Sorry? I didn’t catch that." },
      { spanish: "Mande, Má.", english: "What is it, Mom?" }
    ],
    similarWords: ["¿Perdón?", "¿Cómo?", "¿Qué?"],
    usefulChunks: [
      { chunk: "¿Mande?", translation: "Pardon? / Sorry?" },
      { chunk: "¿Mande? ¡No te escucho! (cuando hablas por teléfono)", translation: "What was that? I can't hear you!" }
    ],
    cartoonImage: "/images/mande.png",
    notes: "Sooooo, when you don’t understand something, what should you use: \n\n ¿Mande?’, ¿Cómo?’, or ‘¿Qué?’ \n\n You’ve just asked the million-dollar question, my Spanish-speaking friend. 😉 \n\n Here’s a super quick run-down: \n\n – ‘¿Mande?’ carries a more polite and deferential tone. It’s also more common among older generations. \n\n –	‘¿Cómo?’ is neutral and casual – perfect for pal-to-pal interactions and modern speech. It’s also VERY popular in urban areas. \n\n –	‘¿Qué?’ sounds just as abrupt as it does in English. Uh-oh!",
    conversation: [
      { spanish: "¡Erika!", english: "Erika!" },
      { spanish: "Mande, Má.", english: "Yeah, Mom?" }
    ],
    quiz: {
      q1: {
        question: "What is 'mande' generally used for?",
        correct: "A. To respond when you didn’t quite hear someone",
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
    meaning: "1. Dude / Bro / Mate (for you Brits!) / Guy \n\n 2. Idiot / Dummy / Idiot (in a playful or insulting way)",
    tags: [
      { label: "Slang 💀", color: "bg-green-700 text-white" },
      { label: "A2 (¡Vas bien!)", color: "bg-yellow-400 text-black" },
      { label: "Used EVERYWHERE 🇲🇽", color: "bg-red-600 text-white" }
    ],
    examples: [
      { spanish: "Ese güey siempre llega tarde.", english: "That guy's always late." },
      { spanish: "¿Cómo estás, wey?", english: "How are you, bro?" },
      { spanish: "No seas güey, no se hace así.", english: "Don’t be an idiot, that's not how you do it." },
      { spanish: "¡Fíjate por dónde vas, wey! ¿Qué no sabes caminar?", english: "Watch where you’re going, idiot! Don’t you know how to walk?" }
    ],
    similarWords: ["tipo", "vato", "bro", "morro", "carnal"],
    usefulChunks: [
      { chunk: "¡No seas güey!", translation: "Don’t be dumb!" },
      { chunk: "ese güey", translation: "that dude/guy" },
      { chunk: "¡Ya, wey!", translation: "Enough, man! / Stop it, dude!" },
      { chunk: "Vas, güey.", translation: "You’re up, man. / Go for it, bro." },
      { chunk: "¡Ay, wey!", translation: "Damn! / Whoa! / Oh crap! / Duuude!" },
      { chunk: "¡Álzalas, wey!", translation: "Watch your step, dude!" },
      { chunk: "¿Neta, wey?", translation: "Seriously, dude?" },
      { chunk: "Órale, wey.", translation: "Alright, man." },
      { chunk: "¡Qué onda, güey!", translation: "What’s up, dude!" },
      { chunk: "¡No te hagas güey!", translation: "Don’t play dumb!" }
    ],
    cartoonImage: "/images/wey.png",
    notes: "‘Wey’ is THE most used slang word in Mexican Spanish. Period. \n\n But what’s up with the two spellings? \n\n Well, ‘güey’ is the official version, according to the Royal Spanish Academy and the Mexican Academy of Language. \n\n It’s actually derived from ‘buey’ (an ox), which is why it can also mean dumb. I mean, oxen aren’t exactly known for their speed or wit. 😉 \n\n BUT in informal writing – texts, memes, social media, etc. – ‘wey’ is much more common.",
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
    tags: [
      { label: "Slang 💀", color: "bg-green-700 text-white" },
      { label: "B2 (¡Ya casi nativo!)", color: "bg-yellow-400 text-black" },
      { label: "Super Mexican 🇲🇽", color: "bg-red-600 text-white" }
    ],
    examples: [
      { spanish: "¿Neta? No te creo.", english: "For real? I don't believe you." },
      { spanish: "Te lo digo neta.", english: "I'm telling you the truth." }
    ],
    similarWords: ["de verdad", "en serio", "la verdad"],
    usefulChunks: [
      { chunk: "¿neta?", translation: "really? / for real?" },
      { chunk: "la neta", translation: "the truth / honestly" }
    ],
    cartoonImage: "/images/neta.png",
    notes: "'Neta' is a must-know word if you want to sound like a real chilango or anyone from Mexico.",
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
  }
];

export default words;

  
  
  