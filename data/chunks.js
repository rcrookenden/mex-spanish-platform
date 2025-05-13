const chunks = [
  {
    slug: "se-me-hace-tarde",
    title: "Se me hace tarde",
    meaning: "I'm running late",
    explanation:
      "This is what literally all Mexicans say when they’re running late! \n\nIt just means – yep, you guessed it – ‘I’m running late’. \n\nAnd it’s super easy to use. All you have to do is swap out the second word (the indirect object pronoun) depending on who exactly is running late. \n\nImagine I’m having breakfast with Erika, and I suddenly look at the clock and realize I’m late for a meeting. I’d 100% blurt out ‘se me hace tarde’ before springing into action (and probably knock some crockery off the table in the process!). \n\nBut if we were BOTH late for the meeting, I’d say ‘se nos hace tarde’! \n\nSo, I’d change the ‘me’ to ‘nos’ because now we’re both running late! \n\nOh, and just so you know, you CAN also say ‘se hace tarde’ when ‘it’s getting late’ to do something. It's usually followed by ‘para’ –" +
      "<br /><div style='margin-top:0.4rem'><strong>Se hace tarde para ir al mercado.</strong></div>" +
      "<div class='text-gray-600 italic font-normal'>It’s getting late to go to the market.</div>",
    examples: [
      {
        spanish: "¡Se me hace tarde! Ya me tengo que ir.",
        english: "I'm running late! I have to go now."
      },
      {
        spanish: "Ándale, se me hace tarde.",
        english: "Hurry up, I'm running late."
      }
    ],
    similarWords: ["Ya se me hizo tarde", "Voy tarde", "Se hace tarde"],
    tags: [
      { label: "Colloquial 🗣️", color: "bg-green-700 text-white" },
      { label: "B1 (¡Ya le agarras la onda!)", color: "bg-yellow-400 text-black" },
      { label: "Used EVERYWHERE 🇲🇽", color: "bg-red-600 text-white" }
    ]
  },
  {
    slug: "estoy-de-acuerdo",
    title: "Estoy de acuerdo",
    meaning: "I agree",
    explanation:
      "I’m sure you’ve heard this one before … it’s the kind of phrase that makes high-school Spanish teachers do a happy dance behind their stack of old textbooks! \n\nIt means ‘I agree’ in Spanish – and it’s FAR more popular than ’concuerdo’ (hence the happy dance!).\n\nYou can also use the shorter version: ‘de acuerdo’.",
    examples: [
      {
        spanish: "Estoy de acuerdo contigo.",
        english: "I agree with you."
      },
      {
        spanish: "Sí, estoy totalmente de acuerdo.",
        english: "Yeah, I totally agree."
      }
    ],
    similarWords: ["De acuerdo", "Tienes razón", "Eso", "Ándale"],
    tags: [
      { label: "Standard Spanish 📘", color: "bg-green-700 text-white" },
      { label: "A2 (¡Vas bien!)", color: "bg-yellow-400 text-black" },
      { label: "Used EVERYWHERE 🇲🇽", color: "bg-red-600 text-white" }
    ]
  },
  {
    slug: "estoy-seguro",
    title: "Estoy seguro / No estoy seguro",
    meaning: "I'm sure / I'm not sure",
    explanation:
      "These useful chunks mean ‘I’m sure’ and ‘I’m not sure’, respectively.\n\n‘Seguro’ translates as both ‘safe’ and ‘sure’, so yep, ‘estoy seguro’ could also mean ‘I’m safe’.\n\nIt really depends on context, BUT I’d say it’s generally safer (excuse the pun!) to use ‘estoy a salvo’ instead of ‘estoy seguro’ if what you mean is that you’re safe and sound.\n\nAlso, if you want to explain exactly what you’re not sure about, you’re gonna have to follow ‘estoy seguro’ with ‘de que + conjugated verb’ –" +
      "<br /><div style='margin-top:0.4rem'><strong>Estoy seguro de que tiene la razón.</strong></div>" +
      "<div class='text-gray-600 italic font-normal'>I’m sure he’s right.</div>\n\n" +
      "And after ‘no estoy seguro’ it’s ‘de que + verb in the subjunctive’ (uh-oh!) –" +
      "<br /><div style='margin-top:0.4rem'><strong>No estoy seguro de que tenga la razón.</strong></div>" +
      "<div class='text-gray-600 italic font-normal'>I’m not sure he’s right.</div>",
    examples: [
      {
        spanish: "Estoy seguro de que va a venir.",
        english: "I'm sure he's going to come."
      },
      {
        spanish: "No estoy seguro de que sea verdad.",
        english: "I'm not sure it's true."
      }
    ],
    similarWords: ["Obvio", "Sí, claro", "La neta, no sé"],
    tags: [
      { label: "Standard Spanish 📘", color: "bg-green-700 text-white" },
      { label: "A2 (¡Vas bien!)", color: "bg-yellow-400 text-black" },
      { label: "Used EVERYWHERE 🇲🇽", color: "bg-red-600 text-white" }
    ]
  },
  {
    slug: "por-eso",
    title: "Por eso",
    meaning: "Exactly / That’s why",
    explanation:
      "Raise your hand if you’ve ever exclaimed a dramatic ‘Exactly!’ or ‘That’s precisely my point!’ because the person you were talking to just couldn’t get their head around an idea. \n\nWell, that’s EXACTLY how to use ‘¡Por eso!’ in Spanish … just don’t forget to put on your best “why-can’t-you-understand-me” face.\n\nOh, and it’s also a super useful sentence starter — usually meaning something like ‘That’s why…’",
    examples: [
      {
        spanish: "¡Por eso te lo dije antes!",
        english: "That’s why I told you earlier!"
      },
      {
        spanish: "¡Por eso, wey!",
        english: "That's exactly my point, dude!"
      }
    ],
    similarWords: ["Ándale", "Te digo"],
    tags: [
      { label: "Standard Spanish 📘", color: "bg-green-700 text-white" },
      { label: "B1 (¡Ya le agarras la onda!)", color: "bg-yellow-400 text-black" },
      { label: "Used EVERYWHERE 🇲🇽", color: "bg-red-600 text-white" }
    ]
  },
  // New entries fully formatted and added here...
  {
    slug: "que-tengas-buen-dia",
    title: "Que tengas buen día",
    meaning: "Have a nice day!",
    explanation:
      "Ever wondered what the Spanish equivalent of ‘Have a nice day!’ is?\n\nWell, wonder no more!\n\nAll you need to do is say an earnest ‘¡Que tengas buen día!’\n\nIt’s simple, polite, and SUPER common.",
    examples: [
      {
        spanish: "¡Que tengas buen día! Nos vemos al rato.",
        english: "Have a nice day! See you later."
      },
      {
        spanish: "Gracias por tu ayuda. ¡Que tengas buen día!",
        english: "Thanks for your help. Have a nice day!"
      }
    ],
    similarWords: ["Que te vaya bien", "Bonito día", "Lindo día", "Cuídate"],
    tags: [
      { label: "Standard Spanish 📘", color: "bg-green-700 text-white" },
      { label: "A2 (¡Vas bien!)", color: "bg-yellow-400 text-black" },
      { label: "Used EVERYWHERE 🇲🇽", color: "bg-red-600 text-white" }
    ]
  },
  {
    slug: "que-te-vaya-bien",
    title: "Que te vaya bien",
    meaning: "Take care! / Have a good one!",
    explanation:
      "‘¡Que te vaya bien!’ is just a courteous way to say goodbye.\n\nIt’s kind of like the English ‘Take care!’ or even ‘Have a good one!’\n\nJust remember to swap the ‘te’ out for a ‘le’ when using the formal ‘usted’ form —" +
      "<br /><div style='margin-top:0.4rem'><strong>¡Que le vaya bien!</strong></div>" +
      "<div class='text-gray-600 italic font-normal'>Take care! (formal)</div>",
    examples: [
      {
        spanish: "Bueno, ya me voy. ¡Que te vaya bien!",
        english: "Alright, I’m off. Take care!"
      },
      {
        spanish: "¡Cuídate! ¡Que te vaya bien en el trabajo!",
        english: "Take care! Hope work goes well!"
      }
    ],
    similarWords: ["Cuídate", "Nos vemos", "Que tengas buen día"],
    tags: [
      { label: "Standard Spanish 📘", color: "bg-green-700 text-white" },
      { label: "A2 (¡Vas bien!)", color: "bg-yellow-400 text-black" },
      { label: "Used EVERYWHERE 🇲🇽", color: "bg-red-600 text-white" }
    ]
  },
  {
    slug: "nos-vemos",
    title: "Nos vemos",
    meaning: "See you",
    explanation:
      "This is another SUPER CHUNK!\n\nWhy? Well… you’re about to find out 😉\n\n1. Saying goodbye\nSo, ‘nos vemos’ is the Spanish equivalent of ‘see you’, and you’re gonna be using/hearing it ALL THE TIME when saying goodbye to your Spanish speaking pals.\n\n2. Making plans to meet\nMexicans also use ‘nos vemos’ A LOT in the context of meeting up with someone (instead of ‘encontrarse’, which sounds more formal or stiff)." +
      "<br /><div style='margin-top:0.4rem'><strong>¿A qué hora nos vemos?</strong></div>" +
      "<div class='text-gray-600 italic font-normal'>What time are we meeting?</div>" +
      "<br /><div style='margin-top:0.4rem'><strong>¿En dónde nos vemos?</strong></div>" +
      "<div class='text-gray-600 italic font-normal'>Where are we meeting?</div>\n\n" +
      "3. In casual time expressions\nIt’s also used A LOT with time expressions." +
      "<br /><div style='margin-top:0.4rem'><strong>Nos vemos luego.</strong></div>" +
      "<div class='text-gray-600 italic font-normal'>See you later.</div>" +
      "<br /><div style='margin-top:0.4rem'><strong>Nos vemos más al rato.</strong></div>" +
      "<div class='text-gray-600 italic font-normal'>See you a bit later.</div>",
    examples: [
      {
        spanish: "Nos vemos mañana en la oficina.",
        english: "See you tomorrow at the office."
      },
      {
        spanish: "¡Órale! Nos vemos más al rato.",
        english: "Alrighty! See you a bit later."
      }
    ],
    similarWords: ["Hasta luego", "Ahí nos vemos", "Cuídate"],
    tags: [
      { label: "Colloquial 🗣️", color: "bg-green-700 text-white" },
      { label: "A2 (¡Vas bien!)", color: "bg-yellow-400 text-black" },
      { label: "Used EVERYWHERE 🇲🇽", color: "bg-red-600 text-white" }
    ]
  },
  {
    slug: "ya-me-voy",
    title: "Ya me voy",
    meaning: "I'm off / I'm leaving",
    explanation:
      "This is what you’ll usually say when you’re about to skedaddle; it translates to something like ‘I’m leaving now’ or ‘I’m off’.\n\nGenerally, I’d avoid using the verb ‘salir’ (although it’s not necessarily incorrect!) when you’re leaving a place and want to let the people you’re with know you’re headed out.\n\nThe nuance is as follows:\n- ‘Irse’ focuses more on YOU leaving, often implying you’re leaving the presence of others.\n- ‘Salir’ places more emphasis on leaving a place in a general or physical sense.\n\nIn Mexico, I’d say ‘irse’ will 100% be your go-to.\nBUT in Argentina I know they like to say ‘me voy a ir saliendo’, so do try to listen to what the locals are saying 😊\n\nAh, and you can often soften the blow with a ‘bueno’: Bueno… ya me voy.\nIt’s a CLASSIC Mexican exit strategy 😉",
    examples: [
      {
        spanish: "Bueno… ya me voy. ¡Nos vemos!",
        english: "Well… I’m off. See you!"
      },
      {
        spanish: "Ya me voy, tengo que recoger a mi hijo.",
        english: "I’m off, I have to pick up my son."
      }
    ],
    similarWords: ["Me voy", "Bueno, ya me voy", "Ahí nos vemos"],
    tags: [
      { label: "Colloquial 🗣️", color: "bg-green-700 text-white" },
      { label: "B1 (¡Ya le agarras la onda!)", color: "bg-yellow-400 text-black" },
      { label: "Used EVERYWHERE 🇲🇽", color: "bg-red-600 text-white" }
    ]
  }
];

export default chunks;
