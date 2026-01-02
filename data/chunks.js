// lib/chunks.js

const chunks = [
  {
    slug: "tener-que-ver",
    title: "Tener que ver",
    category: "everyday chunks",

    meaning:
      "Another chunk that should <strong>NEVER</strong> be translated literally.\n\n" +
      "Yep, this one has absolutely nothing to do with seeing! 👀\n\n" +
      "Because it’s the Spanish version of:\n" + 
      "👉 <strong>to have to do with</strong>\n\n" +
      "And just like its English equivalent, you’re often gonna hear it used with <strong>con + alguien/algo</strong>!",

    explanation:
      "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you’re talking about relevance and connection:</p>" +

      "<p class='mb-4'>" +
        "<strong>Creo que tiene que ver con lo que dijiste ayer.</strong><br>" +
        "<em>I think it’s connected to what you said yesterday.</em>" +
      "</p>" +

      "<p class='mb-4'>" +
        "<strong>¿Y eso qué tiene que ver?</strong><br>" +
        "<em>What’s that got to do with anything?</em>" +
      "</p>" +

      "<p class='mb-6'>" +
        "<strong>No tiene nada que ver conmigo.</strong><br>" +
        "<em>It’s got nothing to do with me.</em>" +
      "</p>" +

      "<hr class='my-8 border-t-2 border-gray-400' />" +

      "<p class='text-xl font-semibold mt-6 mb-4'>Oh, and it can also mean <em>to check (with someone)</em>:</p>" +

      "<p class='mb-6'>" +
        "<strong>— ¿Cuándo vas a salir de vacaciones?</strong><br>" +
        "<strong>— No sé, tengo que ver con mi jefe.</strong><br>" +
        "<strong>—</strong> <em>When are you going on vacation?</em><br>" +
        "<strong>—</strong> <em>I don’t know, I gotta check with my boss.</em>" +
      "</p>",

    tone:
      "✅ No slang here, folks! This one’s good ol’ standard Spanish.\n\n" +
      "✅ Neutral and flexible!\n\n" +
      "✅ Feel free to use with your boss, your <strong>suegra</strong>, or your <strong>wey</strong>.",

    examples: [
      {
        spanish: "¿Y yo qué tengo que ver en todo esto?",
        english: "And what does that have to do with me?",
      },
      {
        spanish: "Tiene que ver con lo que pasó ayer.",
        english: "It has to do with what happened yesterday.",
      },
    ],

    similarChunks:
      "Estar relacionado con\n" +
      "No tener que ver\n" +
      "No tener nada que ver\n" +
      "Nada que ver\n" +
      "Cero que ver\n" +
      "Ni al caso",

    // ✅ NEW: Only labels — colors are handled automatically by tagColors.js
    tags: [
      { label: "A2 (¡Vas bien!)" },                        // DIFFICULTY LEVEL
      { label: "Used EVERYWHERE 🇲🇽" },           // LOCATION
      { label: "Standard Spanish 😌" },          // TONE
    ],

    audioUrls: [],
  },

{
  slug: "ponerle-nombre",
  title: "Ponerle + nombre",
  category: "everyday chunks",

  meaning:
    "Here’s a fun collocation (word pairing) for y’all.\n\n" +
    "Mexicans often use <strong>poner</strong> when talking about <strong>naming someone</strong>:\n\n" +
    "So <strong>ponerle + nombre</strong> just means:\n" +
    "👉 <strong>to name him/her + name</strong>\n\n" +
    "Yep, I know… <strong>MASSIVELY</strong> different from English!\n\n" +
    "So yeah, when you’re talking about naming a baby, a dog, etc., you can say:\n\n" +
    "<strong>Le puse + nombre</strong> = <em>I named him/her + name</em>\n\n" +
    "<strong>Le voy a poner + nombre</strong> = <em>I’m going to name him/her + name</em>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you wanna talk about naming, that’s when!</p>" +

    "<p class='mb-4'>" +
      "<strong>Le puse Santiago porque suena elegante.</strong><br>" +
      "<em>I named him Santiago because it sounds classy.</em>" +
    "</p>" +

    // ✅ THIS IS THE DIVIDER YOU SAID WAS MISSING
    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'><strong>Ah, and it even works with pets (your <em>perrihijos</em>, etc.)!</strong></p>" +

    "<p class='mb-6'>" +
      "<strong>A mi perrito le puse Chilaquil.</strong><br>" +
      "<em>I named my dog Chilaquil.</em>" +
    "</p>",

  tone:
    "✅ Not rude.\n\n" +
    "✅ Not slang.\n\n" +
    "✅ Just a <strong>VERY MEXICAN</strong> way to talk about naming.",

  examples: [
    {
      spanish: "La verdad, no sé qué nombre ponerle.",
      english: "Honestly, I don’t know what to call him.",
    },
    {
      spanish: "Póngale como quiera.",
      english: "Call it whatever you want.",
    },
    {
      spanish: "Le pusieron Vader a su gato en honor a Darth Vader.",
      english: "They named their cat Vader in honor of Darth Vader.",
    },
  ],

  similarChunks:
    "Lo/la llamé + nombre\n" +
    "Decirle + nombre",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" },
  ],

  audioUrls: [],
},
{
  slug: "por-poco",
  title: "Por poco",
  category: "everyday chunks",

  meaning:
    "👉 <strong>almost</strong> (but with a dash of danger or near-miss energy!)\n\n" +
    "This one’s used when something <strong>ALMOST</strong> happened… usually something bad, awkward, or intense.\n\n" +
    "So, if Erika tells me, <strong>¡Por poco me caigo!</strong>\n\n" +
    "She’s <strong>NOT</strong> saying, <strong>For little I fall.</strong> \n\n" +
    "She’s saying, <strong>I ALMOST fell!</strong>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When something NEARLY happened (especially if it would've sucked):</p>" +

    "<p class='mb-4'>" +
      "<strong>¡Por poco digo una estupidez en frente de todos!</strong><br>" +
      "<em>I almost said something stupid in front of everyone!</em>" +
    "</p>" +

    "<p class='mb-4'>" +
      "<strong>Por poco me corren del trabajo.</strong><br>" +
      "<em>I was this close to getting fired.</em>" +
    "</p>" +

    // ⭐⭐⭐ THIS IS THE MISSING DIVIDER ⭐⭐⭐
    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>And yes, you <strong>CAN</strong> also use it on its lonesome (it often translates to <em>just</em> or <em>barely</em> in this context):</p>" +

    "<p class='mb-6'>" +
      "<strong>— Pos, ¡llegamos a tiempo!</strong><br>" +
      "<strong>— ¡Por poco!</strong><br>" +
      "<em>— Well, we arrived on time!<br>— Barely!</em>" +
    "</p>",

  tone:
    "✅ Neutral but dramatic.\n\n" +
    "✅ Great for casual conversations.\n\n" +
    "✅ Usually followed by something bad (but not always).",

  examples: [
    {
      spanish: "¡Por poco gano el concurso!",
      english: "I almost won the contest!",
    },
    {
      spanish: "¡Por poco me dejan chato! (real-life example 🎯)",
      english: "I almost got my face smashed in!",
    },
  ],

  similarChunks:
    "Casi casi\n" +
    "Estar a punto de\n" +
    "Por poquito\n" +
    "Estar así de\n" +
    "Por un pelito de gato",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" },
  ],

  audioUrls: [],
},

{
  slug: "se-me-paso-la-mano",
  title: "Se me pasó la mano",
  category: "everyday chunks",

  meaning:
    "👉 <strong>I overdid it</strong>\n" +
    "👉 <strong>I got a bit carried away</strong>\n\n" +
    "Yep, this one’s basically what you say when you accidentally overdo something.\n\n" +
    "Think adding too much chili to the pot, being a bit too harsh, or going a little overboard with the tequila. 🥴\n\n" +
    "It’s often followed by <strong>con + whatever you went overboard with</strong> or <strong>con + a person you treated badly.</strong>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When you’re admitting you overdid something!</p>" +
    "<p class='mb-4'><strong>Se me pasó la mano con el picante.</strong><br><em>I went too heavy on the chili.</em></p>" +
    "<p class='mb-4'><strong>Se me pasó la mano con el maquillaje.</strong><br><em>I went a bit overboard with the makeup.</em></p>" +
    "<p class='mb-4'><strong>Perdón… se me pasó la mano con lo que dije.</strong><br><em>Sorry… I went too far with what I said.</em></p>",

  tone:
    "✅ Colloquial Mexican Spanish.\n\n" +
    "✅ Great for casual convos.\n\n" +
    "✅ Also great for admitting fault… but in a chill kinda way.",

  examples: [
    {
      spanish: "Se me pasó la mano con el mezcal.",
      english: "I went a little overboard with the mezcal."
    },
    {
      spanish: "Creo que se me pasó la mano… (real-life example 🎯)",
      english: "I think I overdid it a bit…"
    },
    {
      spanish: "Se me pasó la mano con Antonio, no debí gritarle.",
      english: "I went too far with Antonio; I shouldn't have yelled at him."
    }
  ],

  similarChunks:
    "Me pasé\n" +
    "Me pasé de lanza\n" +
    "Me pasé de rosca\n" +
    "Me pasé de vivo\n" +
    "La regué\n" +
    "La cagué\n" +
    "Me mamé",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "estar-a-gusto",
  title: "Estar a gusto",
  category: "everyday chunks",

  meaning:
    "This is a chunk that I'd never heard before I got to Mexico.\n\n" +
    "But my Sinaloan roomie loved throwing it around (I had like 6 roomies in my first place).\n\n" +
    "<strong>¿Estás a gusto, wey?</strong>, he'd ask me constantly\n\n" +
    "And for the longest time, I didn't know how to respond!\n\n" +
    "Until I finally worked out that he was asking me if I was <strong>comfortable and/or content</strong>.\n\n" +
    "So yeah, <strong>estar a gusto</strong> basically means:\n" +
    "<strong>👉 to feel good in a place or situation</strong>\n\n\n" +
    "💡Oh, and it's <strong>VERY</strong> often paired with <strong>bien</strong>:\n" +
    "<strong>Estoy bien a gusto.</strong> = <em>I’m so comfy right now.</em>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When you want to say you're comfortable somewhere:</p>" +
    "<p class='mb-4'><strong>Aquí estoy muy a gusto.</strong><br><em>I feel really at ease here.</em></p>" +
    "<p class='mb-6'><strong>¿Estás a gusto?</strong><br><em>Are you comfy? / You good?</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>You can also use it to talk about someone who looks super chilled/comfortable:</p>" +
    "<p class='mb-6'><strong>Mira nomás, está bien a gusto tomando el sol.</strong><br><em>Just look at him, chillin', soaking up the sun.</em></p>",


  tone:
    "✅ Not slangy per se, but definitely on the informal side.\n\n" +
    "✅ Those in service jobs will always say <strong>¿Estás cómodo/a?</strong> instead.\n\n" +
    "✅ Totally safe for chill, friendly settings.",

  examples: [
    {
      spanish: "Se nota que estás a gusto con ella.",
      english: "You can tell you're comfortable around her."
    }
  ],

  similarChunks:
    "¡Qué a gusto!\n" +
    "¡Qué agusticidad!\n" +
    "Estar agustín\n" +
    "Estar a todo dar (Boomers)\n" +
    "Estar súper chill (Gen Zers)",

  tags: [
    { label: "A2 (¡Vas bien!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "se-me-nota",
  title: "Se me nota",
  category: "everyday chunks",

  meaning:
    "Ever had a food-related mishap while out and about?\n\n" +
    "Grease on the ol’ t-shirt and all that jazz.\n\n" +
    "Yep, we’ve all been there.\n\n" +
    "But what if you wanna ask how bad the stain is in Spanish?\n\n" +
    "Well, there’s actually a super specific phrase just for these situations: <strong>¿Se me nota?</strong>\n\n" +
    "It just means:\n" +
    "👉 <strong>Is it obvious? / Can you tell?</strong>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to know if something’s obvious:</p>" +

    "<p class='mb-4'>" +
      "<span class='text-lg underline'>You just saw your crush and can't stop smiling:</span><br>" +
      "<strong>¿Se me notan los nervios?</strong><br>" +
      "<em>Can you tell I’m nervous?</em>" +
    "</p>" +

    "<p class='mb-4'>" +
      "<span class='text-lg underline'>You cried while watching Coco (again):</span><br>" +
      "<strong>¿Se me notan las lágrimas?</strong><br>" +
      "<em>Can you tell I’m crying?</em>" +
    "</p>" +

    "<p class='mb-6'>" +
      "<span class='text-lg underline'>You just spilled coffee all over your t-shirt:</span><br>" +
      "<strong>¿Se me nota la mancha? ¿Sí? ¡Ay, qué pena!</strong><br>" +
      "<em>Can you see the stain? Really? How embarrassing!</em>" +
    "</p>",

  tone:
    "✅ Works in formal and informal settings.\n\n" +
    "✅ Not slangy at all.",

  examples: [
    {
      spanish: "¿Se me nota la cara de enamorado, wey?",
      english: "Can you tell I’m lovestruck, man?"
    }
  ],

  similarChunks:
    "Se te nota\n" +
    "¿Se nota mucho?\n" +
    "¿Qué, no se nota?\n" +
    "No se nota\n" +
    "¿Es obvio?\n" +
    "¿Se alcanza a ver?",

  tags: [
    { label: "A2 (¡Vas bien!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "se-te-nota",
  title: "Se te nota",
  category: "everyday chunks",

  meaning:
    "👉 <strong>It shows</strong>\n" +
    "👉 <strong>It’s obvious</strong>\n" +
    "👉 <strong>You can totally tell</strong>\n\n" +
    "So yeah, if your friend stubbornly declares, <strong>“¡No estoy enamorado!”</strong>\n\n" +
    "But they’ve got that goofy, starry-eyed grin etched all over their face…\n\n" +
    "Well, feel free to raise an eyebrow and hit them with:\n" +
    "<strong>Es que se te nota cañón, wey.</strong>\n" +
    "<em>Dude, it’s super obvious.</em>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to point out that something's obvious:</p>" +

    "<p class='mb-6'>" +
      "<strong>Wey, ponte las pilas en el metro; se te nota lo foráneo.</strong><br>" +
      "<em>Dude, stay alert on the subway; everyone can tell you’re not from here.</em>" +
    "</p>" +

        "<p class='mb-4'>" +
      "<strong>— Me acabo de despertar.<br>— Se te nota.</strong><br>" +
      "<em>— I just woke up.<br>— Yep, I can see.</em>" +
    "</p>",

  tone:
    "✅ Works in formal and informal settings.\n\n" +
    "✅ Not slangy at all.",

  examples: [
        {
      spanish: "Es que se te nota que estás nervioso.",
      english: "Come on, it’s obvious you’re nervous."
    },
    {
      spanish: "— Me desvelé horrible anoche.\n— Se te nota.",
      english: "— I barely slept last night.\n— Yeah, it shows."
    }
  ],

  similarChunks:
    "¿Se me nota?\n" +
    "No se te nota\n" +
    "Se te nota a leguas\n" +
    "Se te ve clarito\n" +
    "Se te ven los subtítulos (for facial expressions)",

  tags: [
    { label: "A2 (¡Vas bien!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "yo-te-acompano",
  title: "Yo te acompaño",
  category: "everyday chunks",

  meaning:
    "Someone heading somewhere and you wanna go with them?\n\n" +
    "Well, you’re gonna be needing the chunk <strong>yo te acompaño</strong>, then!\n\n" +
    "Here’s what it means:\n" +
    "👉 <strong>I’ll come with you</strong>\n" +
    "👉 <strong>I’ll tag along / I’ll come with</strong>\n" +
    "👉 <strong>I’ll keep you company</strong>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Anytime someone’s going somewhere and you want to join them:</p>" +

    "<p class='mb-4'>" +
      "<span class='text-lg underline'>¿Vas a la tienda? Yo te acompaño.</span><br>" +
      "<strong>¿Vas a la tienda? Yo te acompaño.</strong><br>" +
      "<em>Are you going to the store? I’ll come with.</em>" +
    "</p>" +

    "<p class='mb-6'>" +
      "<strong>— ¿Vas por garnachas?<br>— Yo te acompaño.</strong><br>" +
      "<em>— Are you going for street food?<br>— I’ll come with.</em>" +
    "</p>",

  tone:
    "✅ Super common in everyday Mexican Spanish.\n\n" +
    "✅ Nowhere near as stiff as <strong>“I’ll accompany you”</strong> in English.",

  examples: [
    {
      spanish: "Yo te acompaño, ya es bien tarde.",
      english: "I’ll come with you, it’s already really late."
    }
  ],

  similarChunks:
    "Voy contigo\n" +
    "Te acompaño\n" +
    "Yo también voy\n" +
    "¿Puedo ir contigo?\n" +
    "¿Me invitas?",

  tags: [
    { label: "A2 (¡Vas bien!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "te-cuidas",
  title: "Te cuidas",
  category: "everyday chunks",

  meaning:
    "Yep, you guessed it, this one just means (drum roll 🥁)...\n" +
    "<strong>👉 take care</strong>\n\n" +
    "But <strong>NOT</strong> in the sense of warning someone; it’s always used as a farewell.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When you’re saying bye to someone you know. Just like the English <em>take care</em>:</p>" +

    "<p class='mb-4'>" +
      "<span class='text-lg underline'>Nos vemos. Te cuidas.</span><br>" +
      "<strong>Nos vemos. Te cuidas.</strong><br>" +
      "<em>See you. Take care.</em>" +
    "</p>" +

    "<p class='mb-6'>" +
      "<strong>— Bueno, ya me voy.<br>— ¡Va! Te cuidas.</strong><br>" +
      "<em>— Alright, I’m off.<br>— Cool. Take care.</em>" +
    "</p>",

  tone:
    "✅ Sweet, short, and dripping with cariño.\n\n" +
    "✅ Not formal, but not slangy either.\n\n" +
    "✅ Can be genuinely caring or just autopilot casual.",

  examples: [
    {
      spanish: "Me late. Te cuidas.",
      english: "Sounds good. Take care."
    }
  ],

  similarChunks:
    "<a href=\"/chunk/cuidate\" class=\"text-blue-700\"><strong>Cuídate</strong></a>\n" +
    "<a href=\"/chunk/con-cuidado\" class=\"text-blue-700\"><strong>Con cuidado</strong></a>\n" +
    "Te vas por la sombrita\n" +
    "<a href=\"/chunk/que-te-vaya-bien\" class=\"text-blue-700\"><strong>Que te vaya bien</strong></a>\n" +
    "<a href=\"/chunk/nos-vemos\" class=\"text-blue-700\"><strong>Nos vemos</strong></a>\n",

  tags: [
    { label: "A2 (¡Vas bien!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},


{
  slug: "de-planta",
  title: "De planta",
  category: "everyday chunks",

  meaning:
    "Nope, no plants to see here! 🌱\n\n" +
    "<strong>De planta</strong> is just a super common way of talking about work that is:\n" +
    "<strong>👉 full-time / permanent</strong> (i.e., a stable job on payroll)",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When you’re talking about a full-time gig:</p>" +

    "<p class='mb-4'>" +
      "<span class='text-lg underline'>¿Sigues de planta en el hospital?</span><br>" +
      "<strong>¿Sigues de planta en el hospital?</strong><br>" +
      "<em>Are you still full-time at the hospital?</em>" +
    "</p>" +

    "<p class='mb-6'>" +
      "<span class='text-lg underline'>Apenas llevo tres meses, pero ya me quieren dejar de planta.</span><br>" +
      "<strong>Apenas llevo tres meses, pero ya me quieren dejar de planta.</strong><br>" +
      "<em>I’ve only been here three months, but they already want to keep me on full-time.</em>" +
    "</p>",

  tone:
    "📁 Office Spanish alert!\n\n" +
    "📁 Very common in work talk, HR debriefings, life updates, <strong>chisme laboral</strong>, etc.\n\n" +
    "📁 Neutral and totally safe for professional settings.",

  examples: [
    {
      spanish: "Mi hermano ya está de planta en el restaurante.",
      english: "My brother’s working at the restaurant full-time now."
    },
    {
      spanish: "Busco algo de planta, no por proyecto.",
      english: "I’m looking for something permanent, not project-based."
    }
  ],

  similarChunks:
    "Contrato fijo\n" +
    "Empleo estable\n" +
    "Empleo de tiempo completo\n" +
    "Empleo respaldado por sindicato",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "asi-mero",
  title: "Así mero",
  category: "everyday chunks",

  meaning:
    "This one’s pure Mexican gold.\n\n" +
    "It just means:\n" +
    "👉 <strong>Exactly like that</strong>\n" +
    "👉 <strong>Just like that</strong>\n" +
    "👉 <strong>That’s right / You got it</strong>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When someone nails how to do something, says something right, or mimics something perfectly:</p>" +

    "<p class='mb-4'>" +
      "<strong>— ¿Así lo hago?<br>— ¡Así mero!</strong><br>" +
      "<em>— Is this how you do it?<br>— Exactly like that!</em>" +
    "</p>" +

    "<p class='mb-6'>" +
      "<strong>— ¿Te late el plan?<br>— Así mero le hacemos.</strong><br>" +
      "<em>— Do you like the plan?<br>— Count me in.</em>" +
    "</p>",

  tone:
    "✅ Ultra casual.\n\n" +
    "✅ Super Mexican.\n\n" +
    "✅ Friendly, warm, and a little playful.",

  examples: [
        {
      spanish: "Así mero, joven. ¡Gracias!",
      english: "Just like that, young man. Thanks!"
    },
    {
      spanish: "— ¿Así se dice?\n— ¡Así mero!",
      english: "— Is that how you say it?\n— Yup, you nailed it!"
    }
  ],

  similarChunks:
    "<a href=\"/chunk/asi-merito\" class=\"text-blue-700\"><strong>Así merito</strong></a>\n" +
    "Así merengues\n" +
    "Tal cual\n" +
    "¡Eso!\n" +
    "Ándale\n" +
    "Le diste al clavo",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" },
    { label: "MUY informal 💀" }
  ],

  audioUrls: []
},

{
  slug: "asi-merito",
  title: "Así merito",
  category: "everyday chunks",

  meaning:
    "This one’s just a fun diminutive version of <strong>así mero</strong>. 🤏\n\n" +
    "And yep, it means the exact same thing:\n" +
    "👉 <strong>Exactly like that</strong>\n" +
    "👉 <strong>Just like that</strong>\n" +
    "👉 <strong>That’s right / You got it</strong>\n\n" +
    "Oh, and the diminutive form here is totally unnecessary grammatically…\n\n" +
    "But <strong>SUPER NECESSARY</strong> if you wanna sound Mexican. 😂",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to say <em>“just like that”</em> like a Mexicano/a de verdad:</p>" +

    "<p class='mb-6'>" +
      "<strong>— ¿Así se hace?<br>— Así merito.</strong><br>" +
      "<em>— Is this how you do it?<br>— Exactly like that.</em>" +
    "</p>" +

    "<p class='mb-6'>" +
      "<strong>— ¿Así lo acomodo?<br>— ¡Así merito!</strong><br>" +
      "<em>— Should I put it here?<br>— That’s perfect!</em>" +
    "</p>",

  tone:
    "✅ Super Mexican.\n\n" +
    "✅ Super casual.",

  examples: [
    {
      spanish: "¡Así merito, carnal!",
      english: "Exactly like that, bro!"
    }
  ],

  similarChunks:
    "<a href=\"/chunk/asi-mero\" class=\"text-blue-700\"><strong>Así mero</strong></a>\n" +
    "Así merengues\n" +
    "Ándale\n" +
    "Tal cual\n" +
    "¡Eso!\n" +
    "Le diste al clavo",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" },
    { label: "MUY informal 💀" }
  ],

  audioUrls: []
},

{
  slug: "me-pongo-a",
  title: "Me pongo a + infinitive",
  category: "everyday chunks",

  meaning:
    "Ok, so this is another one that’s gonna make you sound <strong>WAY</strong> more native.\n\n" +
    "You’ll hear it when someone’s about to dive into an activity, be it working, researching, cleaning, cooking, etc.\n\n" +
    "It’s basically the Spanish equivalent of:\n" +
    "👉 <strong>I’ll start / I’m gonna start + verb in infinitive</strong>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Anytime you’re about to start doing something, especially something deliberate, focused, or effort-based:</p>" +

    "<p class='mb-4'>" +
      "<span class='text-lg underline'>Ya es tarde, me pongo a hacer la cena.</span><br>" +
      "<strong>Ya es tarde, me pongo a hacer la cena.</strong><br>" +
      "<em>It’s already late, I’m gonna start making dinner.</em>" +
    "</p>" +

    "<p class='mb-4'>" +
      "<span class='text-lg underline'>Me pongo a estudiar después de la clase.</span><br>" +
      "<strong>Me pongo a estudiar después de la clase.</strong><br>" +
      "<em>I’ll start studying after class.</em>" +
    "</p>" +

    "<p class='mb-4'>" +
      "<span class='text-lg underline'>Me pongo a buscar los boletos.</span><br>" +
      "<strong>Me pongo a buscar los boletos.</strong><br>" +
      "<em>I’ll start looking for the tickets.</em>" +
    "</p>" +

    "<p class='mb-6'>" +
      "<span class='text-lg underline'>No quiero salir hoy, mejor me pongo a ver una peli.</span><br>" +
      "<strong>No quiero salir hoy, mejor me pongo a ver una peli.</strong><br>" +
      "<em>I don’t wanna go out today, I’d rather put on a movie.</em>" +
    "</p>" +

        "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>You can also use it when talking about things you USUALLY DO:</p>" +

    "<p class='mb-4'>" +
      "<span class='text-lg underline'>Siempre me pongo a limpiar los domingos.</span><br>" +
      "<strong>Siempre me pongo a limpiar los domingos.</strong><br>" +
      "<em>I usually clean on Sundays.</em>" +
    "</p>" +

    "<p class='mb-6'>" +
      "<span class='text-lg underline'>Después de la chamba, me pongo a entrenar.</span><br>" +
      "<strong>Después de la chamba, me pongo a entrenar.</strong><br>" +
      "<em>I usually train after work.</em>" +
    "</p>",

  tone:
    "✅ Neutral and super common.\n\n" +
    "✅ Used across Latin America.",

  examples: [
    {
      spanish: "A veces me pongo a pensar en lo que habría pasado si…",
      english: "Sometimes I start thinking about what would've happened if…"
    },
    {
      spanish: "Me pongo a investigarlo. (real-life example 🎯)",
      english: "I’ll start looking into it."
    }
  ],

  similarChunks:
    "Voy a empezar a + infinitive\n" +
    "Voy a + infinitive",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "irle-a",
  title: "Irle a + team",
  category: "everyday chunks",

  meaning:
    "This is how you say who you <strong>support</strong> or <strong>root for</strong> in sports:\n" +
    "👉 <strong>to root for / to support + a sports team</strong>\n\n" +
    "Yep, in real-life Mexican Spanish, people say:\n" +
    "<strong>Le voy al América.</strong>\n" +
    "<em>I support América.</em>\n\n" +
    "It’s the natural, chunky way to talk about your team. ⚽",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you’re talking football (or sports in general) in Mexico:</p>" +

    "<p class='mb-4'>" +
      "<span class='text-lg underline'>¿A quién le vas?</span><br>" +
      "<strong>¿A quién le vas?</strong><br>" +
      "<em>Who do you support?</em>" +
    "</p>" +

    "<p class='mb-4'>" +
      "<span class='text-lg underline'>Yo le voy a las Chivas, obvio.</span><br>" +
      "<strong>Yo le voy a las Chivas, obvio.</strong><br>" +
      "<em>I support Chivas, obviously.</em>" +
    "</p>" +

    "<p class='mb-6'>" +
      "<span class='text-lg underline'>¿Le vas a México o a Inglaterra?</span><br>" +
      "<strong>¿Le vas a México o a Inglaterra?</strong><br>" +
      "<em>Are you rooting for Mexico or England?</em>" +
    "</p>",

  tone:
    "✅ Super common in Mexico.\n\n" +
    "✅ Very casual and natural.\n\n" +
    "✅ Used all the time in sports talk (with friends, strangers, taxi drivers, football-loving tías, etc.).",

  examples: [
    {
      spanish: "Le va al América, pero todavía lo queremos.",
      english: "He supports América, but we still love him."
    },
    {
      spanish: "¿Le vas al Cruz Azul? No te juzgo… mucho.",
      english: "You root for Cruz Azul? I’m not judging… well, maybe a little."
    }
  ],

  similarChunks:
    "Soy aficionado de + team\n" +
    "Mi gallo es + team\n" +
    "Soy fan de + team\n" +
    "Soy hincha de + team",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "retiro-lo-dicho",
  title: "Retiro lo dicho",
  category: "everyday chunks",

  meaning:
    "Literally?\n" +
    "👉 <strong>I take back what I said</strong>\n\n" +
    "And yep, that’s exactly what it means. No weird idiomatic twist here, folks.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you need to so some serious backtracking:</p>" +

    "<p class='mb-4'>" +
      "<span class='text-lg underline'>Retiro lo dicho, ¡ya está llegando!</span><br>" +
      "<strong>Retiro lo dicho, ¡ya está llegando!</strong><br>" +
      "<em>I take that back, he’s arriving right now!</em>" +
    "</p>" +

    "<p class='mb-6'>" +
      "<span class='text-lg underline'>Ok, retiro lo dicho. Está buenísima la serie.</span><br>" +
      "<strong>Ok, retiro lo dicho. Está buenísima la serie.</strong><br>" +
      "<em>Alright, I take it back. This show's actually amazing.</em>" +
    "</p>",

  tone:
    "✅ Neutral (if not a tad playful).\n\n" +
    "✅ Common in everyday convos, mild arguments, or when admitting defeat.",

  examples: [
    {
      spanish: "¡Retiro lo dicho! ¡Qué guapo saliste en esa foto!",
      english: "Forget what I said! You look great in that pic!"
    },
    {
      spanish: "Retiro lo dicho. Creo que nunca lo había visto de esa manera.",
      english: "I stand corrected. I’d never thought of it that way."
    }
  ],

  similarChunks:
    "¡Me cayó la boca!\n" +
    "Me retracto\n" +
    "Me equivoqué\n" +
    "Estoy mal\n" +
    "Estoy mintiendo",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "darse-de-baja",
  title: "Darse de baja",
  category: "everyday chunks",

  meaning:
    "This is another chunk that you’re gonna hear <strong>ALL. THE. TIME.</strong>\n\n" +
    "It’s basically what you say when you:\n" +
    "👉 <strong>unsubscribe / unenroll / opt out (of something official)</strong>\n\n" +
    "🏦 Closing a bank account?\n" +
    "🎓 Dropping a university course?\n" +
    "💪 Quitting the gym?\n\n" +
    "Well, you’re gonna be using <strong>darse de baja</strong>!",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Anytime you’re talking about cancelling a service or membership:</p>" +

    "<p class='mb-4'>" +
      "<span class='text-lg underline'>Ya me di de baja… ¡pero no fue tan fácil!</span><br>" +
      "<strong>Ya me di de baja… ¡pero no fue tan fácil!</strong><br>" +
      "<em>I already opted out… but it wasn’t that easy!</em>" +
    "</p>",

  tone:
    "✅ Standard, formal-ish Spanish but used <strong>A LOT</strong> in Mexico.\n\n" +
    "✅ Great for official things like schools, banks, insurance (yep, all the fun things in life!).",

  examples: [
    {
      spanish: "Usé los papeles que tenía de su escuela y lo di de baja.",
      english: "I used the documents I had from his school and unenrolled him."
    },
    {
      spanish: "Ya me di de baja del newsletter, pero me siguen llegando correos.",
      english: "I already unsubscribed from the newsletter, but I'm still getting emails."
    }
  ],

  similarChunks:
    "Cancelar la suscripción\n" +
    "<a href=\"/chunk/darse-de-alta\" class=\"text-blue-700\"><strong>Darse de alta</strong></a>\n" +
    "Desuscribirse",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" },
    { label: "Formal 💼" }
  ],

  audioUrls: []
},

{
  slug: "darse-de-alta",
  title: "Darse de alta",
  category: "everyday chunks",

  meaning:
    "If <strong>darse de baja</strong> is opting out, then <strong>darse de alta</strong> is its happy, proactive twin.\n\n" +
    "It means (drum roll 🥁)...\n" +
    "👉 <strong>to sign up / to register / to enroll</strong>\n\n" +
    "And trust me, this chunk pops up <strong>EVERYWHERE</strong>, from setting up a phone line to registering for healthcare to opening a bank account.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you're getting officially added to a system:</p>" +

    "<p class='mb-4'>" +
      "<span class='text-lg underline'>Lo puedo dar de alta hoy mismo.</span><br>" +
      "<strong>Lo puedo dar de alta hoy mismo.</strong><br>" +
      "<em>I can get you set up today.</em>" +
    "</p>" +

            "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>Oh, and it’s also used when you’re discharged from the hospital:</p>" +

    "</p>" +
    "<p class='mb-6'>" +
      "<span class='text-lg underline'>Ya me dieron de alta.</span><br>" +
      "<strong>Ya me dieron de alta.</strong><br>" +
      "<em>I've already been discharged.</em>" +
    "</p>",

  tone:
    "✅ Standard, formal-ish Spanish.\n\n" +
    "✅ Used <strong>CONSTANTLY</strong> in adult life in Mexico.\n\n" +
    "✅ Sounds fancy, but everyone says it.",

  examples: [
    {
      spanish: "¿Ya te diste de alta en la app?",
      english: "Have you signed up for the app yet?"
    },
    {
      spanish: "Tuve que darme de alta como trabajador independiente.",
      english: "I had to register as self-employed."
    },
    {
      spanish: "¿Cuándo te dan de alta del hospital?",
      english: "When will you be discharged from the hospital?"
    }
  ],

  similarChunks:
    "Registrarse\n" +
    "Inscribirse\n" +
    "Activar una cuenta\n" +
    "<a href=\"/chunk/darse-de-baja\" class=\"text-blue-700\"><strong>Darse de baja</strong></a>\n",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" },
    { label: "Formal 💼" }
  ],

  audioUrls: []
},

{
  slug: "no-tengo-con-que",
  title: "No tengo con qué",
  category: "everyday chunks",

  meaning:
    "Wanna sound like a <strong>mexicano de verdad</strong>?\n\n" +
    "Then whip this lil’ beauty out the next time you need to say that you <strong>don’t have the means, tools, or resources to do something</strong>.\n\n" +
    "The full structure is:\n" +
    "<strong>no tengo con qué + infinitive</strong>.\n\n" +
    "And it means something like:\n" +
    "<strong>👉 I don't have what I need to + verb</strong>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Anytime you want to do something but don’t have the money, equipment, or resources to actually pull it off:</p>" +

    "<p class='mb-4'>" +
      "<span class='text-lg underline'>No tengo con qué hacerlo.</span><br>" +
      "<strong>No tengo con qué hacerlo.</strong><br>" +
      "<em>I haven't got the tools to do it.</em>" +
    "</p>" +

    "<p class='mb-4'>" +
      "<span class='text-lg underline'>No tengo con qué defenderme.</span><br>" +
      "<strong>No tengo con qué defenderme.</strong><br>" +
      "<em>I’ve got no way to defend myself.</em>" +
    "</p>" +

    "<p class='mb-6'>" +
      "<strong>— ¿Vas a pagar la luz?<br>— Uf, no tengo con qué, wey.</strong><br>" +
      "<em>— Are you gonna pay the electric bill?<br>— Ugh, I can’t… I haven’t got any money, dude.</em>" +
    "</p>",

  tone:
    "✅ Everyday Mexican Spanish.\n\n" +
    "✅ Not slangy, not formal.\n\n" +
    "✅ Great for playing the <strong>“I'm broke/helpless”</strong> card.",

  examples: [
    {
      spanish: "Se me descompuso la bici y no tengo con qué arreglarla.",
      english: "My bike broke and I’ve got no way to fix it."
    },
    {
      spanish: "No tengo con qué pagarle.",
      english: "I’ve got no money to pay him with."
    }
  ],

  similarChunks:
    "<a href=\"/chunk/no-tengo-como\" class=\"text-blue-700\"><strong>No tengo cómo</strong></a>\n" +
    "No traigo ni un peso\n" +
    "No hay forma\n" +
    "No tengo un quinto",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "no-tengo-como",
  title: "No tengo cómo",
  category: "everyday chunks",

  meaning:
    "Another chunk that’s <strong>VERY</strong> different from the English!\n" +
    "👉 <strong>I have no way / no means to do something</strong>\n\n\n" +
    "💡 And, yep, it <strong>IS</strong> very similar to <strong>no tengo con qué</strong>.\n\n" +
    "<strong>Here’s the lowdown:</strong>\n" +
    "<strong>No tengo con qué</strong> focuses more on a lack of tools/resources (money, hammers, etc.).\n\n" +
    "<strong>No tengo cómo</strong> is more about not knowing how or having no way to do something.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever something’s just NOT DOABLE:</p>" +

    "<p class='mb-4'>" +
      "<span class='text-lg underline'>No tengo cómo llegar.</span><br>" +
      "<strong>No tengo cómo llegar.</strong><br>" +
      "<em>I’ve got no way to get there.</em>" +
    "</p>" +

    "<p class='mb-6'>" +
      "<span class='text-lg underline'>No tengo cómo ayudarla.</span><br>" +
      "<strong>No tengo cómo ayudarla.</strong><br>" +
      "<em>There’s nothing I can do to help her.</em>" +
    "</p>",

  tone:
    "✅ Very natural, everyday Spanish.\n\n" +
    "✅ Super common in Mexico and beyond.",

  examples: [
    {
      spanish: "No tengo cómo imprimirlo.",
      english: "I’ve got no way to print it."
    },
    {
      spanish: "No tengo cómo convencerla.",
      english: "There’s no way I can convince her."
    }
  ],

  similarChunks:
    "<a href=\"/chunk/no-tengo-con-que\" class=\"text-blue-700\"><strong>No tengo con qué</strong></a>\n" +
    "No tengo manera de",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "ahi-nos-vemos",
  title: "Ahí nos vemos",
  category: "everyday chunks",

  meaning:
    "Say <strong>hola</strong> to the Mexican version of:\n" +
    "<strong>👉 see ya / catch you later</strong>\n\n" +
    "Yep, <strong>ahí nos vemos</strong> is just an informal way of saying goodbye to your pals.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to say bye to someone in an easygoing, low-key kinda way:</p>" +

    "<p class='mb-6'>" +
      "<span class='text-lg underline'>Bueno, ya me voy. ¡Ahí nos vemos!</span><br>" +
      "<strong>Bueno, ya me voy. ¡Ahí nos vemos!</strong><br>" +
      "<em>Alright, I’m off. Catch you later!</em>" +
    "</p>",

  tone:
    "✅ Super casual and Mexican.\n\n" +
    "✅ Not formal at all.\n\n" +
    "✅ Warm, friendly… and just the right amount of vague.",

  examples: [
    {
      spanish: "Pos, ahí nos vemos, wey.",
      english: "See ya later, dude."
    }
  ],

  similarChunks:
    "<a href=\"/chunk/nos-vemos\" class=\"text-blue-700\"><strong>Nos vemos</strong></a>\n" +
    "Te veo luego\n" +
    "<a href=\"/chunk/hasta-luego\" class=\"text-blue-700\"><strong>Hasta luego</strong></a>\n" +
    "<a href=\"/chunk/ahi-nos-vidrios\" class=\"text-blue-700\"><strong>Ahí nos vidrios</strong></a>\n" +
    "<a href=\"/chunk/ahi-te-ves\" class=\"text-blue-700\"><strong>Ahí te ves</strong></a>\n" +
    "<a href=\"/chunk/cuidate\" class=\"text-blue-700\"><strong>Cuídate</strong></a>\n" +
    "<a href=\"/chunk/te-cuidas\" class=\"text-blue-700\"><strong>Te cuidas</strong></a>\n",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Gen X 🎸" },
    { label: "Millennial 😎" },
    { label: "Gen Z 👾" },
    { label: "MUY informal 💀" }
  ],

  audioUrls: []
},

{
  slug: "ahi-te-ves",
  title: "Ahí te ves",
  category: "everyday chunks",

  meaning:
    "This one’s <strong>SUPER</strong> colloquial!\n\n" +
    "It basically means:\n" +
    "👉 <strong>See ya</strong>\n" +
    "👉 <strong>I’m outta here</strong>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When you want to say <em>bye</em> in a casual sorta way:</p>" +

    "<p class='mb-4'>" +
      "<span class='text-lg underline'>Ya me voy. Ahí te ves, wey.</span><br>" +
      "<strong>Ya me voy. Ahí te ves, wey.</strong><br>" +
      "<em>I’m off. See ya, dude.</em>" +
    "</p>" +

    "<p class='mb-6'>" +
      "<strong>— ¿No me vas a esperar?<br>— Nel, ahí te ves.</strong><br>" +
      "<em>— You’re not gonna wait for me?<br>— Nope. I’m outta here.</em>" +
    "</p>",

  tone:
    "✅ <strong>VERY</strong> informal, <strong>VERY</strong> Mexican.\n\n" +
    "✅ Can be playful… or kinda cold, depending on delivery.\n\n" +
    "❌ <strong>DON’T</strong> use it with your boss (or suegra!) unless you’re looking for problems. 💀",

  examples: [
    {
      spanish: "¿No me quieres ayudar? Pues, ahí te ves.",
      english: "You don’t wanna help me? Whatever, I’m out."
    },
    {
      spanish: "Ya acabé. Ahí te ves.",
      english: "I’m done. Later."
    }
  ],

  similarChunks:
    "<a href=\"/chunk/ahi-nos-vemos\" class=\"text-blue-700\"><strong>Ahí nos vemos</strong></a>\n" +
    "<a href=\"/chunk/ahi-nos-vidrios\" class=\"text-blue-700\"><strong>Ahí nos vidrios</strong></a>\n" +
    "Cada chango a su mecate\n" +
    "<a href=\"/chunk/aqui-se-rompio-una-taza\" class=\"text-blue-700\"><strong>Aquí se rompió una taza</strong></a>\n",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Gen X 🎸" },
    { label: "Millennial 😎" },
    { label: "Gen Z 👾" },
    { label: "MUY informal 💀" }
  ],

  audioUrls: []
},

{
  slug: "ahi-nos-vidrios",
  title: "Ahí nos vidrios",
  category: "everyday chunks",

  meaning:
    "<strong>Adieu, adieu! Remember me – Hamlet by William Shakespeare (Act 1, Scene 5)</strong>\n\n" +
    "Nah, this one’s more Hunter S. than Shakespeare ;)\n\n" +
    "It’s a slangy way of saying:\n" +
    "<strong>👉 catch you later</strong>\n\n" +
    "Even if you have absolutely no intention of actually catching the person later!\n\n" +
    "It’s the sentiment that counts, right?",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to say bye in a goofy, jokey, slightly sarcastic way:</p>" +

    "<p class='mb-6'>" +
      "<span class='text-lg underline'>Ya me voy, raza. ¡Ahí nos vidrios!</span><br>" +
      "<strong>Ya me voy, raza. ¡Ahí nos vidrios!</strong><br>" +
      "<em>I’m off, guys. Catch ya’ later.</em>" +
    "</p>",

  tone:
    "✅ <strong>VERY</strong> informal.\n\n" +
    "✅ Fun and cheeky.\n\n" +
    "❌ <strong>DON’T</strong> use it in job interviews.\n\n" +
    "✅ <strong>DO</strong> use it when disappearing off into the night with a burrito in hand. 🌯✨",

  examples: [
    {
      spanish: "Ahí nos vidrios, wey. Cuídate.",
      english: "See ya, dude. Take care."
    },
    {
      spanish: "¡Ahí nos vidrios, cabrón!",
      english: "See ya, asshole!"
    }
  ],

  similarChunks:
    "<a href=\"/chunk/ahi-nos-vemos\" class=\"text-blue-700\"><strong>Ahí nos vemos</strong></a>\n" +
    "<a href=\"/chunk/ahi-te-ves\" class=\"text-blue-700\"><strong>Ahi te ves</strong></a>\n" +
    "Cada chango a su mecate\n" +
    "<a href=\"/chunk/aqui-se-rompio-una-taza\" class=\"text-blue-700\"><strong>Aquí se rompió una taza</strong></a>\n",

  tags: [
    { label: "C1 (¡Eres un chingón!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Ñero (barrio) 🧢" },
    { label: "Gen X 🎸" },
    { label: "Millennial 😎" },
    { label: "MUY informal 💀" }
  ],

  audioUrls: []
},

{
  slug: "buenos-dias-tardes-ya",
  title: "Buenos días… ¡tardes ya!",
  category: "everyday chunks",

  meaning:
    "This is what you say when you accidentally greet someone with <strong>buenos días</strong> after 12 PM (aka <strong>buenas tardes</strong> time).\n\n" +
    "It means something like:\n" +
    "<strong>👉 Morning... oh, it's afternoon already!</strong>\n\n" +
    "It’s a fun, self-correcting chunk that’s particularly popular with Boomers and Gen Xers.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When you realize you just said <em>buenos días</em> and it’s already the afternoon: </p>" +
    "<p class='mb-6'>" +
      "<span class='text-lg underline'>Buenos días, Juan… ¡tardes ya!</span><br>" +
      "<strong>Buenos días, Juan… ¡tardes ya!</strong><br>" +
      "<em>Morning, Juan… oh, it’s already afternoon!</em>" +
    "</p>",

  tone:
    "✅ Very common with Boomers and Gen Xers.\n\n" +
    "✅ Often said with a smile or raised eyebrow.",

  examples: [
    {
      spanish: "Buenos días… ¡tardes ya! ¡Híjole, ya se nos está yendo el día!",
      english: "Morning... or afternoon! Jeez, the day's going by quick!"
    }
  ],

  similarChunks:
    "<a href=\"/chunk/ya-tan-tarde\" class=\"text-blue-700\"><strong>¿Ya tan tarde?</strong></a>\n",
    

  tags: [
    { label: "A2 (¡Vas bien!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Abuela-approved 👵" },
    { label: "Boomers 👶" },
    { label: "Gen X 🎸" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "ya-tan-tarde",
  title: "¿Ya tan tarde?",
  category: "everyday chunks",

  meaning:
    "👉 <strong>Wait, what?! It’s that late already?</strong>\n" +
    "👉 <strong>Daaaamn, where did the time go?</strong>\n\n" +
    "This is a <strong>classic Mexican time-shock chunk</strong>, perfect for when you look at the clock and realize that it’s <strong>WAYYY</strong> later than you thought!",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Anytime someone tells you what time it is and you’re genuinely surprised:</p>" +

    "<p class='mb-6'>" +
      "<span class='text-lg underline'>¿Ya tan tarde? ¡Si apenas eran las once!</span><br>" +
      "<strong>¿Ya tan tarde? ¡Si apenas eran las once!</strong><br>" +
      "<em>It’s that late already? It was eleven just a second ago!</em>" +
    "</p>",

  tone:
    "✅ Neutral, everyday chunk.\n\n" +
    "✅ Super common with older folks, but used by everyone.\n\n" +
    "✅ Slightly dramatic, but totally acceptable in any setting.",

  examples: [
    {
      spanish: "¿Ya tan tarde? No manches, se me fue el día.",
      english: "It’s that late? Damn, the day flew by."
    },
    {
      spanish: "¿Ya tan tarde?! Y yo sin comer.",
      english: "It’s already that late?! And I haven’t even eaten."
    }
  ],

  similarChunks:
    "<a href=\"/chunk/buenos-dias-tardes-ya\" class=\"text-blue-700\"><strong>Buenos días… ¡tardes ya!</strong></a>\n" +
    "Se me fue el tiempo volando\n" +
    "Me agarraron las prisas",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Abuela-approved 👵" },
    { label: "Boomers 👶" },
    { label: "Gen X 🎸" },
    { label: "Millennial 😎" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "me-saludas-a",
  title: "Me saludas a + name",
  category: "everyday chunks",

  meaning:
    "Say hola (literally!) to the Mexican version of:\n" +
    "👉 <strong>say hi to + name (for me)</strong>\n\n" +
    "<strong>Me saludas a Marcos.</strong> = <em>Say hi to Marcos for me. / Tell Marcos I said hey.</em>\n\n" +
    "It’s short, sweet, and <strong>VERY</strong> common, especially when you’re wrapping up a convo with someone who’s off to see mutual friends or family.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When you want to send your regards through someone else:</p>" +

    "<p class='mb-6'>" +
      "<span class='text-lg underline'>Ya me voy. Me saludas a tus papás, porfa.</span><br>" +
      "<strong>Ya me voy. Me saludas a tus papás, porfa.</strong><br>" +
      "<em>I’m off. Say hi to your folks for me, please.</em>" +
    "</p>" +

    "<p class='mb-6'>" +
      "<strong>— Voy a ver a tu hermano más tarde.<br>— ¡Ah, me lo saludas!</strong><br>" +
      "<em>— I’m going to see your brother later.<br>— Oh, say hi to him for me!</em>" +
    "</p>" +

    "<p class='mb-6'>" +
      "<strong>— Ya me voy con los del trabajo.<br>— Me saludas a todos, ¿va?</strong><br>" +
      "<em>— I’m heading out with everyone from work.<br>— Say hi to them all for me, okay?</em>" +
    "</p>",

  tone:
    "✅ Polite, warm, and very Mexican.\n\n" +
    "✅ Super common with Gen X, Boomers, but used by everyone.\n\n" +
    "✅ Works in casual convos and formal settings alike.",

  examples: [
    {
      spanish: "Me saludas a tu hermana, ¿sí?",
      english: "Say hi to your sister for me, okay?"
    }
  ],

  similarChunks:
    "Saludos a + name\n" +
    "Salúdame a + name\n" +
    "Mándales saludos\n" +
    "Me los saludas\n" +
    "Le mandas saludos\n" +
    "Besitos a todos",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "va-que-va",
  title: "Va que va",
  category: "everyday chunks",

  meaning:
    "<strong>Va que va</strong> is one of the friendliest, breeziest, most enthusiastic ways to express agreement in Mexican Spanish!\n\n" +
    "It means something like:\n" +
    "👉 <strong>Alright, will do.</strong>\n" +
    "👉 <strong>You got it.</strong>\n\n" +
    "It’s basically what you say when you’re on board with the plan, and maybe even lowkey hyped about it! 🕺",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When giving a verbal thumbs up to an instruction, request, or plan:</p>" +

    "<p class='mb-6'>" +
      "<strong>— Me llamas cuando llegues.<br>— ¡Va que va!</strong><br>" +
      "<em>— Call me when you get there.<br>— Okay, I will!</em>" +
    "</p>" +

    "<p class='mb-6'>" +
      "<strong>— ¿Crees que me lo puedes terminar hoy?<br>— ¡Va que va! No hay problema.</strong><br>" +
      "<em>— Do you think you can finish it for me today?<br>— Absolutely! No problem at all.</em>" +
    "</p>",

  tone:
    "✅ Works in both formal and informal settings.\n\n" +
    "✅ Warm, casual, and cooperative.\n\n" +
    "✅ Often said with a nod, smile, or double thumbs-up.\n\n" +
    "✅ Basically <strong>“Yes!”</strong> but with Mexican sparkles on top.",

  examples: [
        {
      spanish: "Va que va, gracias.",
      english: "Sure thing, thanks."
    },
    {
      spanish: "— Me mandas el archivo, ¿va?\n— ¡Va que va!",
      english: "— Can you send me the file?\n— You got it!"
    }

  ],

  similarChunks:
    "Órale\n" +
    "Me late\n" +
    "Va\n" +
    "Jalo\n" +
    "Claro\n" +
    "Ya estás\n" +
    "Simón\n" +
    "<a href=\"/chunk/sale-vale\" class=\"text-blue-700\"><strong>Sale vale</strong></a>\n",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Fresa 🍓" },
    { label: "Chavitos 👟" },
    { label: "Millennial 😎" },
    { label: "Gen Z 👾" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "sale-vale",
  title: "Sale vale",
  category: "everyday chunks",

  meaning:
    "This one’s a bit redundant, tbh.\n\n" +
    "Both <strong>sale</strong> and <strong>vale</strong> on their own already mean <strong>OK, sounds good</strong>, or <strong>alrighty</strong>.\n\n" +
    "And when you mash them together?\n\n" +
    "👉 <strong>OK, cool.</strong>\n" +
    "👉 <strong>Alrighty then.</strong>\n" +
    "👉 <strong>Sure thing, sounds good.</strong>\n\n" +
    "So yeah, same idea, but with a <strong> DISTINCTLY MEXICAN</strong>  flair, obvio. 💅",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you’re agreeing to a plan, giving the green light, or wrapping up a convo on a friendly note:</p>" +

    "<p class='mb-6'>" +
      "<strong>— ¿Nos vemos a las ocho?<br>— Sale vale. ✅</strong><br>" +
      "<em>— Shall we meet at 8?<br>— OK, cool.</em>" +
    "</p>" +

    "<p class='mb-6'>" +
      "<strong>— Te mando el correo al rato.<br>— Sale vale.</strong><br>" +
      "<em>— I’ll send you the email later.<br>— Sounds good.</em>" +
    "</p>",

  tone:
    "✅ <strong>VERY</strong> Mexican.\n\n" +
    "✅ Casual, upbeat, and slightly playful.\n\n" +
    "✅ Redundant? Yes.\n\n" +
    "✅ Charming as hell? Also yes.\n\n" +
    "❌ Not used in Spain (they’ll look at you weird).",

  examples: [
    {
      spanish: "Sale vale, sin problema.",
      english: "Of course, no problem."
    }
  ],

  similarChunks:
    "<a href=\"/chunk/va-que-va\" class=\"text-blue-700\"><strong>Va que va</strong></a>\n" +
    "Jalo\n" +
    "Me late\n" +
    "<a href=\"/chunk/andale-pues\" class=\"text-blue-700\"><strong>Ándale pues</strong></a>\n" +
    "<a href=\"/chunk/andale-pues\" class=\"text-blue-700\"><strong>Órale pues</strong></a>\n" +
    "Cámara\n" +
    "Simón\n" +
    "Ya estás",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Boomers 👶" },
    { label: "Gen X 🎸" },
    { label: "Millennial 😎" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "andar-adjective",
  title: "Andar + adjective",
  category: "everyday chunks",

  meaning:
    "This one’s another super chunk.\n\n" +
    "Why?\n\n" +
    "Well, because it’s unbelievably useful, that’s why! 💥\n\n" +
    "You see, you can tack most adjectives that describe your current state or mood after <strong>andar</strong> to create:\n" +
    "<strong>👉 A super colloquial way of saying how you feel (especially when it’s ongoing)</strong>\n\n" +
    "<strong>Ando cansado.</strong> = <em>I’m tired.</em>\n" +
    "<strong>Andan bien preocupados.</strong> = <em>They’re really worried.</em>\n" +
    "<strong>Anda bien de malas.</strong> = <em>She’s in a really bad mood.</em>\n\n" +
    "Treat this one with reverence, and it will treat you (and your Spanish!) well in return.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Anytime you wanna tell someone how you’re doing — physically, emotionally, etc. — AND you want to sound extra Mexican!</p>" +

    "<p class='mb-6'>" +
      "<span class='text-lg underline'><strong>Physical states:</strong></span><br>" +
      "<strong>Ando bien crudo.</strong> = <em>I’m soooo hungover.</em> 🥴<br>" +
      "<strong>Anda cansadísima.</strong> = <em>She’s super tired.</em>" +
    "</p>" +

    "<p class='mb-6'>" +
      "<span class='text-lg underline'><strong>Emotional moods:</strong></span><br>" +
      "<strong>Ando agüitado.</strong> = <em>I’m feeling down.</em><br>" +
      "<strong>Andan muy sacados de onda.</strong> = <em>They’re really freaked out.</em>" +
    "</p>" +

    "<p class='mb-6'>" +
      "<span class='text-lg underline'><strong>Situational stuff:</strong></span><br>" +
      "<strong>Andamos bien ocupados.</strong> = <em>We’re super busy.</em><br>" +
      "<strong>Ando en chinga. (vulgar)</strong> = <em>I’m fucking busy.</em>" +
    "</p>",

  tone:
    "✅ Very natural.\n\n" +
    "✅ Used <strong>ALL. THE. DAMN. TIME</strong> in Mexico.\n\n" +
    "✅ Perfect for friends, coworkers, and family.",

  examples: [
    {
      spanish: "Ando bien aguitado, wey.",
      english: "I’ve been feeling really bummed out, man."
    },
    {
      spanish: "Ando medio distraído hoy.",
      english: "I’m kinda out of it today."
    },
    {
      spanish: "Ya ando medio pedo.",
      english: "I’m a bit tipsy."
    },
    {
      spanish: "Creo que ando enfermo de gripe.",
      english: "I think I have the flu."
    }
  ],

  similarChunks:
    "Estoy + adjective\n" +
    "Me siento + adjective\n" +
    "<a href=\"/chunk/traigo-noun\" class=\"text-blue-700\"><strong>Traigo + noun</strong></a>\n",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "traigo-noun",
  title: "Traigo + emotion noun",
  category: "everyday chunks",

  meaning:
    "Another <strong>SUPER</strong> useful colloquial chunk for talking about feelings!\n\n" +
    "This one literally means <strong>I’m carrying</strong>, but emotionally it’s more like saying:\n" +
    "👉 <strong>I’m dealing with…</strong>\n" +
    "👉 <strong>I’m feeling very…</strong>\n\n" +
    "It adds weight, urgency, and a bit of spice to how you're feeling.\n\n" +
    "So yeah, it’s not just <strong>“Estoy enojado.</strong>”\n\n" +
    "It’s <strong>“TRAIGO UN CORAJE.</strong>”\n\n" +
    "You’re carrying that rage around like a hot potato. Ouch!",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When you're feeling something intense or ongoing, and you want to express it in a raw, honest, and very Mexican way:</p>" +

    "<p class='mb-6'>" +
      "<strong>Traigo un coraje.</strong><br>" +
      "<em>I’m really pissed.</em>" +
    "</p>" +

    "<p class='mb-6'>" +
      "<strong>Traigo un sueño.</strong><br>" +
      "<em>I’m really tired.</em>" +
    "</p>" +

    "<p class='mb-6'>" +
      "<strong>Traigo un susto.</strong><br>" +
      "<em>I’m really shaken up.</em>" +
    "</p>",

  tone:
  
    "✅ Very Mexican.\n\n" +
    "✅ Emotional and expressive.\n\n" +
    "✅ Perfect for convos, rants, venting, etc.\n\n" +
    "❌ Not for formal writing.",

  examples: [
    {
      spanish: "¡Traigo un coraje desde ayer!",
      english: "I’ve been seeing red since yesterday!"
    },
    {
      spanish: "Traigo una preocupación ahorita.",
      english: "I’m so worried right now."
    }
  ],

  similarChunks:
    "<a href=\"/chunk/andar-adjective\" class=\"text-blue-700\"><strong>Andar + adjective</strong></a>\n" +
    "Me siento + adjective\n" +
    "Estar + adjective",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "andale-pues",
  title: "Ándale pues / Órale pues",
  category: "everyday chunks",

  meaning:
    "These two are <strong>VERY</strong> similar, so I’ve decided to unceremoniously lump them together. 😉\n\n" +
    "And honestly? They’re like the Swiss Army knives of Mexican Spanish.\n\n" +
    "Why?\n\n" +
    "Well, because both can mean <strong>ANY</strong> of the following, depending on tone and context:\n" +
    "👉 <strong>Okay then. / Sure.</strong> (agreement)\n" +
    "👉 <strong>Come on!</strong> (telling someone to hurry up)\n" +
    "👉 <strong>Alright then.</strong> (wrapping up a convo)\n\n" +
    "Yep, all that, depending on <strong>HOW</strong> and <strong>WHEN</strong> you say them.\n\n\n" +
    "💡 <strong> Ándale</strong>  and <strong> órale</strong>  are generally interchangeable, but I’ve noticed that Mexicans tend to favor one over the other (think <strong> Team Ándale</strong>  vs. <strong> Team Órale</strong>).\n\n" +
    "<strong>BUT…</strong> \n\n" +
    "<strong> Órale pues</strong>  is usually more enthusiastic or expressive, while <strong>ándale pues</strong>  is more often used to urge someone into action or casually confirm something with a more neutral (or resigned!) tone.\n\n" +
    "<strong>¡Cómo insistes! Ándale pues, vamos por helado.</strong>\n" +
    "<em>You just won’t give up, huh? Okay, fine, let's go get ice cream.</em>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Expressing agreement:</p>" +
    "<p class='mb-6'><strong>— ¿Vamos al cine, wey?</strong><br><strong>— Órale pues. / Ándale pues.</strong><br><em>— Wanna go to the movies, dude?<br>— Sure. / Okay then.</em></p>" +
    
    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-2 mb-4'>Telling someone to hurry up:</p>" +
    "<p class='mb-6'><strong>¡Ándale pues! ¡Se nos va a hacer tarde!</strong><br><em>Come on! We’re going to be late!</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-2 mb-4'>Wrapping up a conversation:</p>" +
    "<p class='mb-6'><strong>Órale pues. Nos vemos.</strong><br><em>Alright then. See ya.</em></p>",

    tone:
  
    "✅ Ultra-Mexican.\n\n" +
    "✅ Friendly and informal.\n\n" +
    "❌ Not for formal settings.",

  examples: [
    {
      spanish: "¡Ándale pues, apúrate!",
      english: "Come on, hurry up!"
    },
    {
      spanish: "— ¿Te marco mañana?\n— Órale pues.",
      english: "— Should I call you tomorrow?\n— Okay, cool."
    }
  ],

  similarChunks:
    "Va\n" +
    "<a href=\"/chunk/va-que-va\" class=\"text-blue-700\"><strong>Va que va</strong></a>\n" +
    "<a href=\"/chunk/sale-vale\" class=\"text-blue-700\"><strong>Sale vale</strong></a>\n" +
    "Cámara\n" +
    "Está bueno\n" +
    "Ya rugiste\n" +
    "Ya estás",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" },
    { label: "MUY informal 💀" }
  ],

  audioUrls: []
},

{
  slug: "que-paso",
  title: "¡Qué pasó!",
  category: "everyday chunks",

  meaning:
    "Say hello to <strong>THE</strong> quintessential Mexican greeting.\n\n" +
    "And yep, you’d be right in thinking that <strong>qué pasó</strong> means <strong>what happened</strong>, but in Mexican Spanish, it can also mean something closer to:\n" +
    "<strong>👉 What’s up!</strong>\n\n" +
    "So, the next time a Mexican hollers <strong>“¡Qué pasó!”</strong>, <strong>DON’T</strong> start going into minute details about what you just ate for lunch, etc. 😅",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When you bump into someone — a friend, neighbor, coworker, etc. — and you want to greet them with laid-back, friendly energy:</p>" +
    
    "<p class='mb-6'><strong>¡Qué pasó, jefe!</strong><br><em>Hey bossman!</em></p>"+

    "<p class='mb-6'><strong>— ¡Qué pasó, wey! ¿Todo bien?</strong><br><strong>— Todo bien, todo relax.</strong><br><em>— What's up, dude! All good?<br>— All good in the hood.</em></p>",


  tone:
  
    "✅ <strong>SUPER</strong> Mexican.\n\n" +
    "✅ Very informal, but also very friendly.\n\n" +
    "✅ Often said with a smile, nod, or fist bump.\n",
  
  examples: [
    {
      spanish: "¡Qué pasó, compa!",
      english: "Hey man! What’s up?"
    },
    {
      spanish: "— ¡Qué pasó, doña Lucha! ¿Cómo está?\n— Bien, mijo, bien.",
      english: "— What's up, Doña Lucha! How are you?\n— Good, dear, good."
    }
  ],

  similarChunks:
    "¿Qué onda?\n" +
    "¿Qué hay?\n" +
    "¿Qué cuentas?\n" +
    "¿Qué transita por tus venas?\n" +
    "¿Quiúbole?\n" +
    "¿Qué tranza?\n" +
    "¿Qué pedo?",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" },
    { label: "MUY informal 💀" }
  ],

  audioUrls: []
},

{
  slug: "de-acuerdo",
  title: "De acuerdo",
  category: "everyday chunks",

  meaning:
    "This is just a nice, neutral way to say:\n" +
    "👉 <strong>OK.</strong>\n" +
    "👉 <strong>Alright.</strong>\n" +
    "👉 <strong>Agreed.</strong>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to sound chill, polite, and not too slangy (it’s VERY neutral):</p>" +

    "<p class='mb-6'><strong>— Nos vemos a las 6.</strong><br>— <strong>De acuerdo.</strong><br><em>— See you at 6.<br>— OK.</em></p>",

  tone:
  
    "✅ Neutral and polite.\n\n" +
    "✅ Works in formal and informal settings.\n\n" +
    "✅ Not slangy at all.\n",

  examples: [
    {
      spanish: "Sí, de acuerdo.",
      english: "Yes, agreed."
    },
    {
      spanish: "— Vamos a hacerlo así.\n— De acuerdo.",
      english: "— Let’s do it like that.\n— Agreed. / Sounds good."
    }
  ],

  similarChunks:
    "Va\n" +
    "Claro que sí\n" +
    "Está bien\n" +
    "Me late\n" +
    "Con gusto\n" +
    "Sin problema",

  tags: [
    { label: "A2 (¡Vas bien!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "se-me-fue",
  title: "Se me fue",
  category: "everyday chunks",

  meaning:
    "Another day, another chunk with the <strong>accidental se</strong>. 😉\n\n" +
    "And this one’s an absolute <strong>LIFESAVER</strong>, especially if you’re speaking Spanish and your brain decides to hit the pause button mid-sentence. 🧠💨\n\n" +
    "It generally translates well to:\n" +
    "👉 <strong>I forgot what I was gonna say</strong>\n\n\n" +
    "💡 <strong>Se me fue</strong> literally means <strong>it went away from me</strong>, but native speakers use it when they have <strong>a brain fart</strong> while talking.\n\n" +
    "So yeah, next time you forget a word or lose your train of thought, just drop a casual <strong>“¡Se me fue!”</strong> and nobody will bat an eyelid.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you forget what you were going to say or have a sudden mental blank:</p>" +

    "<p class='mb-4'><strong>Y se llama… ¡híjole, se me fue!</strong><br><em>And it’s called… dang, I can’t remember!</em></p>" +

       "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>You can also use it with a noun to say what exactly you forgot:</p>" +

    "<p class='mb-6'><strong>Espera… se me fue la palabra.</strong><br><em>Wait… I can’t think of the word.</em></p>",

  tone:
    "✅ Neutral and super common.\n\n" +
    "✅ Great for casual convos or semi-formal chats.\n\n" +
    "✅ Totally natural (you’ll sound native).\n\n" +
    "✅ Perfect for when your brain crashes mid-sentence.",

  examples: [
    {
      spanish: "Te iba a decir algo, pero se me fue.",
      english: "I was gonna tell you something, but I forgot what it was."
    },
    {
      spanish: "Se me fue el nombre.",
      english: "I can’t remember the name."
    },
    {
      spanish: "Se me fue qué te iba a decir.",
      english: "I forgot what I was about to tell you."
    }
  ],

  similarChunks:
    "<a href=\"/chunk/se-me-olvido\" class=\"text-blue-700\"><strong>Se me olvidó</strong></a>\n" +
    "Se me pasó\n" +
    "¿Qué te estaba diciendo?\n" +
    "Se me fue el avión\n" +
    "Se me fue la onda\n" +
    "Se me fue el pedo\n" +
    "Ya no me acuerdo",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "lo-de-siempre",
  title: "Lo de siempre",
  category: "everyday chunks",

  meaning:
    "This one’s for all you creatures of habit. 😎☕\n" +
    "It just means:\n" +
    "👉 <strong>the usual</strong>\n\n" +
    "Feel free to use it at your fave café, taco stand, or tamal cart.\n\n" +
    "Oh, and just as in English, it works as both a question or a statement:\n" +
    "<strong>¿Lo de siempre?</strong> = <em>The usual?</em>\n" +
    "<strong>Lo de siempre, porfa.</strong> = <em>The usual, please.</em>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you’re ordering your go-to food or drink:</p>" +

    "<p class='mb-4'><strong>Hola Juan. ¿Lo de siempre?</strong><br><em>Hey Juan. The usual?</em></p>" +

    "<p class='mb-6'><strong>— ¿Te traigo lo de siempre?</strong><br><strong>— Va que va.</strong><br><em>— Want me to get you the usual?<br>— Yep.</em></p>"+

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>And it can also be used to talk about a typical or repetitive situation:</p>" +

    "<p class='mb-6'>— <strong>¿Qué pasa con tu hermano?</strong><br>— <strong>Lo de siempre… ya sabes.</strong><br><em>— What’s up with your brother?<br>— Same old, same old… you know the deal.</em></p>",

  tone:
    "✅ Casual and friendly.\n\n" +
    "✅ Perfect for regular spots and friendly service.",

  examples: [
    {
      spanish: "Sí, lo de siempre, gracias.",
      english: "Yep, the usual, thanks."
    }
  ],

  similarChunks:
    "Lo mismo de siempre\n" +
    "Lo mismito de siempre",

  tags: [
    { label: "A2 (¡Vas bien!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "no-sabria-que-decirte",
  title: "No sabría qué decirte",
  category: "everyday chunks",

  meaning:
    "This one literally means: <strong>I wouldn’t know what to tell you.</strong>\n\n" +
    "And in plain English?\n" +
    "👉 <strong>Honestly… I have no clue.</strong>\n\n\n" +
    "💡This is the chunk Mexicans whip out when you ask them where something is and they don’t know (but still want to be polite and helpful). 🧭❌",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When someone asks you something and you have NO IDEA:</p>" +

    "<p class='mb-6'>— <strong>¿Dónde queda la calle Tizapán?</strong><br>— <strong>Uy… no sabría qué decirte, joven.</strong><br><em>— Where’s Tizapán Street?<br>— Sorry, I’m not sure, young man.</em></p>" +

    "<p class='mb-6'>— <strong>Entonces, ¿qué piensas que debería hacer?</strong><br>— <strong>Uff… La verdad, no sabría qué decirte. Está rudo.</strong><br><em>— So, what do you think I should do?<br>— Man... honestly, I don't know what to tell you. It’s rough.</em></p>",

  tone:
    "✅ Very Mexican.\n\n" +
    "✅ Courteous and respectful (but you’ll hear it used between friends too!).",

  examples: [
    {
      spanish: "No sabría qué decirte, la verdad.",
      english: "Honestly, I have no idea."
    },
    {
      spanish: "— Disculpa, ¿cómo llego al Metro Mixcoac?\n— Uta… no sabría qué decirte, carnal…",
      english: "— Hey, how do I get to Metro Mixcoac?\n— Oof… I’m not sure, dude…"
    }
  ],

  similarChunks:
    "No sabría decirte\n" +
    "Híjole… no sé bien\n" +
    "Te quedo mal\n" +
    "Te fallo",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Formal 💼" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "cuesta-trabajo",
  title: "Cuesta trabajo",
  category: "everyday chunks",

  meaning:
    "This one’s a super idiomatic way to say something’s <strong>hard / difficult</strong>:\n" +
    "👉 <strong>cuesta trabajo</strong> = <wm>it’s hard / it’s difficult</em>\n\n" +
    "You’ll often see it with an indirect object pronoun to show <strong>WHO</strong> finds it tough:\n" +
    "<strong>Me cuesta trabajo.</strong> = <em>I find it difficult.</em>\n" +
    "<strong>Te cuesta trabajo.</strong> = <em>You find it difficult.</em>\n\n" +
    "Etc., etc.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Anytime you want to say that something’s difficult:</p>" +

    "<p class='mb-4'><strong>El español me cuesta mucho trabajo.</strong><br><em>I find Spanish really hard.</em></p>" +

    "<p class='mb-6'><strong>Cuesta trabajo, ¿verdad?</strong><br><em>It’s difficult, isn’t it?</em></p>",

  tone:
    "✅ Neutral and polite.\n\n" +
    "✅ <strong>VERY</strong> common in everyday convos with teachers, coworkers, abuelas, etc.",

  examples: [
    {
      spanish: "A mi hijo le cuesta trabajo dormir solo.",
      english: "My son finds it hard to sleep alone."
    },
    {
      spanish: "Nos cuesta trabajo organizarnos con tantos pendientes.",
      english: "It’s hard for us to stay organized with so much to do."
    }
  ],

  similarChunks:
    "<a href=\"/chunk/me-cuesta\" class=\"text-blue-700\"><strong>Me cuesta</strong></a>\n" +
    "Está cañón\n" +
    "Está cabrón\n" +
    "Está perro\n" +
    "Está bien difícil\n" +
    "Está color de hormiga",

  tags: [
    { label: "A2 (¡Vas bien!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "me-cuesta",
  title: "Me cuesta + infinitive",
  category: "everyday chunks",

  meaning:
    "This one’s the Spanish version of:\n" +
    "👉 <strong>I find it hard + infinitive</strong>\n\n" +
    "It’s super common <strong>AND</strong> super native-sounding. 🎉",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to talk about something that’s hard for you, whether mentally, physically, or emotionally:</p>" +

    "<p class='mb-4'><strong>Me cuesta levantarme temprano.</strong><br><em>I find it hard to get up early.</em></p>" +

    "<p class='mb-6'><strong>Me cuesta socializar con tanta gente.</strong><br><em>I find it hard to socialize with so many people.</em></p>",

  tone:
    "✅ Neutral, everyday Spanish.\n\n" +
    "✅ Works in formal convos <strong>(con tu jefe)</strong> or casual ones <strong>(con tus compas)</strong>.",

  examples: [
    {
      spanish: "Me cuesta mucho concentrarme cuando hace calor.",
      english: "I find it really hard to concentrate when it’s hot."
    }
  ],

  similarChunks:
    "<a href=\"/chunk/cuesta-trabajo\" class=\"text-blue-700\"><strong>Cuesta trabajo</strong></a>\n" +
    "Está cañón\n" +
    "Está cabrón\n" +
    "Está perro\n" +
    "Está bien difícil\n" +
    "Está color de hormiga",

  tags: [
    { label: "A2 (¡Vas bien!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "estoy-de-acuerdo",
  title: "Estoy de acuerdo",
  category: "everyday chunks",

  meaning:
    "Another super useful everyday chunk!\n" +
    "👉 <strong>Estoy de acuerdo</strong> = <em>I agree</em>\n\n" +
    "Just as in English, it’s often followed by <strong>con</strong>.\n\n" +
    "Thankfully, <strong>NOT</strong> one of those Spanish preposition traps!",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to agree with someone’s opinion, idea, or plan in a neutral, non-slangy way:</p>" +

    "<p class='mb-4'><strong>Estoy de acuerdo contigo.</strong><br><em>I agree with you.</em></p>" +

    "<p class='mb-4'><strong>La verdad, estoy de acuerdo con lo que dijo.</strong><br><em>Honestly, I agree with what she said.</em></p>" +

    "<p class='mb-6'>— <strong>¿Te parece bien?</strong><br>— <strong>Sí, estoy de acuerdo.</strong><br><em>— Sound good?<br>— Yeah, sounds good.</em></p>",

  tone:
    "✅ Neutral, polite, and super common.\n\n" +
    "✅ Works in formal or casual situations.\n\n" +
    "✅ Not slangy in the slightest!",

  examples: [
    {
      spanish: "Estoy muy de acuerdo.",
      english: "I totally agree."
    }
  ],

  similarChunks:
    "Tienes razón\n" +
    "Sí, claro\n" +
    "Totalmente\n" +
    "Va\n" +
    "Me late\n" +
    "<a href=\"/chunk/de-acuerdo\" class=\"text-blue-700\"><strong>De acuerdo</strong></a>\n" +
    "Me parece bien",

  tags: [
    { label: "A1 (¡Vas empezando!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "no-estoy-de-acuerdo",
  title: "No estoy de acuerdo",
  category: "everyday chunks",

  meaning:
    "This one’s simple, clean, and to the point:\n" +
    "👉 <strong>No estoy de acuerdo</strong> = <em>I don’t agree</em>\n\n" +
    "It’s the polite, default way to disagree in Spanish: no drama, no offense, just respectful disagreement.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to respectfully disagree with something someone says:</p>" +

    "<p class='mb-4'><strong>No estoy de acuerdo contigo.</strong><br><em>I don’t agree with you.</em></p>" +

    "<p class='mb-4'><strong>No estoy de acuerdo con esa decisión.</strong><br><em>I don’t agree with that decision.</em></p>" +

    "<p class='mb-6'>— <strong>Todos piensan que fue buena idea.</strong><br>— <strong>Pues yo no estoy de acuerdo.</strong><br><em>— Everyone thinks it was a good idea.<br>— Well, I don’t.</em></p>",

  tone:
    "✅ Neutral, polite, and widely used.\n\n" +
    "✅ Works in both formal and informal situations.",

  examples: [
    {
      spanish: "No estoy de acuerdo con lo que dijo el jefe.",
      english: "I don’t agree with what the boss said."
    },
    {
      spanish: "No estoy de acuerdo, pero está bien.",
      english: "I don’t agree, but it’s fine."
    }
  ],

  similarChunks:
    "No me parece\n" +
    "No me late\n" +
    "Nel\n" +
    "Ni madres",

  tags: [
    { label: "A1 (¡Vas empezando!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "ya-me-voy",
  title: "Ya me voy",
  category: "everyday chunks",

  meaning:
    "This is what you say when you’re about to head out, kinda like the English:\n" +
    "👉 <strong>I’m off / I'm leaving now</strong>\n\n\n" +
    "💡 <strong>A quick note:</strong> while <strong>salir</strong> isn’t wrong, it’s generally <strong>NOT</strong> what the natives say.\n\n" +
    "Why?\n\n" +
    "Because <strong>irse</strong> focuses more on <strong>leaving the group</strong> or situation, whereas <strong>salir</strong> focuses on <strong>leaving a physical place</strong>.\n\n" +
    "So, if you’re saying goodbye to friends or coworkers, <strong>ya me voy</strong> is almost always the natural-sounding option.\n\n" +
    "(Though in places like Argentina, you might hear things like <strong>me voy a ir saliendo</strong>. So yeah, always, keep your ears open to what the natives are saying 😊).",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you're announcing to someone (or a group of people!) that you’re leaving:</p>" +

    "<p class='mb-4'><strong>Bueno… ya me voy.</strong><br><em>Alright… I’m off.</em></p>" +

    "<p class='mb-6'><strong>Ya me voy… tengo que levantarme temprano.</strong><br><em>I’m off... I’ve got an early morning tomorrow.</em></p>",

  tone:
    "✅ Super common and <strong>VERY</strong> Mexican.\n\n" +
    "✅ Neutral and polite.",

  examples: [
    {
      spanish: "Bueno, ya me voy. Cuídense.",
      english: "Alright, I’m off. Take care."
    },
    {
      spanish: "Ya me voy antes de que me agarren para lavar los trastes.",
      english: "I’m leaving before they make me wash the dishes."
    }
  ],

  similarChunks:
    "Me voy\n" +
    "<a href=\"/chunk/ya-me-tengo-que-ir\" class=\"text-blue-700\"><strong>Ya me tengo que ir</strong></a>\n" +
    "<a href=\"/chunk/con-permiso\" class=\"text-blue-700\"><strong>Con permiso</strong></a>\n" +
    "<a href=\"/chunk/ahi-nos-vemos\" class=\"text-blue-700\"><strong>Ahí nos vemos</strong></a>\n",

  tags: [
    { label: "A2 (¡Vas bien!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "con-permiso",
  title: "Con permiso",
  category: "everyday chunks",


  meaning:
    "This one literally means <strong>with permission</strong>.\n\n" +
    "But functionally? It’s the Mexican Spanish version of:\n" +
    "👉 <strong>Excuse me</strong>\n" +
    "👉 <strong>Pardon me</strong>\n" +
    "👉 <strong>Mind if I squeeze past?</strong>\n" +
    "👉 <strong>I’m outta here</strong>\n\n" +
    "It’s polite, common, and a <strong>MUST</strong> for daily life in Mexico.\n\n" +
    "You’ll hear it <strong>constantly</strong> in the streets, at the dinner table, on the bus, etc.\n\n" +
    "Basically, if you’re around people, someone’s saying <strong>con permiso</strong>. 🤣",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Use con permiso when you:</p>" +

    "<p class='mb-4'>✅ Need to pass by someone (tight space, sidewalk, crowded hallway).<br>" +
    "<p class='mb-4'>— <strong>Voy a pasar, con permiso.</strong><br><strong>— Propio.</strong><br><em>— Mind if I squeeze through?<br>— Go ahead.</em></p><br>" +

    "✅ Are standing up from the table or leaving a gathering (especially when with older folks).</p>" +

    "<p class='mb-6'><strong>Bueno, con permiso… ya me voy.</strong><br><em>Alright, if you’ll excuse me… I’m heading off.</em></p>",

  tone:
    "✅ Very polite.\n\n" +
    "✅ Slightly formal, but <strong>SUPER COMMON</strong>, even in casual settings.\n\n" +
    "👵 Bonus points for using it with abuelas, elders, or strangers.",

  examples: [
    {
      spanish: "Con permiso, voy al baño.",
      english: "Excuse me, I’m going to the bathroom."
    },
    {
      spanish: "Bueno, ya terminé. Con permiso.",
      english: "Alright, I’ve finished. If you’ll excuse me."
    }
  ],

  similarChunks:
    "Perdón\n" +
    "Disculpa\n" +
    "<a href=\"/chunk/ya-me-voy\" class=\"text-blue-700\"><strong>Ya me voy</strong></a>\n" +
    "Permiso\n" +
    "Con su permiso\n" +
    "Me da permiso\n" +
    "Me das permiso",

  tags: [
    { label: "A1 (¡Vas empezando!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Formal 💼" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "hace-falta",
  title: "Hace falta",
  category: "everyday chunks",

  meaning:
    "You’re probably already familiar with the verb <strong>hacer</strong>.\n\n" +
    "But what about <strong>hace falta</strong>?\n\n" +
    "Well, it’s actually a super common way of saying:\n" +
    "👉 <strong>it’s necessary</strong>\n" +
    "👉 <strong>we need</strong> (more natural)\n\n" +
    "Let’s say Erika asks me:\n" +
    "<strong>¿Qué hay que comprar en el súper?</strong>\n" +
    "<strong>What do we need to buy at the supermarket?</strong>\n\n" +
    "I might answer:\n" +
    "<strong>Hacen falta yogur, cereales y pan.</strong>\n" +
    "<strong>We need yogurt, cereal, and bread.</strong>\n\n" +
    "It’s not a direct translation, but it’s the most natural way to express that kind of lack or need in Spanish.\n\n" +
    "Just don’t forget that you’ve gotta conjugate <strong>hacer</strong> depending on whether the thing(s) you need are singular or plural:\n" +
    "<strong>Hace falta pan.</strong> = <em>We need bread.</em>\n" +
    "<strong>Hacen falta cebollas.</strong> = <em>We need onions.</em>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When something’s missing (physically or emotionally):</p>" +

    "<p class='mb-4'><strong>Hace falta algo, ¿no?</strong><br><em>Something’s missing, don’t you think?</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>When you need something to make a plan work:</p>" +

    "<p class='mb-4'><strong>Hace falta hielo para la fiesta.</strong><br><em>We need ice for the party.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>When you want to express need without saying <em>necesitar</em>:</p>" +

    "<p class='mb-6'><strong>No hace falta que me lo digas… ya lo sé.</strong><br><em>You don’t need to tell me… I already know.</em></p>",

  tone:
    "✅ Neutral and super common.\n\n" +
    "✅ Works in casual or formal settings.\n\n" +
    "✅ Can be poetic or practical, depending on the vibe.",

  examples: [
    {
      spanish: "Hace falta alguien como tú en el equipo.",
      english: "The team needs someone like you."
    },
    {
      spanish: "Hace falta leche.",
      english: "We’re out of milk."
    }
  ],

  similarChunks:
    "Falta\n" +
    "Faltan\n" +
    "Se necesita\n" +
    "No hay\n" +
    "Ya no hay\n" +
    "Hay que pedir\n" +
    "Hay que ir por\n" +
    "Nos falta",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "fijate-que",
  title: "Fíjate que",
  category: "everyday chunks",

  meaning:
    "I remember asking a pal what <strong>fíjate que</strong> meant after a mere few months in Mexico.\n\n" +
    "Because I literally heard it being used <strong>EVERYWHERE</strong>!\n\n" +
    "And he said the exact same thing as WordReference: <strong>“It means notice that.”</strong>\n\n" +
    "Now, my pal wasn’t wrong… but he wasn’t particularly right either!\n\n" +
    "You see, in Mexican Spanish, it’s a super useful sentence starter with multiple different meanings depending on context:\n" +
    "👉 <strong>Actually…</strong>\n" +
    "👉 <strong>So, here’s the thing…</strong>\n" +
    "👉 <strong>You know what?</strong>\n" +
    "👉 <strong>Guess what…</strong>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When you're correcting someone:</p>" +

    "<p class='mb-4'><strong>Fíjate que sí me contestó el mensaje.</strong><br><em>Actually, he DID reply to my message.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>When you're softening bad news or politely declining:</p>" +
    "<p class='mb-4'><strong>Fíjate que no voy a poder ir mañana.</strong><br><em>So, here’s the thing… I’m not gonna be able to go tomorrow.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>When you’re about to launch into a story or bit of <em>chisme</em>:</p>" +
    "<p class='mb-6'><strong>Fíjate que me taguearon en una foto bien rara.</strong><br><em>Someone tagged me in a super weird pic.</em></p>",

  tone:
    "✅ Super common in spoken Mexican Spanish.\n\n" +
    "✅ Used across all age groups.\n\n" +
    "✅ Great for storytelling, venting, or explaining.",

  examples: [
    {
      spanish: "Fíjate que nunca me ha tocado.",
      english: "Believe it or not, that’s never happened to me."
    },
    {
      spanish: "Fíjate que el desarmador lo compré en la esquina. (real-life example 🎯)",
      english: "Actually, I got the screwdriver at that little shop on the corner."
    }
  ],

  similarChunks:
    "<a href=\"/chunk/es-que\" class=\"text-blue-700\"><strong>Es que</strong></a>\n" +
    "Resulta que\n" +
    "<a href=\"/chunk/lo-que-pasa-es-que\" class=\"text-blue-700\"><strong>Lo que pasa es que</strong></a>\n" +
    "Pues mira\n" +
    "Pasa y acontece\n" +
    "Cómo ves que",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "la-pase-bien",
  title: "La pasé bien",
  category: "everyday chunks",

  meaning:
    "You <strong>WON’T</strong> hear Spanish speakers say <strong>“tuve un buen tiempo.”</strong>\n\n" +
    "It’s grammatically correct, sure… but it sounds like something Google Translate cooked up.\n\n" +
    "And if you want to say I had a good time in real, natural Spanish?\n\n" +
    "Well, the chunk you need is:\n" +
    "👉 <strong>La pasé bien</strong> = <em>I had a great time</em>\n\n" +
    "And yep, it’s always <strong>la</strong>… unless you’re in Spain, where they say <strong>lo pasé bien</strong>!",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to say that you had a good time!! 🎉🥳🎊🪅</p>" +

    "<p class='mb-4'><strong>Gracias por invitarme. ¡La pasé muy bien!</strong><br><em>Thanks for inviting me. I had a really good time!</em></p>" +

    "<p class='mb-6'>— <strong>¿Te divertiste anoche?</strong><br>— <strong>Sí, la pasé bien.</strong><br><em>— Did you have fun last night?<br>— Yeah, I had a great time.</em></p>",

  tone:
    "✅ Friendly, casual, and super natural.\n\n" +
    "✅ Great for texts, everyday convos, or even social posts.\n\n" +
    "✅ A go-to chunk after parties, dinners, dates, etc.",

  examples: [
    {
      spanish: "Hace mucho que no la paso tan bien.",
      english: "I haven’t had this much fun in ages."
    }
  ],

  similarChunks:
    "Me divertí\n" +
    "Estuvo muy padre\n" +
    "Estuvo poca madre\n" +
    "Me la pasé chido\n" +
    "Me la pasé a toda madre\n" +
    "Me la pasé de lujo\n" +
    "Me la pasé increíble",

  tags: [
    { label: "A2 (¡Vas bien!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "tener-ganas-de",
  title: "Tener ganas de + infinitive",
  category: "everyday chunks",

  meaning:
    "This chunk is gonna make you sound <strong>WAY</strong> more native.\n\n" +
    "Promise. 😉\n\n" +
    "It’s a natural, super common way to say:\n" +
    "👉 <strong>I feel like…</strong>\n" +
    "👉 <strong>I want to…</strong>\n\n" +
    "So, instead of saying:\n" +
    "<strong>Quiero ir a bailar.</strong>\n" +
    "<em>I want to go dancing.</em>\n\n" +
    "You can say:\n\n" +
    "<strong>Tengo ganas de ir a bailar.</strong>\n" +
    "<em>I feel like going dancing. / I’m in the mood to dance.</em> 💃\n\n" +
    "And yeah, saying <strong>quiero ir</strong> is totally fine.\n\n" +
    "<strong>BUT</strong> in real-life Mexican Spanish, <strong>tener ganas de</strong> is way more expressive.\n\n" +
    "Erika 100% prefers it! 😉\n\n\n" +
    "💡 Oh, and you can also use it with nouns:\n" +
    "<strong>Tengo ganas de un helado.</strong>\n" +
    "<em>I want an ice cream.</em> 🍦",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you feel like doing something and want to sound natural AF:</p>" +

    "<p class='mb-4'><strong>Tengo ganas de salir hoy.</strong><br><em>I feel like going out today.</em></p>" +

    "<p class='mb-4'><strong>No tengo ganas de estudiar.</strong><br><em>I don’t feel like studying.</em></p>" +

    "<p class='mb-6'><strong>Tengo ganas de verte.</strong><br><em>I want to see you.</em></p>",

  tone:
    "✅ Casual, friendly, and super natural.\n\n" +
    "✅ Great for talking about emotions and desire.\n\n" +
    "✅ More idiomatic than <strong>quiero</strong> (and <strong>WAY</strong> more expressive!).",

  examples: [
    {
      spanish: "Tengo ganas de dormir todo el día.",
      english: "I feel like sleeping all day."
    },
    {
      spanish: "¿No tienes ganas de una chelita?",
      english: "Don’t you want a beer?"
    },
    {
      spanish: "La neta, no tengo ganas de hablar con nadie.",
      english: "Honestly… I don’t feel like talking to anyone."
    }
  ],

  similarChunks:
    "Querer\n" +
    "<a href=\"/chunk/se-me-antoja\" class=\"text-blue-700\"><strong>Se me antoja</strong></a>\n" +
    "Me dan ganas de\n" +
    "Traigo ganas de",

  tags: [
    { label: "A2 (¡Vas bien!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "se-me-antoja",
  title: "Se me antoja",
  category: "everyday chunks",

  meaning:
    "So, this one technically means <strong>I’m craving.</strong>\n\n" +
    "But here’s the thing: a Mexican craving isn’t always as intense or dramatic as a British or American craving.\n\n" +
    "It’s less <strong>“OMG I need this NOW!”</strong>\n\n" +
    "And more <strong>“Ooooh, that sounds kinda nice right now.”</strong>\n\n" +
    "So yeah, <strong>se me antoja</strong> probably translates best as:\n" +
    "👉 <strong>I feel like…</strong>\n" +
    "👉 <strong>I could go for…</strong>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever something catches your fancy — food, a plan, a vibe — and you want to express it in the most Mexican way possible:</p>" +

    "<p class='mb-4'><strong>Se me antoja un cafecito.</strong><br><em>I feel like a coffee.</em></p>" +

    "<p class='mb-6'><strong>Se me antoja ir a bailar.</strong><br><em>I feel like going dancing.</em></p>",

  tone:
    "✅ Casual, friendly, and a little whimsical.\n\n" +
    "✅ <strong>VERY</strong> common in Mexico.",

  examples: [
    {
      spanish: "Se me antoja una chelita bien fría.",
      english: "I could go for an ice-cold beer."
    },
    {
      spanish: "Se me antoja quedarme en casa hoy.",
      english: "I feel like staying home today."
    },
    {
      spanish: "¿No se te antoja un pan dulce?",
      english: "Are you up for some pan dulce?"
    }
  ],

  similarChunks:
    "<a href=\"/chunk/tener-ganas-de\" class=\"text-blue-700\"><strong>Tengo ganas de</strong></a>\n" +
    "<a href=\"/chunk/se-me-antojo\" class=\"text-blue-700\"><strong>Se me antojó</strong></a>\n" +
    "Traigo ganas de\n" +
    "Traigo unas ganas locas de\n" +
    "Me dan ganas de",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "se-me-antojo",
  title: "Se me antojó",
  category: "everyday chunks",

  meaning:
    "This is just the <strong>past tense version</strong> of <strong>se me antoja</strong>.\n" +
    "👉<strong>Se me antojó…</strong> = <em>I felt like… / I was craving…</em>\n\n" +
    "<strong>BUT</strong> it can also be used in the present moment.\n\n" +
    "You see, Mexicans often get an urge and say things like:\n" +
    "<strong>Se me antojó ir por tacos.</strong>\n" +
    "<em>I feel like going for tacos.</em>\n\n\n" +
    "<strong>⚠️ Remember:</strong>\n" +
    "We’re not talking full-blown, kill-for-this cravings.\n\n" +
    "Mexican <strong>antojos</strong> are soft, gentle, fleeting little urges. 💘",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When you suddenly get the urge for something:</p>" +
    "<p class='mb-4'><strong>Se me antojó un chocolate.</strong><br><em>I feel like eating some chocolate.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>When you’re recounting a past craving or urge:</p>" +
    "<p class='mb-6'><strong>Y luego se me antojó salir a caminar.</strong><br><em>And then I felt like going for a walk.</em></p>",

  tone:
    "✅ Casual and common.\n\n" +
    "✅ Great for telling stories or explaining why you did something.",

  examples: [
    {
      spanish: "Ayer se me antojó una nieve.",
      english: "Yesterday I got a craving for ice cream."
    },
    {
      spanish: "Se me antojó ver una peli vieja.",
      english: "I feel like watching an old movie."
    }
  ],

  similarChunks:
    "<a href=\"/chunk/se-me-antoja\" class=\"text-blue-700\"><strong>Se me antoja</strong></a>\n" +
    "Tenía ganas de\n" +
    "Me dieron ganas de\n" +
    "Me entraron unas ganas de",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "me-cae-bien",
  title: "Me cae bien/mal",
  category: "everyday chunks",

  meaning:
    "You’re gonna come across this chunk <strong>A LOT</strong>!\n\n" +
    "It literally means <strong>he or she falls well/badly</strong> with me… but that doesn’t really make much sense, does it?\n\n" +
    "And that’s because it’s actually another way of saying:\n" +
    "👉 <strong>I like/don't like someone</strong> (in a non-romantic way!)\n\n\n" +
    "<strong>⚠️ Remember:</strong>\n" +
    "If you use <strong>gustar</strong> with a person, it usually means you’re <strong>INTO THEM</strong> romantically.\n\n" +
    "So yeah… don’t make the mistake I made and start saying stuff like: <strong>Me gusta mi casero.</strong>\n\n" +
    "Which means: <em>I fancy my (80-year-old) landlord.</em> 😳💘",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to say that you like or don’t like someone:</p>" +

    "<p class='mb-4'><strong>Me cae bien tu hermana.</strong><br><em>I like your sister.</em></p>" +

    "<p class='mb-4'><strong>Me cae mal mi jefe.</strong><br><em>I don’t like my boss.</em></p>" ,

  tone:
    "✅ Everyday Mexican Spanish.\n\n" +
    "✅ Totally fine to use in all contexts.\n\n" +
    "❌ Don’t confuse with <strong>gustar</strong> unless you’re talkin’ romance.",

  examples: [
    {
      spanish: "Ese actor me cae bien.",
      english: "I like that actor."
    },
    {
      spanish: "No sé por qué, pero me cae mal el nuevo profe.",
      english: "I don’t know why, but I don’t like the new teacher."
    }
  ],

  similarChunks:
    "Me cae gordo\n" +
    "Me cae de a madres\n" +
    "Me cae poca madre\n" +
    "Llevarse bien/mal con alguien\n" +
    "Es buena onda\n" +
    "Es mala onda\n" +
    "Es muy pesado",

  tags: [
    { label: "A2 (¡Vas bien!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "se-me-olvido",
  title: "Se me olvidó",
  category: "everyday chunks",

  meaning:
    "This is a great little chunk for when you’ve forgotten something!\n\n" +
    "And since I’m kind of <strong>olvidadizo</strong> (forgetful!) myself, I use this one pretty much every day.\n\n" +
    "It just means:\n" +
    "👉 <strong>I forgot</strong>\n\n" +
    "And that <strong>se</strong> at the beginning?\n\n" +
    "Well, it's called the <strong>accidental se</strong>, and it’s there to emphasize that it wasn’t on purpose.\n\n" +
    "Yep, you didn’t mean to forget. It just kinda… happened.\n\n\n" +
    "💡 You can think of this structure like a traffic light:\n\n" +
    "🔴 <strong>se</strong> = <span style='color: red;'><strong>the red light</strong></span> = <strong>NEVER CHANGES</strong>\n\n" +
    "🟢 <strong>me / te / le / nos / les</strong> = <span style='color: green;'><strong>the green light</strong></span> = changes depending on <strong>WHO FORGOT</strong>\n\n" +
    "🟡 <strong>olvidó / olvidaron</strong> = <span style='color: #DAA520;'><strong>the yellow light</strong></span> = changes depending on <strong>HOW MANY THINGS YOU FORGOT</strong>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever something’s completely slipped your mind: keys, names, dates, birthdays, etc.</p>" +

    "<p class='mb-4'><strong>¡Ay, se me olvidó tu cumpleaños!</strong><br><em>Oh no, I forgot your birthday!</em></p>" +

    "<p class='mb-4'><strong>¡Se me olvidaron las llaves!</strong><br><em>I forgot the keys!</em></p>" +

    "<p class='mb-6'><strong>¡Se me olvidó que me pediste el pan!</strong><br><em>I forgot you asked me for the bread!</em></p>",

  tone:
    "✅ Totally neutral.\n\n" +
    "✅ <strong>VERY</strong> common in everyday convos.\n\n" +
    "✅ Great for softening the blame when you forget something.",

  examples: [
    {
      spanish: "Se me olvidó avisarte que iba a llegar tarde.",
      english: "I forgot to let you know I was going to be late."
    },
    {
      spanish: "¡Se me olvidaron los documentos!",
      english: "I forgot the documents!"
    }
  ],

  similarChunks:
    "Olvidé\n" +
    "<a href=\"/chunk/se-me-fue\" class=\"text-blue-700\"><strong>Se me fue</strong></a>\n" +
    "Se me pasó\n" +
    "Se me fue el avión\n" +
    "Lo olvidé",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "esperame-tantito",
  title: "Espérame tantito",
  category: "everyday chunks",

  meaning:
    "👉 <strong>Hang on a sec.</strong>\n" +
    "👉 <strong>Wait a sec.</strong>\n" +
    "👉 <strong>Give me a second.</strong>\n\n" +
    "And that cute little <strong>-ito</strong> at the end?\n\n" +
    "Well, it’s doing a lot of heavy lifting. 💪\n\n" +
    "It basically makes the phrase sound more polite — and <strong>WAYYY</strong> more Mexican — than a straight-up <strong>“¡Espérame!”</strong>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When you want someone to wait for a sec, that’s when!</p>" +

    "<p class='mb-4'><strong>Espérame tantito, ya estoy terminando…</strong><br><em>Hang on a sec, I’m just finishing up…</em></p>" +

    "<p class='mb-6'>— <strong>¿Ya estás listo?</strong><br>— <strong>¡Espérame tantito!</strong><br><em>— You ready?<br>— Give me a sec!</em></p>",

  tone:
    "✅ Super, mega Mexican.\n\n" +
    "✅ Sounds chill and polite thanks to the <strong>-ito</strong>.",

  examples: [
    {
      spanish: "Espérame tantito, voy al baño rápido.",
      english: "Hang on a sec, I’m just going to run to the bathroom real quick."
    }
  ],

  similarChunks:
    "<a href=\"/chunk/aguantame-tantito\" class=\"text-blue-700\"><strong>Aguántame tantito</strong></a>\n" +
    "Pérame tantito\n" +
    "Pérame\n" +
    "Permítame tantito\n" +
    "Dame un segundito",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},


{
  slug: "aguantame-tantito",
  title: "Aguántame tantito",
  category: "everyday chunks",

  meaning:
    "Woohoo!\n\n" +
    "I present to you another super Mexican way of asking someone <strong>to hold on</strong> or <strong>wait</strong> (especially when you’re in the middle of doing something!).\n\n" +
    "It just means:\n" +
    "👉 <strong>Hold on a sec.</strong>\n"+
    "👉 <strong>Give me a second.</strong> (but <strong>chilango</strong> style)",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to tell someone to hold on a sec in the most Mexican way imaginable:</p>" +

    "<p class='mb-6'><strong>Aguántame tantito, nomás termino esta llamada.</strong><br><em>Give me a sec, just finishing this call.</em></p>" +

    "<p class='mb-4'>— <strong>Oye, ¿ya vámonos?</strong><br>— <strong>Aguántame tantito, ya casi termino.</strong><br><em>— Hey, ready to go?<br>— Hold on a sec, I’m almost finished.</em></p>",

  tone:
    "✅ Super informal.\n\n" +
    "✅ Slightly more <strong>ñero</strong> than <strong>espérame tantito</strong>.\n\n" +
    "🚫 Maybe skip in formal situations.",

  examples: [
    {
      spanish: "Aguántame tantito, wey.",
      english: "Hold on a sec, dude."
    }
  ],

  similarChunks:
    "<a href=\"/chunk/esperame-tantito\" class=\"text-blue-700\"><strong>Espérame tantito</strong></a>\n" +
    "Pérame tantito\n" +
    "Pérame\n" +
    "Aguanta vara\n" +
    "Dame chance\n" +
    "Dame un segundito",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Chilango 🚇" },
    { label: "Ñero (barrio) 🧢" },
    { label: "MUY informal 💀" }
  ],

  audioUrls: []
},

{
  slug: "en-lo-mas-minimo",
  title: "En lo más mínimo",
  category: "linguistic glue",

  meaning:
    "This one’s a great way to strongly deny something!\n\n" +
    "It translates well to:\n" +
    "👉 <strong>not in the slightest</strong>\n" +
    "👉 <strong>not at all</strong>\n\n\n" +
    "💡 You’re always going to use this chunk in <strong>NEGATIVE</strong> sentences (see examples below!).",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When you want to say that something didn’t happen or isn’t even close to the truth:</p>" +

    "<p class='mb-4'><strong>No me ayudaste en lo más mínimo.</strong><br><em>You didn’t help me at all.</em></p>" +

    "<p class='mb-4'><strong>No le afectó en lo más mínimo.</strong><br><em>It didn’t affect him in the slightest.</em></p>" +

    "<p class='mb-4'>— <strong>¿Te dio celos?</strong><br>— <strong>No, en lo más mínimo.</strong><br><em>— Did it make you jealous?<br>— No, not at all.</em></p>" +

    "<p class='mb-6'>— <strong>Se me hace que te gusta Sebastián…</strong><br>— <strong>¡Claro que no! No me atrae en lo más mínimo.</strong><br><em>— I think you’ve got a crush on Sebastian…<br>— No I don’t! I literally don’t find him attractive at all.</em></p>",

  tone:
    "✅ Neutral.\n\n" +
    "✅ Kinda dramatic.\n\n" +
    "🚫 Not rude, just firm and emphatic.",

  examples: [
    {
      spanish: "No me molestó en lo más mínimo.",
      english: "I wasn’t bothered in the slightest."
    },
    {
      spanish: "No me suena en lo más mínimo.",
      english: "It doesn’t sound at all familiar."
    },
    {
      spanish: "No lo extraño en lo más mínimo.",
      english: "I don’t miss him at all."
    }
  ],

  similarChunks:
    "Para nada\n" +
    "Nada de nada\n" +
    "Ni tantito\n" +
    "Ni en sueños\n" +
    "Ni al caso\n" +
    "En absoluto",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "o-si-no-igual",
  title: "O si no, igual",
  category: "linguistic glue",

  meaning:
    "This one’s a super Mexican way to suggest a backup plan, especially when you're thinking out loud or just vibing with a pal.\n\n" +
    "It means something along the lines of:\n" +
    "👉 <strong>Or if not, we can just…</strong>\n" +
    "👉 <strong>Or otherwise, we could just…</strong>\n\n" +
    "Oh, and it’s also used to float theories as to <strong>WHY</strong> something happened:\n" +
    "➡️ <strong>Or if not, maybe it was…</strong>\n\n\n" +
    "💡In Mexican Spanish <strong>igual</strong> has loads of different functions (and will make you sound <strong>WAY</strong> more native if you start using it!).\n\n" +
    "In this particular chunk, it adds a laid-back, speculative tone.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you're casually suggesting an alternative plan:</p>" +

    "<p class='mb-4'><strong>O si no, igual nos echamos unas chelas en tu casa.</strong><br><em>Or if not, we can just have a few beers at your place.</em></p>" +

    "<p class='mb-4'><strong>Vamos a comer algo… o si no, igual te caigo más tarde.</strong><br><em>Let’s go eat something… or if not, I’ll just drop by later.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>Or when speculating about a possible ulterior motive or cause:</p>" +

    "<p class='mb-6'><strong>O si no, igual faltó al trabajo porque lo suspendieron…</strong><br><em>Or maybe he missed work because they suspended him…</em></p>",

  tone:
    "✅ Super casual.\n\n" +
    "✅ Great for brainstorming ideas.\n\n" +
    "✅ Often paired with <strong>este</strong> or a little pause.",

  examples: [
    {
      spanish: "O si no, igual pedimos pizza y vemos una peli.",
      english: "Or if not, we could just order pizza and watch a movie."
    },
    {
      spanish: "O si no, igual, este, jugamos al Play. (real-life example 🎯)",
      english: "Or if not, well, we can just play PlayStation."
    }
  ],

  similarChunks:
    "Y si no\n" +
    "O igual\n" +
    "O chance\n" +
    "Qué tal que\n" +
    "Igual y",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "MUY informal 💀" },
    { label: "Millennial 😎" },
    { label: "Gen Z 👾" }
  ],

  audioUrls: []
},

{
  slug: "ni-nada",
  title: "Ni nada",
  category: "linguistic glue",

  meaning:
    "This is one of those sneaky little chunks that will make you sound <strong>SOOO</strong> much more natural if you actually use it when speaking!\n\n" +
    "It often translates well as:\n" +
    "👉 <strong>…or anything</strong>\n" +
    "👉 <strong>…or anything like that</strong>\n\n" +
    "It’s basically a chill, dismissive, or sarcastic way to end a sentence (and give it a little extra flavor 🌶️).",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When you want to clarify or downplay something:</p>" +

    "<p class='mb-4'><strong>No lo dije en mala onda ni nada.</strong><br><em>I didn’t mean it in a bad way or anything.</em></p>" +

    "<p class='mb-4'><strong>Él y yo no somos pareja ni nada.</strong><br><em>We’re not a couple or anything.</em></p>" +

    "<p class='mb-4'><strong>No quiero que pienses que fue por ti, ni nada.</strong><br><em>I don’t want you to think it was because of you or anything.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>When listing stuff that’s missing (and you’re kinda disappointed):</p>" +

    "<p class='mb-4'><strong>No trajo flores, ni chocolates, ni nada.</strong><br><em>He didn’t bring flowers, or chocolates, or anything like that.</em></p>" +

    "<p class='mb-4'><strong>No hay pizza, ni hamburguesas, ni nada.</strong><br><em>There’s no pizza, no burgers, nothing.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>When you want to emphasize that someone DIDN’T do something (often with a hint of disbelief/criticism):</p>" +

    "<p class='mb-4'><strong>No me ha llamado ni nada.</strong><br><em>He hasn’t called or anything like that.</em></p>" +

    "<p class='mb-6'><strong>No le dijo perdón ni nada.</strong><br><em>He didn’t say sorry or anything.</em></p>",

  tone:
    "✅ Used across the Spanish-speaking world.\n\n" +
    "✅ Super common in Mexico.\n\n" +
    "🚫 Not used in formal writing.",

  examples: [
    {
      spanish: "No es una cita ni nada, nomás vamos a comer.",
      english: "It’s not a date or anything, we’re just grabbing food."
    },
    {
      spanish: "No fue una indirecta ni nada…",
      english: "It wasn’t like a hint or anything…"
    }
  ],

  similarChunks:
    "O algo así\n" +
    "Ni al caso\n" +
    "Y más nada\n" +
    "Ni nada por el estilo",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "ni-como",
  title: "Ni cómo",
  category: "linguistic glue",

  meaning:
    "This lil’ beauty of a chunk is all about <strong>NOT</strong> being able to do anything.\n\n" +
    "It’s a bit like saying:\n" +
    "👉 <strong>There’s nothing I can do.</strong>\n" +
    "👉 <strong>I got nothing.</strong>\n\n\n"+
    "💡 It's normally followed by an <strong>INFINITVE</strong>!",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you’re admitting that you have no way to help, fix, or explain something!</p>" +

    "<p class='mb-4'><strong>Ni cómo defenderme, wey.</strong><br><em>I’ve got no way to defend myself, bro.</em></p>" +

    "<p class='mb-4'><strong>Ni cómo negarlo.</strong><br><em>There’s no way I can deny it.</em></p>" +

    "<p class='mb-4'><strong>Ni cómo decirle que no.</strong><br><em>It’s not like I can tell him no.</em></p>" +

    "<p class='mb-6'><strong>Ni cómo hacerle.</strong><br><em>There’s nothing we can do.</em></p>",

  tone:
    "✅ Casual Mexican Spanish.\n\n" +
    "✅ Sounds chill but can carry emotional weight.\n\n" +
    "✅ Often used in stressful situations.",

  examples: [
    {
      spanish: "Ahorita, ni cómo, wey.",
      english: "As things stand, I got nothing, man."
    },
    {
      spanish: "Ni cómo ayudarte. (real-life example 🎯)",
      english: "There’s literally nothing I can do to help."
    }
  ],

  similarChunks:
    "No hay manera\n" +
    "No se puede\n" +
    "Ya ni pa’ qué\n" +
    "No hay forma\n" +
    "No veo cómo\n" +
    "Ni idea\n" +
    "No hay por dónde\n" +
    "No veo por dónde",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "no-es-por-nada",
  title: "No es por nada",
  category: "linguistic glue",

  meaning:
    "This one’s my fave Mexican softener… just drop it right before saying something that might sound <strong>arrogant, blunt, critical, etc.</strong>, to sound (slightly) less savage, lol.\n\n" +
    "Think of it like:\n" +
    "👉 <strong>Not to brag or anything…</strong>\n" +
    "👉 <strong>No shade… but here’s some shade...</strong>\n" +
    "👉 <strong>Just saying…</strong>\n\n\n" +
    "💡 It can go <strong>BEFORE</strong> or <strong>AFTER</strong> the opinion you're softening.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When you want to sound humble (but you're 100% flexing):</p>" +

    "<p class='mb-4'><strong>No es por nada, pero sí me rifé.</strong><br><em>Not to brag or anything, but I crushed it.</em></p>" +

    "<p class='mb-4'><strong>No es por nada, pero me quedó bien chido.</strong><br><em>Not to brag or anything… but it turned out really well.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>You can also use it before dropping a direct criticism:</p>" +

    "<p class='mb-4'><strong>No es por nada, wey… pero siempre llegas tarde.</strong><br><em>No offense, dude… but you’re always late.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>Or when you’re pointing out something obvious and don’t want to sound preachy:</p>" +

    "<p class='mb-6'><strong>No es por nada, pero ya son las 3 am.</strong><br><em>It's already 3 am, just saying.</em></p>",

  tone:
    "✅ Everyday Mexican Spanish.\n\n" +
    "✅ Used for softening bragging, criticism, or bold statements.",

  examples: [
    {
      spanish: "No es por nada, pero qué flojera ir a esa fiesta.",
      english: "No offense or anything, but I really can’t be bothered to go to that party."
    },
    {
      spanish: "Es uno de los mejores en el país, la verdad. No es por nada. (real-life example 🎯)",
      english: "Honestly, he's one of the best in the country. Not to brag or anything."
    },
    {
      spanish: "No es por nada, pero canta bien feo.",
      english: "I don't mean to be rude, but he’s a terrible singer."
    }
  ],

  similarChunks:
    "No por presumir\n" +
    "Con todo respeto\n" +
    "No es mala onda\n" +
    "Voy a sonar mamón, pero…\n" +
    "No quiero sonar mamón, pero…\n" +
    "No me lo tomes a mal, pero...",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "asi-que",
  title: "Así que",
  category: "linguistic glue",

  meaning:
    "This is one of the most useful, gluey little chunks in Spanish!\n\n" +
    "It connects a cause with a consequence, kinda like saying:\n" +
    "👉 <strong>so</strong>\n" +
    "👉 <strong>therefore</strong>\n" +
    "👉 <strong>so yeah</strong>\n\n" +
    "It’s not dramatic or poetic, just everyday verbal duct tape.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you’re explaining what happened next based on something else:</p>" +

    "<p class='mb-4'><strong>Ya era bien tarde, así que me fui.</strong><br><em>It was already super late, so I left.</em></p>" +

    "<p class='mb-4'><strong>Está lloviendo, así que vamos a cancelar.</strong><br><em>It’s raining, so we’re gonna cancel.</em></p>" +

    "<p class='mb-4'><strong>No estudié nada… así que reprobé.</strong><br><em>I didn’t study at all… so yeah, I failed.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>It also works to wrap up a rant, a story, or a passive-aggressive truth bomb:</p>" +

    "<p class='mb-4'><strong>Así que mejor ni me hables.</strong><br><em>So yeah, don’t even talk to me.</em></p>" +

    "<p class='mb-6'><strong>Así que no lo volveré a hacer.</strong><br><em>So yeah, I won't do it again.</em></p>",

  tone:
    "✅ Neutral and super common.\n\n" +
    "❌ Not formal, not slang, just your friendly neighborhood go-to connector.",

  examples: [
    {
      spanish: "No contestó, así que le mandé un mensaje.",
      english: "She didn’t answer, so I messaged her."
    },
    {
      spanish: "Así que tú puedes ir por los próximos cinco meses con tu cantaleta… (real-life example 🎯)",
      english: "So you can go on and on for the next five months with the same old story…"
    }
  ],

  similarChunks:
    "Entonces\n" +
    "Por eso\n" +
    "Total que\n" +
    "O sea que\n" +
    "Y pues ya\n" +
    "Tons\n" +
    "Y así\n" +
    "Eso significa que",

  tags: [
    { label: "A2 (¡Vas bien!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "nomas-que",
  title: "Nomás que",
  category: "linguistic glue",

  meaning:
    "Here’s another chunk that’s gonna make you sound <strong>SUPER-DUPER</strong> Mexican. 🌵\n\n" +
    "I kid you not.\n\n" +
    "<strong>Nomás</strong> (get the full lowdown <strong>HERE</strong>) is a contraction of <strong>nada más</strong> (which normally means <strong>just</strong> or <strong>only</strong>), and in Mexican Spanish it’s used <strong>WAYYYY</strong> more than <strong>solamente</strong> or <strong>solo</strong>.\n\n" +
    "Its chunky form, <strong>nomás que</strong>, usually works like a <strong>warning or condition</strong>:\n" +
    "👉 <strong>Only thing is…</strong>\n" +
    "👉 <strong>Just watch out, because…</strong>\n" +
    "👉 <strong>But…</strong>\n\n\n" +
    "💡I like to think of <strong>nomás que</strong> as the spicy Mexican version of <strong>but</strong>! 🌶️",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When you want to lay down a condition, give a cheeky warning, or point out a downside:</p>" +

    "<p class='mb-4'><strong>Nomás que no se entere tu mamá.</strong><br><em>Just don’t let your mom find out.</em></p>" +

    "<p class='mb-4'><strong>Nomás que está medio lejos, eh.</strong><br><em>Just so you know, it’s kinda far.</em></p>" +

    "<p class='mb-4'><strong>Nomás que te toca pagar a ti.</strong><br><em>Only thing is… you’re paying.</em></p>" +

    "<p class='mb-4'><strong>Me gustaría ir, nomás que no tengo dinero.</strong><br><em>I'd like to go, but I don’t have any money.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>Oh, and it can also mean <em>as soon as</em> in certain contexts:</p>" +

    "<p class='mb-4'><strong>Nomás que llegue, te aviso.</strong><br><em>I'll let you know as soon as I arrive.</em></p>" +

    "<p class='mb-6'><strong>Nomás que me vista, salimos.</strong><br><em>Just let me get dressed, and we'll head out.</em></p>",

  tone:
    "✅ Super-duper Mexican.\n\n" +
    "✅ Feels casual, but can be a little passive-aggressive.\n\n" +
    "❌ Don’t use it in business emails (unless you're rage-quitting 😎).",

  examples: [
    {
      spanish: "Nomás que no va a estar tan fácil como crees.",
      english: "But it won’t be as easy as you think."
    },
    {
      spanish: "Nomás que si no salen en chinga… (real-life example 🎯)",
      english: "But if you don’t get out fast…"
    }
  ],

  similarChunks:
    "Nada más que\n" +
    "El único detalle es que\n" +
    "Lo malo es que\n" +
    "No más te digo que\n" +
    "Solo que\n" +
    "En cuanto\n" +
    "Te advierto que",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "de-ahi-en-fuera",
  title: "De ahí en fuera",
  category: "linguistic glue",

  meaning:
    "Another fun Mexican chunk.\n\n" +
    "I mean, aren’t they all? 😉\n\n" +
    "And this one normally translates well to one of the following:\n" +
    "👉 <strong>Other than that…</strong>\n" +
    "👉 <strong>Aside from that…</strong>\n\n" +
    "It’s basically a <strong>VERY</strong> Mexican way to say: <strong>\"Yeah, there's this ONE problem, BUT let's not be too negative here.\"</strong>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When you’ve been emphasizing everything that’s NOT going well, and then shift to what is:</p>" +

    "<p class='mb-4'><strong>La comida está fría, pero de ahí en fuera, todo excelente.</strong><br><em>The food’s cold, but other than that, everything's excellent.</em></p>" +

    "<p class='mb-4'><strong>Está un poco lejos, pero de ahí en fuera, el lugar está padrísimo.</strong><br><em>It's a bit far, but aside from that, the place is awesome.</em></p>" +

    "<p class='mb-4'><strong>Llegaste tarde, pero de ahí en fuera, no hay problema.</strong><br><em>You were late, but other than that, all good.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>Or vice versa:</p>" +

    "<p class='mb-4'><strong>El café estaba bueno, pero de ahí en fuera, todo estuvo horrible.</strong><br><em>The coffee was good, but other than that, everything was horrible.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>Oh, and it can also be used sarcastically:</p>" +

    "<p class='mb-6'><strong>Pues, llovió, me mojé, perdí el camión, casi me caigo… Pero de ahí en fuera, todo bien.</strong><br><em>Well, it rained, I got drenched, I missed the bus, I almost wiped out… …but hey, other than that, all good!</em></p>",

  tone:
    "✅ Very Mexican.\n\n" +
    "✅ Great for softening criticism and keeping things positive.",

  examples: [
    {
      spanish: "El servicio es lento, pero de ahí en fuera, la comida está buenísima.",
      english: "Service is slow, but that aside, the food's amazing."
    },
    {
      spanish: "No hay estacionamiento. De ahí en fuera, perfecto.",
      english: "There's no parking. Other than that, it’s perfect."
    },
    {
      spanish: "Acoso (en el metro). De ahí en fuera que me hayan bolseado o así, ¿no? (real-life example 🎯)",
      english: "I’ve experienced harassment on the metro. Other than that, I haven’t been pickpocketed or anything, you know?"
    }
  ],

  similarChunks:
    "Aparte de eso\n" +
    "Fuera de eso\n" +
    "Más allá de eso\n" +
    "Además de eso",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "asi-de-facil",
  title: "Así de fácil",
  category: "linguistic glue",

  meaning:
    "This is one of those snappy, no-nonsense chunks that get straight to the point.\n\n" +
    "It means:\n" +
    "👉 <strong>it’s that simple</strong>\n" +
    "👉 <strong>it’s as easy as that</strong>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to emphasize how simple something is, especially when others are overthinking it:</p>" +

    "<p class='mb-4'><strong>Era un funcionario corrupto y está pagando por todo lo que hizo. Así de fácil.</strong><br><em>He was a corrupt official, and now he's paying for everything he did. It’s as simple as that.</em></p>" +

    "<p class='mb-4'>— <strong>¿Y solo tengo que llenar este formulario?</strong><br>— <strong>¡Sí, así de fácil!</strong><br><em>— And I just have to fill out this form?<br>— Yep, it’s as easy as that!</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>You’ll often hear it when someone’s just finished explaining something super straightforward:</p>" +

    "<p class='mb-4'><strong>Tienes que ir a la casa, conseguir la llave y entregársela a tu papá. Así de fácil.</strong><br><em>You just have to go home, grab the key, and give it to your dad. Simple as that.</em></p>" +

    "<p class='mb-6'><strong>No tienes que hacer cita ni nada. Llegas, pagas y ya. Así de fácil.</strong><br><em>You don’t need an appointment or anything. Just show up, pay, and that’s it. It’s literally that simple.</em></p>",

  tone:
    "✅ Casual and punchy.\n\n" +
    "✅Great for everyday conversation.",

  examples: [
    {
      spanish: "No te tienes que complicar. Dile que no y ya… así de fácil.",
      english: "You don’t have to overthink it. Just tell him no… it’s that simple."
    },
    {
      spanish: "¿Y así de fácil entras, llegas y te pasas tan fresca? (real-life example 🎯)",
      english: "So you just waltz in here like you own the place, huh?"
    }
  ],

  similarChunks:
    "Y ya\n" +
    "Así de sencillo\n" +
    "Así las cosas\n" +
    "Y listo\n" +
    "Es pan comido\n" +
    "Así nomás\n" +
    "Está papa\n" +
    "Está papita\n" +
    "Así de simple\n" +
    "Fácil y sencillo",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "es-que",
  title: "Es que",
  category: "linguistic glue",

  meaning:
    "This tiny chunk might look innocent… but it’s actually an <strong>ABSOLUTE BEAST</strong> (in the best possible way!). 👺\n\n" +
    "It can work like any of the following, depending on context:\n" +
    "👉 <strong>because</strong>\n" +
    "👉 <strong>it’s just that</strong>\n" +
    "👉 <strong>the thing is</strong>\n\n" +
    "It’s one of those chunks that’ll make your Spanish sound <strong>WAY</strong> more natural without needing any fancy grammar.\n\n" +
    "Oh, and you’ll hear it <strong>ALL. THE. TIME.</strong> in Mexico!",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When giving an explanation (it’s similar to <em>because</em> or <em>it’s just that</em> in this context):</p>" +

    "<p class='mb-4'>— <strong>¿Por qué no fuiste a la fiesta?</strong><br> — <strong>Es que tenía mucho trabajo.</strong><br><em>— Why didn’t you go to the party?<br> — Because I had a lot of work.</em></p>" +

    "<p class='mb-4'>— <strong>¿Por qué no vas a salir?</strong><br> — <strong>Es que está lloviendo.</strong><br><em>— Why aren’t you going out?<br> — Because it’s raining.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>When diving into an explanation WITHOUT being asked (usually an excuse):</p>" +

    "<p class='mb-4'><strong>Perdón por llegar tarde, es que había mucho tráfico.</strong><br><em>Sorry I’m late; the traffic was awful.</em></p>" +

    "<p class='mb-4'><strong>Lo siento… Es que no sabía que venías.</strong><br><em>Sorry… It’s just that I didn’t know you were coming.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>When softening an opinion or showing reluctance:</p>" +

    "<p class='mb-4'><strong>Es que, pensándolo bien, quizás no sea la mejor idea.</strong><br><em>It’s just that, thinking about it, maybe it’s not the best idea.</em></p>" +

    "<p class='mb-4'><strong>Es que no estoy muy de acuerdo.</strong><br><em>It’s just that I don’t really agree.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>When highlighting an important point:</p>" +

    "<p class='mb-4'><strong>Es que hay que hacer el trato ya.</strong><br><em>The thing is, we need to close the deal now.</em></p>" +

    "<p class='mb-6'><strong>Es que, si no actuamos ahora, podría ser demasiado tarde.</strong><br><em>The thing is, if we don’t act now, it might be too late.</em></p>",

  tone:
    "✅ Very, very, very common in casual speech.\n\n" +
    "✅ Used with friends, family, and coworkers alike.\n\n" +
    "❌ Avoid when giving formal apologies or serious excuses!!",

  examples: [
    {
      spanish: "Es que no me siento tan bien hoy.",
      english: "It’s just that I don’t feel that great today."
    },
    {
      spanish: "Es que no hay que recibir a nadie.",
      english: "The thing is, we’re not supposed to let anyone in."
    }
  ],

  similarChunks:
    "Porque\n" +
    "<a href=\"/chunk/lo-que-pasa-es-que\" class=\"text-blue-700\"><strong>Lo que pasa es que</strong></a>\n" +
    "La verdad es que\n" +
    "<a href=\"/chunk/fijate-que\" class=\"text-blue-700\"><strong>Fíjate que</strong></a>\n" +
    "Pues porque\n" +
    "Ah, porque\n" +
    "Pues mira",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "siempre-y-cuando",
  title: "Siempre y cuando",
  category: "linguistic glue",

  meaning:
    "This one’s just a fancy way of saying:\n" +
    "👉 <strong>as long as / provided that</strong>\n\n" +
    "You'll hear it <strong>A LOT</strong> in offices, schools, and when parents are negotiating with teens.\n\n" +
    "Oh, and it’s normally followed by the dreaded subjunctive. 😱",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever there’s a condition at play:</p>" +

    "<p class='mb-4'><strong>Puedes venir, siempre y cuando no llegues tarde.</strong><br><em>You can come, as long as you don’t arrive late.</em></p>" +

    "<p class='mb-6'><strong>Te presto mi coche, siempre y cuando lo llenes de gasolina.</strong><br><em>I’ll lend you my car, provided that you fill it up with gas.</em></p>",

  tone:
    "✅ Kinda formal, but you’ll hear it in everyday conversations too.\n\n" +
    "✅ Great for rules, negotiations, or polite conditions.",

  examples: [
    {
      spanish: "Podemos hacerlo, siempre y cuando tú estés de acuerdo.",
      english: "We can do it, as long as you agree."
    },
    {
      spanish: "Claro, siempre y cuando te portes bien.",
      english: "Sure, as long as you behave."
    }
  ],

  similarChunks:
    "Si\n" +
    "Con tal de que\n" +
    "Solo si\n" +
    "Con la condición de que\n" +
    "Si me prometes que\n" +
    "Si prometes que\n" +
    "Pero a cambio de",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Formal 💼" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "a-lo-mucho",
  title: "A lo mucho",
  category: "linguistic glue",

  meaning:
    "This chunk’s perfect for talking about the upper limit of anything you can count!\n\n" +
    "It roughly translates to:\n" +
    "👉 <strong>tops</strong>\n" +
    "👉 <strong>at most</strong>\n" +
    "👉 <strong>max</strong>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you’re talking about limits:</p>" +

    "<p class='mb-4'><strong>Va a tardar 10 minutos a lo mucho.</strong><br><em>It’ll take 10 minutes tops.</em></p>" +

    "<p class='mb-4'><strong>Tengo 100 pesos a lo mucho.</strong><br><em>I’ve got 100 pesos, max.</em></p>" +

    "<p class='mb-6'><strong>Vamos a ser cinco a lo mucho.</strong><br><em>There’ll be five of us, max.</em></p>",

  tone:
    "✅ Informal and native-sounding.\n\n" +
    "✅ Very common in everyday speech.\n\n" +
    "🚫 Not ideal for formal writing.",

  examples: [
    {
      spanish: "Voy a quedarme una hora a lo mucho.",
      english: "I’m staying for an hour tops."
    },
    {
      spanish: "A lo mucho, nos dieron 3 días.",
      english: "They gave us 3 days max."
    },
    {
      spanish: "Nos van a pagar, a lo mucho, la próxima semana.",
      english: "We’ll get paid next week, tops."
    }
  ],

  similarChunks:
    "Como mucho\n" +
    "Máximo\n" +
    "Por mucho\n" +
    "A lo más",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "ves-que",
  title: "Ves que",
  category: "linguistic glue",

  meaning:
    "Yay, it’s another <strong>SUPER CHUNK</strong>! 🎊\n\n" +
    "And a simple one to boot!\n\n" +
    "Because it normally translates well as:\n" +
    "👉 <strong>You know (how)…</strong>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you're trying to get someone to understand where you’re coming from:</p>" +

    "<p class='mb-4'><strong>Ves que he estado full de chamba…</strong><br><em>You know how I’ve been swamped with work…</em></p>" +

    "<p class='mb-4'><strong>Ves que no me gusta salir mucho…</strong><br><em>You know I don’t really like going out…</em></p>" +

    "<p class='mb-6'><strong>Ves que se pone de malas fácil.</strong><br><em>You know she gets grumpy easily.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>It can also sometimes translate well as <em>do you remember that/when</em>:</p>" +

    "<p class='mb-4'><strong>¿Ves que nos dijo que se había ido a su casa? ¡Pues se fue con el novio!</strong><br><em>Remember when she told us she went home? Well, she actually went to her boyfriend’s place!</em></p>" +

    "<p class='mb-6'><strong>¿Ves que habían terminado? Pues ya se casaron</strong><br><em>Remember how they broke up? Well, they’re married now.</em></p>",

  tone:
    "✅ <strong>VERY</strong> common in everyday speech.\n\n" +
    "✅ Chill and friendly.\n\n" +
    "🚫 Not for formal writing.",

  examples: [
    {
      spanish: "Ves que mi mamá es bien estricta...",
      english: "You know how my mom’s really strict..."
    },
    {
      spanish: "…porque ves que se supone que ahí cayó el meteorito que destruyó a los dinosaurios. (real-life example 🎯)",
      english: "…because you know that’s supposedly where the meteor that wiped out the dinosaurs hit."
    }
  ],

  similarChunks:
    "Ya ves que\n" +
    "<a href=\"/chunk/es-que\" class=\"text-blue-700\"><strong>Es que</strong></a>\n" +
    "Estás viendo\n" +
    "Es que mira\n" +
    "Recuerdas que",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "al-rato",
  title: "Al rato",
  category: "time phrases",

  meaning:
    "<strong>Ahorita</strong> might be the most infamous Mexican time expression.\n\n" +
    "But this chunk gives it a run for its money!\n\n" +
    "It's as Mexican as they come, and can be every bit as vague as its better-known cousin.\n\n" +
    "Here's what it means:\n" +
    "👉 <strong>later / in a bit / sometime soon (ish)</strong>\n\n" +
    "Yep, like many Mexican time expressions, <strong>al rato</strong> reflects a more fluid approach to time!",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to say that you'll do something later, in a bit, or soonish…</p>" +

    "<p class='mb-4'><strong>Te marco al rato.</strong><br><em>I'll call you in a bit.</em></p>" +

    "<p class='mb-4'><strong>Lo hago al rato.</strong><br><em>I'll do it later.</em></p>" +

    "<p class='mb-6'><strong>— ¿Vas a ir?</strong><br><strong>— Sí, al rato.</strong><br><em>— Are you going?<br>— Yeah, later.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>It's also commonly paired with <em>nos vemos:</em></p>" +

    "<p class='mb-6'><strong>Nos vemos al rato.</strong><br><em>See you later.</em></p>",

  tone:
    "✅ <strong>VERY</strong> Mexican.\n\n" +
    "✅ Chill and casual.\n\n" +
    "✅ Often purposefully vague…\n\n" +
    "❌ Not used this way in Spain.",

  examples: [
    {
      spanish: "Al rato paso por ti.",
      english: "I'll pick you up later."
    },
    {
      spanish: "Dile que le marco al rato. (real-life example 🎯)",
      english: "Tell him I'll ring later."
    },
    {
      spanish: "— ¿Ya vas a hacer la tarea?\n— Sí, al rato.",
      english: "— Are you gonna do your homework soon?\n— Yeah, later."
    }

  ],

  similarChunks:
    "<a href=\"/chunk/en-un-rato\" class=\"text-blue-700\"><strong>En un rato</strong></a>\n" +
    "En un ratito\n" +
    "En un ratón\n" +
    "Más al rato\n" +
    "Al ratito\n" +
    "Más tarde\n" +
    "Más tardecito\n" +
    "<a href=\"/chunk/luego-luego\" class=\"text-blue-700\"><strong>Luego luego</strong></a>\n" +
    "<a href=\"/chunk/de-una-vez\" class=\"text-blue-700\"><strong>De-una-vez</strong></a>\n" +
    "En unos minutitos",

  tags: [
    { label: "A2 (¡Vas bien!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Mexican Spanish 💀" }
  ],

  audioUrls: []
},

{
  slug: "en-un-rato",
  title: "En un rato",
  category: "time phrases",

  meaning:
    "This one’s a very common way of saying that something will happen:\n" +
    "👉 <strong>in a bit / soon </strong>\n\n" +
    "And it’s not actually as vague as it sounds!\n\n" +
    "Yep, it’s almost always said with actual intent (i.e., the thing in question <strong>IS</strong> getting done). 💪",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever something’s gonna happen fairly soon, but not immediately:</p>" +

    "<p class='mb-4'><strong>Te veo en un rato.</strong><br><em>See you in a bit.</em></p>" +
    "<p class='mb-4'><strong>En un rato bajamos.</strong><br><em>We’ll come down in a bit.</em></p>" +
    "<p class='mb-6'><strong>Ahorita no puedo, pero en un rato lo checo.</strong><br><em>I can’t right now, but I’ll check it in a bit.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>Oh, and you can also say <em>en un rato que + verb in subjunctive</em> to say you'll do something later, but only <em>when a certain condition is met:</em></p>" +

    "<p class='mb-4'><strong>Voy a leer el libro que me regalaste en un rato que tenga libre.</strong><br><em>I’ll read the book you gave me when I have some free time.</em></p>" +
    "<p class='mb-6'><strong>Hablamos en un rato que puedas estar solo.</strong><br><em>We’ll talk in a bit, when you have a moment alone.</em></p>",

  tone:
    "✅ Very common and neutral.\n\n" +
    "✅ Used across Latin America.\n\n" +
    "✅ Not as vague as <strong>ahorita</strong> or <strong>al rato</strong>.",

  examples: [
    {
      spanish: "Te marco en un rato, ¿va?",
      english: "I’ll call you in a bit, OK?"
    },
    {
      spanish: "En un rato que el bebé esté dormido, aprovecho para bañarme.",
      english: "I’ll have a shower when the baby’s asleep."
    },
    {
      spanish: "— ¿Vas a comer?\n— En un rato.",
      english: "— Are you gonna eat?\n— In a bit."
    }
  ],

  similarChunks:
    "<a href=\"/chunk/al-rato\" class=\"text-blue-700\"><strong>Al rato</strong></a>\n" +
    "Al ratito\n" +
    "Más tarde\n" +
    "Luego luego\n" +
    "<a href=\"/chunk/de-una-vez\" class=\"text-blue-700\"><strong>De una vez</strong></a>\n" +
    "En un ratito\n" +
    "En unos minutitos\n" +
    "En cuanto\n" +
    "En un rato que\n" +
    "En un momento",

  tags: [
    { label: "A2 (¡Vas bien!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "ya-era-hora",
  title: "Ya era hora",
  category: "time phrases",

  meaning:
    "This one’s both easy <strong>AND</strong> sneaky-hard!\n\n" +
    "So, you can use it as a standalone phrase when something finally happens that was <strong>LONGGGG</strong> overdue.\n\n" +
    "For example, I’m in charge of cleaning the bathroom at home and, well, let’s just say that I’m pretty good at putting it off. So when I finally get it done, I’m normally greeted with:\n" +
    "👉 <strong>¡Ya era hora!</strong> = <em>About time!</em>\n\n\n" +
    "Now for the ugly!\n\n" +
    "If you want to say that it was about time that someone <strong>DID</strong> something, you’re going to need to use the following structure:\n" +
    "👉 <strong>ya era hora + de que + imperfect subjunctive</strong>\n\n" +
    "<strong>Ya era hora de que limpiaras el baño.</strong>\n" +
    "<em>It was about time you cleaned the bathroom.</em>\n\n" +
    "<strong>Ya era hora de que hicieras tu tarea.</strong>\n" +
    "<em>It was about time you did your homework.</em>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Anytime someone FINALLY gets something done / arrives / replies / moves their butt:</p>" +

    "<p class='mb-4'><strong>¡Ya era hora de que llegaras!</strong><br><em>About time you showed up!</em></p>" +
    "<p class='mb-4'><strong>¿Ya terminaste? Ya era hora.</strong><br><em>Are you finished? Took you long enough.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>And it can be used to talk about positive things too:</p>" +

    "<p class='mb-4'><strong>¡Salió el sol! Ya era hora.</strong><br><em>The sun came out! About time.</em></p>" +
    "<p class='mb-6'><strong>Ya era hora de que te dieran ese ascenso.</strong><br><em>It was about time they gave you that promotion.</em></p>",

  tone:
    "✅ Often sarcastic (but not always!).\n\n" +
    "✅ Not super formal.\n\n" +
    "❌ Can sound rude if tone or context is off.",

  examples: [
    {
      spanish: "¡Mira quién llegó! Ya era hora.",
      english: "Look who finally showed up! Took you long enough."
    },
    {
      spanish: "Oye, ya era hora de que nos conociéramos, ¿no? (real-life example 🎯)",
      english: "It was about time we met, wasn't it?"
    },
    {
      spanish: "Ya era hora de que hicieran algo bien.",
      english: "About time they did something right."
    }
  ],

  similarChunks:
    "¡Al fin!\n" +
    "¡Ya te dignaste!\n" +
    "¡Por fin!\n" +
    "Finalmente\n" +
    "Hasta que se te hizo\n" +
    "Hasta que se nos hizo\n" +
    "¡Qué milagro!\n" +
    "¿Y ese milagro?",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "de-una-vez",
  title: "De una vez",
  category: "time phrases",

  meaning:
    "This Mexican workhorse basically means <strong>let's just do it NOW</strong>, whether it's to get something over with or to take advantage of the moment.\n\n" +
    "Carpe diem and all that!\n\n" +
    "So yeah, you can think of it as the opposite of <a href=\"/chunk/al-rato\" class=\"text-blue-700\"><strong>al rato</strong></a>… instead of putting things off, <strong>de una vez</strong> is all about taking immediate action! 💪\n\n" +
    "Its core meanings are:\n" +
    "👉 <strong>right now / while we’re at it</strong>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When you want something done sharpish (RIGHT NOW vibes!):</p>" +

    "<p class='mb-4'><strong>¡Hazlo de una vez!</strong><br><em>Just do it already!</em></p>" +
    "<p class='mb-4'><strong>Mejor si lo terminamos de una vez.</strong><br><em>Let’s just finish it now.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>When piggybacking on an opportunity (still NOW-focused):</p>" +

    "<p class='mb-4'><strong>Ya que estás aquí, de una vez firma esto.</strong><br><em>While I’ve got you here, sign this for me, too.</em></p>" +
    "<p class='mb-4'><strong>De una vez les aviso que no voy este fin de semana.</strong><br><em>I’m letting you all know right now that I’m not going this weekend.</em></p>" +
    "<p class='mb-6'><strong>¿Vas al súper? De una vez trae leche.</strong><br><em>Are you going to the store? Get some milk while you're at it.</em></p>",

  tone:
    "✅ Casual but also used in formal situations.\n\n" +
    "✅ <strong>VERY</strong> common in Mexico and much of Latin America.",

  examples: [
    {
      spanish: "Ya dile la verdad de una vez.",
      english: "Just tell her the truth already."
    },
    {
      spanish: "De una vez les aviso, ¿eh? (real-life example 🎯)",
      english: "I’m warning you ahead of time, alright?"
    },
    {
      spanish: "¿Nos vamos de una vez?",
      english: "Are you up for going now?"
    },
    {
      spanish: "De una vez mételo al refri.",
      english: "Bung it in the fridge while you’re at it."
    }
  ],

  similarChunks:
    "<a href=\"/chunk/de-una-buena-vez\" class=\"text-blue-700\"><strong>De una buena vez</strong></a>\n" +
    "<a href=\"/chunk/de-una\" class=\"text-blue-700\"><strong>De una</strong></a>\n" +
    "<a href=\"/chunk/luego-luego\" class=\"text-blue-700\"><strong>Luego luego</strong></a>\n" +
    "En cuanto sea posible\n" +
    "En cuanto puedas\n" +
    "En cuanto se pueda\n" +
    "De inmediato\n" +
    "Ya que estamos en eso\n" +
    "Ya que estás en eso\n" +
    "<a href=\"/chunk/pero-ya\" class=\"text-blue-700\"><strong>Pero ya</strong></a>\n" +
    "Ahora mismo",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "de-una",
  title: "De una",
  category: "time phrases",

  meaning:
    "This one's short, snappy, and full of <strong>let's-do-it-right-now</strong> energy! ⚡🚀\n\n" +
    "It basically means:\n" +
    "👉 <strong>Let's do it!</strong>\n" +
    "👉 <strong>Let's get to it!</strong>\n\n" +
    "Think of it like saying you're <strong>READY TO ROLL</strong>.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you're on board with a plan and ready to rumble:</p>" +

    "<p class='mb-4'><strong>— ¿Grabamos ahorita?<br>— Va, de una.</strong><br><em>— Wanna record right now?<br>— Yeah, let's get to it.</em></p>" +

    "<p class='mb-6'><strong>— ¿Quieres ir al súper?<br>— Pues sí, de una.</strong><br><em>— Do you wanna go to the supermarket?<br>— Sure, let's go right now.</em></p>",

  tone:
    "✅ Super casual and upbeat.\n\n" +
    "✅ Implies readiness and immediacy.\n\n" +
    "✅ Also common in Colombia and Argentina.",

  examples: [
    {
      spanish: "¡De una, wey!",
      english: "Let's do it, man!"
    },
    {
      spanish: "— ¿Quieres pasear al perro en la noche?\n— No, mejor de una, no vaya a ser que llueva.",
      english: "— Wanna walk the dog tonight?\n— Nah, let’s go now, in case it starts raining."
    }
  ],

  similarChunks:
    "Va\n" +
    "Arre\n" +
    "Jalo\n" +
    "Órale\n" +
    "Ándale\n" +
    "Ya estás\n" +
    "<a href=\"/chunk/pero-ya\" class=\"text-blue-700\"><strong>Pero ya</strong></a>\n",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "luego-luego",
  title: "Luego luego",
  category: "time phrases",

  meaning:
    "This one’s <strong>PURE MEXICAN GOLD</strong>. ✨\n\n" +
    "And it confused <strong>THE BEJEEZUS</strong> outta me when I first heard it!\n\n" +
    "Because it sounds redundant AF (<strong>then then</strong>??)...\n\n" +
    "But nope, that’s just Mexican Spanish doing its thing.\n\n" +
    "Here’s what it actually means:\n" +
    "👉 <strong>right away / immediately / straight away</strong>\n\n",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever something happens IMMEDIATELY! </p>" +

    "<p class='text-xl font-semibold mt-2 mb-4'>It’s often used for giving instructions or telling stories: </p>" +

    "<p class='mb-4'><strong>Si ves algo raro, me marcas luego luego.</strong><br><em>If you see anything weird, call me straight away.</em></p>" +

    "<p class='mb-6'><strong>Llegué y luego luego me ofrecieron una chela.</strong><br><em>They offered me a beer as soon as I arrived.</em></p>" +

    "<p class='mb-4'><strong>— ¿Y qué hiciste?<br>— Me salí luego luego.</strong><br><em>— And what did you do?<br>— I left right away.</em></p>" +

    "<p class='mb-6'><strong>— ¿Ya andas con Arturo?<br>— ¡Luego luego al chisme!</strong><br><em>— So… are you seeing Arturo now?<br>— Wow, straight to the gossip, huh?</em></p>",

  tone:
    "✅ <strong>VERY</strong> Mexican.\n\n" +
    "❌ <strong>NOT</strong> used this way in Spain or most of Latin America.",

  examples: [
    {
      spanish: "Luego luego se enojó.",
      english: "He literally got mad straight away."
    },
    {
      spanish: "— ¿Te contestó?\n— Sí, luego luego.",
      english: "— Did he reply?\n— Yeah, straight away."
    }
  ],

  similarChunks:
    "En chinga\n" +
    "De inmediato\n" +
    "Ahorita mismo\n" +
    "Patitas para qué las quiero\n" +
    "Ni tardo ni perezoso\n" +
    "En fá\n" +
    "En friega\n" +
    "En este mismo momento",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" },
    { label: "MUY informal 💀" }
  ],

  audioUrls: []
},

{
  slug: "dar-tiempo-de",
  title: "Dar tiempo de",
  category: "time phrases",

  meaning:
    "👉 <strong>to have time (to do something)</strong>\n\n" +
    "Wanna know if there's enough time to do something <strong>BEFORE</strong> doing something else?\n\n" +
    "Well, this is the chunk for you, ol' pal!\n\n" +
    "And yeah, as you can probably imagine, it's a <strong>SUPER</strong> useful one in everyday conversations!",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you're talking about squeezing something in before a deadline, event, etc.</p>" +

    "<p class='mb-4'><strong>No me dio tiempo de desayunar.</strong><br>" +
      "<em>I didn't have time to eat breakfast.</em></p>" +

    "<p class='mb-6'><strong>Nos dio tiempo de ver una peli antes de dormir.</strong><br>" +
      "<em>We had time to watch a movie before bed.</em></p>",

  tone:
    "✅ Everyday Mexican Spanish.\n\n" +
    "✅ Used all over Mexico.",

  examples: [
    {
      spanish: "Nos dio tiempo de pasear un rato por el centro.",
      english: "We had time to walk around downtown for a bit."
    },
    {
      spanish: "Me da tiempo perfecto de ir y venir. (real-life example 🎯)",
      english: "I've easily got time to go and come back."
    },
    {
      spanish: "Dame tiempo de analizarlo y te doy respuesta.",
      english: "Give me time to think it over, and I'll let you know."
    }
  ],

  similarChunks:
    "Tener tiempo de\n" +
    "Alcanzar el tiempo para",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "pero-ya",
  title: "Pero ya",
  category: "time phrases",

  meaning:
    "👉 <strong>...right now! / ...like now!</strong>\n\n" +
    "In Mexican Spanish, tagging <strong>pero ya</strong> onto a request is like saying: <strong>AND MAKE IT QUICK!!</strong>\n\n" +
    "It can sound playful, bossy, or dead serious depending on your tone of voice.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Just tack it to the end of a request (or command!) when you want something done ASAP:</p>" +

    "<p class='mb-4'><strong>Juan, ven para acá… pero ya.</strong><br>" +
      "<em>Juan, come over here… right now.</em></p>" +

    "<p class='mb-6'><strong>Pásame mi celular, pero ya.</strong><br>" +
      "<em>Give me my phone, like now.</em></p>",

  tone:
    "✅ Informal, everyday Mexican Spanish.\n\n" +
    "✅ Works in both friendly and urgent situations.\n\n" +
    "🚫 Not for polite/formal requests (would sound <strong>VERY</strong> rude!).",

  examples: [
    {
      spanish: "Ve a ver si ya llegó… ¡pero ya!",
      english: "Go check if it’s arrived… now!"
    },
    {
      spanish: "Carmelo. Oye, vente para acá, por favor. Te necesito. Ándale, pero ya. Bye. (real-life example 🎯)",
      english: "Carmelo. Hey, come over to my place, please. I need you. Hurry up already. Bye."
    },
    {
      spanish: "Tráeme una chela, pero ya.",
      english: "Bring me a beer, and make it quick."
    }
  ],

  similarChunks:
    "Pero ahorita mismo\n" +
    "Ahora mismo\n" +
    "Ándale pues\n" +
    "Ya apúrate\n" +
    "Ándale ya\n" +
    "Pero te estás tardando\n" +
    "<a href=\"/chunk/de-una-buena-vez\" class=\"text-blue-700\"><strong>De una buena vez</strong></a>\n" +
    "<a href=\"/chunk/de-una\" class=\"text-blue-700\"><strong>De una</strong></a>\n",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "de-una-buena-vez",
  title: "De una buena vez",
  category: "time phrases",

  meaning:
    "This one’s like <a href=\"/chunk/de-una-vez\" class=\"text-blue-700\"><strong>de una vez</strong></a>... but with extra oomph.\n\n" +
    "Yep, you’re not just saying <strong>let’s do it now</strong>, you’re saying:\n" +
    "👉 <strong>Do it NOW! Enough messing around!</strong>\n\n" +
    "So yeah, when you whip this one out, you’re usually fed up, impatient, or want things settled <strong>RIGHT NOW</strong>.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When you want something done RIGHT THIS MINUTE:</p>" +

    "<p class='mb-4'><strong>Ya dímelo de una buena vez.</strong><br>" +
      "<em>Just tell me already.</em></p>" +

    "<p class='mb-4'><strong>¡Hazlo de una buena vez y ya!</strong><br>" +
      "<em>Just do it now and be done with it!</em></p>" +

    "<p class='mb-6'><strong>¡Vete de una buena vez!</strong><br>" +
      "<em>Just leave already!</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>It can also be used like the English <em>once and for all</em>:</p>" +

    "<p class='mb-6'><strong>Yo digo que arreglen sus problemas de una buena vez.</strong><br>" +
      "<em>I think you should sort your problems out once and for all.</em></p>",

  tone:
    "✅ More intense than <strong>de una vez</strong>.\n\n" +
    "✅ Can sound frustrated, impatient, or emphatic.\n\n" +
    "✅ Common across Latin America.",

  examples: [
    {
      spanish: "Ya córtalo de una buena vez.",
      english: "Just break up with him once and for all."
    },
    {
      spanish: "...y te largas de una buena vez. (real-life example 🎯)",
      english: "...and get out of here already."
    }
  ],

  similarChunks:
    "<a href=\"/chunk/de-una-vez\" class=\"text-blue-700\"><strong>De una vez</strong></a>\n" +
    "Ya estuvo\n" +
    "Ya estuvo bueno\n" +
    "¿Ya, no?\n" +
    "Ya va siendo hora\n" +
    "A la de ya\n" +
    "Pero córrele",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "de-la-noche-a-la-manana",
  title: "De la noche a la mañana",
  category: "time phrases",

  meaning:
    "This one’s just a <strong>VERY</strong> common way to say something happened suddenly or very quickly, often with a big change involved:\n" +
    "👉 <strong>from one day to the next / overnight</strong>\n\n" +
    "So yeah, it’s not about literal night and morning, it’s about the speed of the change!\n\n" +
    "<strong>Se hizo famoso de la noche a la mañana.</strong><br><em>He became famous overnight.</em> (i.e., very quickly!)",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you’re talking about a very sudden change:</p>" +

    "<p class='mb-4'><strong>Nuestra vida cambió de la noche a la mañana.</strong><br>" +
      "<em>Our life changed overnight.</em></p>" +

    "<p class='mb-6'><strong>No lo van a terminar de la noche a la mañana.</strong><br>" +
      "<em>They’re not going to finish it just like that.</em></p>",

  tone:
    "✅ Neutral! Works in casual chats, storytelling, and even formal speech.\n\n" +
    "🚫 Doesn't usually refer to literal nighttime/morning transitions.",

  examples: [
    {
      spanish: "De la noche a la mañana nos subieron la renta al doble.",
      english: "They doubled our rent out of nowhere."
    },
    {
      spanish: "Pasó prácticamente de la noche a la mañana. (real-life example 🎯)",
      english: "It happened practically overnight."
    }
  ],

  similarChunks:
    "De un día para otro\n" +
    "En un abrir y cerrar de ojos\n" +
    "De trancazo\n" +
    "De madrazo\n" +
    "Sin previo aviso\n" +
    "Pim pum papas\n" +
    "En un santiamén\n" +
    "En friega\n" +
    "En chinga",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "apenas",
  title: "Apenas",
  category: "time phrases",

  meaning:
    "Ok, ok, I admit that this isn’t really a chunk in the traditional sense.\n\n" +
    "<strong>BUT</strong> it’s so ubiquitous and such an easy way to sound more Mexican that I just couldn’t resist including it.\n\n" +
    "Here’s what it means:\n" +
    "👉 <strong>just / just now / just recently / as soon as</strong>\n\n" +
    "So yeah, when Mexicans use <strong>apenas</strong> in a time context, they’re essentially saying something happened <strong>a moment ago</strong> or <strong>very recently</strong>.\n\n" +
    "<strong>Apenas llegué.</strong> = I just got here.\n\n\n" +
    "⚠️<strong>WARNING</strong>⚠️ Don’t confuse this one with <strong>apenas</strong> meaning <strong>barely/hardly</strong> (which is what most dictionaries say!). Yes, it’s the same word, but the meaning is different.\n\n" +
    "Oh, and you might also come across the diminutive form: <strong>apenitas</strong>.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to emphasize that something happened very recently:</p>" +

    "<p class='mb-4'><strong>Apenas voy saliendo de la oficina.</strong><br>" +
      "<em>I’m literally just leaving the office.</em></p>" +

    "<p class='mb-4'><strong>Apenas nos conocimos la semana pasada.</strong><br>" +
      "<em>We only met last week.</em></p>" +

    "<p class='mb-6'><strong>Apenitas llegué a la oficina, había un buen de tráfico.</strong><br>" +
    "<em>I literally just got to the office; there was a lot of traffic.</em></p>" +

    "<p class='mb-6'><strong>— ¿Cuándo fuiste a Cancún?<br>— Apenas.</strong><br>" +
      "<em>— When did you go to Cancun?<br>— Just recently.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>It can also mean <em>as soon as</em> or <em>just as</em> (in a VERY Mexican way!):</p>" +

    "<p class='mb-4'><strong>Apenas baje del coche, camino para allá.</strong><br>" +
      "<em>As soon as I get out of the car, I'll walk over there.</em></p>" +

    "<p class='mb-6'><strong>La alarma de sismo empezó a sonar apenas me metí a bañar.</strong><br>" +
      "<em>The earthquake alarm went off just as I was getting in the shower.</em></p>",

  tone:
    "✅ Works in casual or formal settings.\n\n" +
    "✅ It’s a <strong>REALLY</strong> easy way to sound more Mexican!\n\n" +
    "🚫 Not to be confused with other <strong>apenas</strong> meanings like <strong>barely</strong> or <strong>hardly</strong>!",

  examples: [
    {
      spanish: "Apenas llegamos y empezó a llover.",
      english: "We’d literally just arrived when it started raining."
    },
    {
      spanish: "Le llamé apenas.",
      english: "I called him recently."
    }
  ],

  similarChunks:
    "Recién\n" +
    "Hace poco\n" +
    "Hace ratito\n" +
    "Nomás\n" +
    "En cuanto\n" +
    "Apenitas\n" +
    "<a href=\"/chunk/ahorita-que\" class=\"text-blue-700\"><strong>Ahorita que</strong></a>\n",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "ahorita-que",
  title: "Ahorita que",
  category: "time phrases",

  meaning:
    "This one looks kinda tricky, doesn’t it?\n\n" +
    "But it actually just means:\n" +
    "👉 <strong>as soon as</strong>\n\n" +
    "So yeah, it’s a great way to talk about doing something immediately after something else.\n\n" +
    "Which, by the way, is why it often takes the <strong>subjunctive</strong>: you’re referring to a future event that may or may not happen!\n\n" +
    "<strong>Ahorita que llegues, te explico.</strong><br>As soon as you arrive, I’ll explain.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to say you’ll do something the moment another thing happens:</p>" +

    "<p class='mb-4'><strong>Ahorita que termines, nos vamos.</strong><br><em>As soon as you finish, we’ll head out.</em></p>" +

    "<p class='mb-6'><strong>Ahorita que salga el sol, nos echamos un cafecito.</strong><br><em>As soon as the sun comes out, we’ll have a coffee.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-6 mb-4'>Oh, and it can also be used like <em>now that</em> (no subjunctive!):</p>" +

    "<p class='mb-4'><strong>Ahorita que lo pienso, no está tan difícil.</strong><br><em>Now that I think about it, it's not that hard.</em></p>" +

    "<p class='mb-6'><strong>Ahorita que me cuentas eso, no puedo evitar recordar lo que pasó ayer.</strong><br><em>Now that you mention it, I can’t help remembering what happened yesterday.</em></p>",

  tone:
    "✅ Everyday Mexican Spanish.\n\n" +
    "✅ Works in casual or semi-formal speech.\n\n" +
    "🚫 <strong>Ahorita</strong> here doesn’t mean immediately this second.",

  examples: [
    {
      spanish: "Ahorita que veas la foto, vas a entender.",
      english: "As soon as you see the photo, you’ll understand."
    },
    {
      spanish: "Ahorita que me paguen, te invito a comer.",
      english: "As soon as I get paid, I’ll take you out to eat."
    }
  ],

  similarChunks:
    "En cuanto\n" +
    "Tan pronto como\n" +
    "Luego luego que\n" +
    "Apenas + subjunctive\n" +
    "Nomás + subjunctive",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "a-cada-rato",
  title: "A cada rato",
  category: "time phrases",

  meaning:
    "👉 <strong>all the time / constantly</strong>\n\n" +
    "<strong>A cada rato</strong> is basically the go-to way to say that something happens over and over again, sometimes to the point of being annoying.\n\n" +
    "And what’s the deal with the <strong>a</strong>?\n\n" +
    "Well, in practice, <strong>cada rato</strong> and <strong>a cada rato</strong> mean pretty much the same thing, but <strong>a cada rato</strong> sounds a tad more rhythmic or emphatic.\n\n" +
    "It’s often used when you want to stress that something is constant and repetitive.\n\n\n" +
    "💡Since <strong>rato</strong> means <strong>a short while</strong>, we're talking about stuff that happens every few minutes or hours, <strong>NOT</strong> daily.\n\n" +
    "Ah, and if you want even more emphasis, try <strong>a cada ratito</strong>!\n\n" +
    "The diminutive makes it sound like it's happening every two seconds, lol.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to emphasize constant repetition:</p>" +

    "<p class='mb-4'><strong>Checa el teléfono a cada rato.</strong><br><em>He checks his phone all the time.</em></p>" +

    "<p class='mb-4'><strong>El bebé se despierta a cada rato en la noche.</strong><br><em>The baby wakes up throughout the night.</em></p>" +

    "<p class='mb-6'><strong>El jefe está pasando a cada rato.</strong><br><em>The boss is coming around every two minutes.</em></p>",

  tone:
    "✅ Informal, everyday Mexican Spanish.\n\n" +
    "✅ Sometimes said with a slightly exasperated tone.",

  examples: [
    {
      spanish: "A cada rato me pregunta lo mismo.",
      english: "He keeps asking me the same thing over and over."
    },
    {
      spanish: "Sí, pero no cuando los sueltas (chistes) a cada rato… (real-life example 🎯)",
      english: "Yeah, but not when you drop them (jokes) every five minutes..."
    },
    {
      spanish: "Después de diez minutos en el horno, tienes que checar las galletas a cada rato o si no se queman.",
      english: "After ten minutes in the oven, you have to keep checking the cookies or they’ll burn."
    }
  ],

  similarChunks:
    "Cada rato\n" +
    "Cada ratito\n" +
    "A cada momento\n" +
    "Cada minuto\n" +
    "Todo el tiempo\n" +
    "Seguido\n" +
    "Una y otra vez",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "hazte-a-la-idea-de-que",
  title: "Hazte a la idea de que",
  category: "sentence starters",

  meaning:
    "Time for a bit of drama!!\n\n" +
    "Well, this chunk is kinda dramatic, at least.\n\n" +
    "Here’s what it means:\n" +
    "👉 <strong>Hazte a la idea de que…</strong> = <em>Get it into your head that… / Accept that…</em>\n\n\n" +
    "💡 It’s normally used when you want to prepare someone for a new reality, whether good, bad, or just inevitable.",

  explanation:
    "<p class='mb-4'>Whenever you need to prepare someone mentally for something:<br><br>" +
    "<strong>Hazte a la idea de que vamos a llegar tardísimo.</strong><br>" +
    "<em>You’d better get it into your head that we’re gonna be super late.</em></p>" +

    "<p class='mb-4'><strong>Hazte a la idea de que él no va a cambiar.</strong><br>" +
    "<em>Just accept that he’s not gonna change.</em></p>" +

    "<p class='mb-6'><strong>Hazte a la idea de que va a estar carísimo.</strong><br>" +
    "<em>Just accept that it’s gonna be crazy expensive.</em></p>",

  tone:
    "✅ Emphatic and a bit dramatic.\n\n" +
    "✅ Can sound caring (giving a heads-up) or scolding (tough love), depending on delivery.",

  examples: [
    {
      spanish: "Hazte a la idea de que vamos a esperar horas.",
      english: "Just accept we’re gonna be waiting for hours."
    },
    {
      spanish: "Hazte a la idea de que tu hermano va a vivir con nosotros un rato.",
      english: "Just accept that your brother’s gonna be living with us for a while."
    }
  ],

  similarChunks:
    "<strong>Más te vale aceptar que</strong>\n" +
    "<strong>Resígnate a que</strong>",

  tags: [
    { label: "C1 (¡Eres un chingón!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "lo-bueno-es-que",
  title: "Lo bueno es que",
  category: "sentence starters",

  meaning:
    "This is just a native-like, everyday way to say:\n" +
    "👉 <strong>The good thing is that… / At least…</strong>\n\n" +
    "Yep, it’s basically how you spin a situation to point out the silver lining.\n\n\n" +
    "💡 <strong>Lo bueno es que</strong> is standard Spanish, but <strong>VERY</strong> (and I mean <strong>VERY</strong>!) common in Mexico.",

  explanation:
  "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to highlight the positive side of something (it’s a glass-half-full kind of chunk):</p>" +
    "<strong>Llegamos tarde, pero lo bueno es que no había empezado la película.</strong><br>" +
    "<em>We got there late, but fortunately, the movie hadn’t started yet.</em></p>" +

    "<p class='mb-4'><strong>Perdimos 5-0... lo bueno es que no fueron 10.</strong><br>" +
    "<em>We lost 5-0... at least it wasn't 10.</em></p>" +

    "<p class='mb-6'><strong>Lo bueno es que mañana es viernes.</strong><br>" +
    "<em>Thank God tomorrow's Friday.</em></p>",

  tone:
    "✅ Standard Spanish.\n\n" +
    "✅ Totally neutral!\n\n" +
    "✅ Has a rather upbeat “look on the bright side” vibe.",

  examples: [
    {
      spanish: "Pues, lo bueno es que jugamos bien.",
      english: "Well, at least we played well."
    },
    {
      spanish: "Lo bueno es que ya salimos del tráfico.",
      english: "At least we’re finally out of the traffic."
    },
    {
      spanish: "Lo bueno es que aceptan tarjeta.",
      english: "At least they take card."
    }
  ],

  similarChunks:
    "<strong>Al menos</strong>\n" +
    "<strong>Por lo menos</strong>\n" +
    "<strong>Lo malo es que</strong>\n" +
    "<strong>Cuando menos</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "seamos-sinceros",
  title: "Seamos sinceros",
  category: "sentence starters",

  meaning:
    "This chunk is the standard way to preface so-called “truth bombs”.\n\n" +
    "It just means:\n" +
    "👉 <strong>let’s be honest / let’s be real</strong>\n\n" +
    "So yeah, it’s your go-to lead-in when you’re about to say something blunt, obvious, or a little uncomfortable.\n\n\n" +
    "💡 There are loads of colloquial alternatives for when you’re with your pals (<strong>la neta</strong> y <strong>al chile</strong>), but this one works in <strong>ALL</strong> situations.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to serve some blunt truth:</p>" +
    "<strong>Seamos sinceros, nadie entendió esas instrucciones.</strong><br>" +
    "<em>Let’s be honest, nobody understood those instructions.</em></p>" +

    "<p class='mb-4'><strong>Seamos sinceros, esa serie ya no está tan buena.</strong><br>" +
    "<em>Let’s be real, that show just isn’t that good anymore.</em></p>" +

    "<p class='mb-6'><strong>Seamos sinceros, no vas a ir al gym mañana.</strong><br>" +
    "<em>Let’s be honest, you’re not going to the gym tomorrow.</em></p>",

  tone:
    "✅ Standard Spanish.\n\n" +
    "✅ Neutral, but can be blunt or teasing depending on context.\n\n" +
    "✅ Perfect chunk for softening a truth bomb.",

  examples: [
    {
      spanish: "Seamos sinceros, fue un error.",
      english: "Let’s be honest, it was a mistake."
    },
    {
      spanish: "Seamos sinceros, todos queremos vacaciones ya.",
      english: "Let’s be honest, we all want a vacation at this point."
    }
  ],

  similarChunks:
    "<strong>La neta</strong>\n" +
    "<strong>Al chile</strong>\n" +
    "<strong>La verdad</strong>\n" +
    "<strong>Siendo honestos</strong>\n" +
    "<strong>Siendo sinceros</strong>\n" +
    "<strong>Para ser sincero</strong>\n" +
    "<strong>Si te soy sincero</strong>\n" +
    "<strong>Si te soy franco</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "segun-yo",
  title: "Según yo",
  category: "sentence starters",

  meaning:
    "This one’s another <strong>SUPER CHUNK</strong> 🎉\n\n" +
    "Here’s what it means:\n" +
    "👉 <strong>as far as I know / I could’ve sworn</strong>\n\n" +
    "But there’s a twist…\n\n" +
    "It often carries a playful, self-deprecating tone… like you’re admitting you’re not 100% sure.\n\n\n" +
    "💡 Según + pronoun (yo, tú, él)</strong> sounds more uncertain, while <strong>según + noun</strong> is generally more authoritative.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to give your version of reality, but at the same time leave the door open to being wrong:</p>" +
    "<strong>Según yo, hoy no había clases.</strong><br>" +
    "<em>I could’ve sworn there weren’t any classes today.</em></p>" +

    "<p class='mb-4'><strong>Según yo, la película empezaba a las ocho.</strong><br>" +
    "<em>I thought the movie started at eight.</em></p>" +

    "<p class='mb-6'><strong>Según yo, no era tan caro.</strong><br>" +
    "<em>I didn’t think it was that expensive.</em></p>",

  tone:
    "✅ Mexicans <strong>LOVE</strong> this one.\n\n" +
    "✅ Great for everyday convos, not for formal writing.",

  examples: [
    {
      spanish: "Según yo, era por la otra calle.",
      english: "I could’ve sworn it was down the other street."
    },
    {
      spanish: "Según yo, no estaba tan lejos.",
      english: "I didn’t think it was that far."
    }
  ],

  similarChunks:
    "<a href=\"/chunk/se-me-hace\" class=\"text-blue-700\"><strong>Se me hace que</strong></a>\n" +
    "<strong>Creo que</strong>\n" +
    "<strong>Como que</strong>\n" +
    "<strong>Si no me equivoco</strong>\n" +
    "<strong>A menos de que esté equivocado</strong>\n" +
    "<strong>A menos de que me equivoque</strong>\n" +
    "<strong>Según sé</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "se-me-hace",
  title: "Se me hace",
  category: "sentence starters",

  meaning:
    "This one’s as Mexican as Mexican can be. 😉\n\n" +
    "It basically just means:\n" +
    "👉 <strong>I get the feeling... / I think… / etc.</strong> (but with a very Mexican twist!)\n\n" +
    "So yeah, it’s what you say when you’re sharing your thoughts or expressing a gut feeling.\n\n\n" +
    "💡 Think of it as the colloquial Mexican version of <strong>me parece</strong> or <strong>creo que</strong>, and you’ll be gold.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you’re giving a casual opinion:</p>" +
    "<strong>Se me hace que va a llover.</strong><br>" +
    "<em>I think it’s gonna rain.</em></p>" +

    "<p class='mb-4'><strong>Se me hace que ya se enojó.</strong><br>" +
    "<em>I get the feeling he’s mad.</em></p>" +

    "<p class='mb-6'><strong>Se me hace que no va a venir.</strong><br>" +
    "<em>I don’t think he’s coming.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-2 mb-4'>Oh, and you can also use it when talking about how hard, easy, or strange someone FINDS something:</p>" +

    "<p class='mb-6'><strong>— ¿Qué es lo que se te hace más difícil de trabajar a esta hora?</strong><br>" +
    "<strong>— Pues, ¿qué crees que no se me hace difícil?</strong><br>" +
    "<em>— What do you find hardest about working at this time of day?</em><br>" +
    "<em>— Well, you know what? I don’t actually find it difficult.</em></p>",

  tone:
    "✅ Super Mexican.\n\n" +
    "✅ Informal, everyday Spanish.\n\n" +
    "✅ Perfect for gut feelings, suspicions, or casual guesses.",

  examples: [
    {
      spanish: "Se me hace que aquí hay gato encerrado.",
      english: "I think something fishy’s going on here."
    },
    {
      spanish: "Se me hace que andaba de mañosa la prima, ¿no? (real-life example 🎯)",
      english: "I get the feeling our cousin was up to no good, don’t you think?"
    }
  ],

  similarChunks:
    "<strong>Creo que</strong>\n" +
    "<strong>Me parece que</strong>\n" +
    "<strong>Me late que</strong>\n" +
    "<strong>Tengo el presentimiento de que</strong>\n" +
    "<strong>No creo que</strong>\n" +
    "<strong>Tengo la sospecha de que</strong>\n" +
    "<strong>Me cae que</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "lo-que-pasa-es-que",
  title: "Lo que pasa es que",
  category: "sentence starters",

  meaning:
    "This one’s useful when you need to explain, justify, or soften what you’re about to say.\n\n" +
    "It often translates well to one of either:\n" +
    "👉 <strong>The thing is… / It’s just that…</strong>\n\n\n" +
    "💡 Yep, it’s just the longer version of the ever-popular <strong>es que</strong>!\n\n" +
    "And you’re actually gonna hear <strong>es que</strong> a lot more in the wild, as it’s the one native speaker’s generally reach for when prefixing quick excuses.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you need to explain yourself, give a reason, or add context:</p>" +
    "<strong>Lo que pasa es que llegué tarde porque no había metro.</strong><br>" +
    "<em>The thing is, I was late because the subway wasn’t running.</em></p>" +

    "<p class='mb-6'><strong>Lo que pasa es que me dio pena decirte.</strong><br>" +
    "<em>It’s just that I was embarrassed to tell you.</em></p>",

  tone:
    "✅ Standard Spanish.\n\n" +
    "✅ Great for softening excuses or explanations.",

  examples: [
    {
      spanish: "Lo que pasa es que ya tenía otros planes.",
      english: "It’s just that I already had other plans."
    },
    {
      spanish: "Lo que pasa es que no entendí bien.",
      english: "It’s just that I didn’t really understand."
    }
  ],

  similarChunks:
    "<a href=\"/chunk/es-que\" class=\"text-blue-700\"><strong>Es que</strong></a>\n" +
    "<strong>La cosa es que</strong>\n" +
    "<strong>La verdad es que</strong>\n" +
    "<a href=\"/chunk/fijate-que\" class=\"text-blue-700\"><strong>Fíjate que</strong></a>\n" +
    "<strong>Pues porque</strong>",

  tags: [
    { label: "A2 (¡Vas bien!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "al-parecer",
  title: "Al parecer",
  category: "sentence starters",

  meaning:
    "This super common chunk just means:\n" +
    "👉 <strong>Apparently… / Looks like…</strong>\n\n" +
    "It’s how you introduce info that’s been extrapolated from appearances, rumors, or something you’ve heard (i.e., you don’t know if it’s 100% true!).",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you’re reporting something you’ve heard or you’re giving your impression of a situation:</p>" +
    "<strong>Al parecer, va a llover mañana.</strong><br>" +
    "<em>Apparently, it’s going to rain tomorrow.</em></p>" +

    "<p class='mb-4'><strong>Se canceló, al parecer.</strong><br>" +
    "<em>Looks like it’s been cancelled.</em></p>" +

    "<p class='mb-6'><strong>Al parecer, el profe está de malas hoy.</strong><br>" +
    "<em>Looks like teacher’s in a bad mood today.</em></p>",

  tone:
    "✅ Neutral.\n\n" +
    "✅ Works in casual convos <strong>AND</strong> formal contexts.\n\n" +
    "✅ Great for sounding diplomatic… you’re not taking full responsibility for the info. 😉",

  examples: [
    {
      spanish: "Al parecer, hubo un accidente en la carretera.",
      english: "Apparently, there was an accident on the highway."
    },
    {
      spanish: "Al parecer, sí vienen a la fiesta.",
      english: "Looks like they ARE coming to the party."
    }
  ],

  similarChunks:
    "<strong>Parece que</strong>\n" +
    "<strong>Según</strong>\n" +
    "<strong>Por lo visto</strong>\n" +
    "<strong>Tal parece que</strong>\n" +
    "<strong>Pareciera que</strong>\n" +
    "<strong>Escuché que</strong>\n" +
    "<strong>Según sé</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "te-voy-a-ser-sincero",
  title: "Te voy a ser sincero",
  category: "sentence starters",

  meaning:
    "This is what you need to whip out when you’re gonna speak to someone <strong>al tiro</strong> or <strong>al chile</strong> (AKA you’re gonna speak to them <strong>FRANKLY</strong>).\n\n" +
    "👉 <strong>Te voy a ser sincero</strong> = <em>I’m gonna be honest with you</em>\n\n\n" +
    "💡 It’s standard Spanish, but in Mexico you’ll hear it <strong>A LOT</strong> in everyday convos!",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you’re about to give your honest take on something and don’t want to sound too slangy/casual:</p>" +
    "<strong>Te voy a ser sincero, no me gustó la comida.</strong><br>" +
    "<em>I’ll be honest with you, I didn’t like the food.</em></p>" +

    "<p class='mb-6'><strong>Te voy a ser sincero, no estudié nada.</strong><br>" +
    "<em>I’ll be honest, I didn’t study at all.</em></p>",

  tone:
    "✅ Neutral.\n\n" +
    "✅ Works in casual or serious contexts.",

  examples: [
    {
      spanish: "Te voy a ser sincero… no entendí nada.",
      english: "I’m gonna be honest with you… I didn’t understand anything."
    }
  ],

  similarChunks:
    "<strong>La verdad</strong>\n" +
    "<strong>Siendo sincero</strong>\n" +
    "<a href=\"/chunk/seamos-sinceros\" class=\"text-blue-700\"><strong>Seamos sinceros</strong></a>\n" +
    "<strong>Te voy a decir una cosa</strong>\n" +
    "<strong>Al tiro</strong>\n" +
    "<strong>Al chile</strong>\n" +
    "<strong>Para ser franco</strong>\n" +
    "<strong>Si te soy sincero</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "mejor",
  title: "Mejor",
  category: "sentence starters",

  meaning:
    "Yes, yes, I know <strong>mejor</strong> means <strong>better</strong>.\n\n" +
    "But it also doubles as a surprisingly useful sentence starter!\n\n" +
    "Yep, I’m not leading you up the garden path! Promise!\n\n" +
    "Here’s what it means:\n" +
    "👉 <strong>Actually, let’s… / Let’s just… / Why not (…) instead?</strong>\n\n" +
    "So yeah, it’s basically just a way of smoothly suggesting a different option.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you’re switching gears, suggesting an alternative, or proposing a better idea:</p>" +
    "<strong>Mejor vamos mañana.</strong><br>" +
    "<em>Actually, let’s go tomorrow.</em></p>" +

    "<p class='mb-6'><strong>Mejor dile la verdad.</strong><br>" +
    "<em>Why not just tell him the truth?</em></p>",

  tone:
    "✅ Standard Spanish.\n\n" +
    "✅ Softens what could otherwise sound like a blunt order.",

  examples: [
    {
      spanish: "No, mejor pedimos una pizza.",
      english: "Nah, let’s just order a pizza."
    },
    {
      spanish: "Mejor vamos a escuchar otra. (real-life example 🎯)",
      english: "Let’s just listen to a different one."
    }
  ],

  similarChunks:
    "<strong>Mejor no</strong>\n" +
    "<strong>Mejor otro día</strong>\n" +
    "<strong>¿Y si mejor…?</strong>\n" +
    "<strong>¿No te late…?</strong>\n" +
    "<strong>¿No prefieres…?</strong>",

  tags: [
    { label: "A2 (¡Vas bien!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "me-atreveria-a-decir-que",
  title: "Me atrevería a decir que",
  category: "sentence starters",

  meaning:
    "This one does what it says on the tin!\n\n" +
    "It just means:\n" +
    "👉 <strong>I’d dare say that… / I’d go as far as to say that…</strong>\n\n" +
    "It’s a softer, slightly dramatic or suspenseful way of giving your opinion… like you know you’re pushing it a bit, but you’re confident enough to say it anyway!",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to state your opinion boldly (but still politely):</p>" +
    "<strong>Me atrevería a decir que es la mejor taquería de la ciudad.</strong><br>" +
    "<em>I’d dare say this is the best taco spot in town.</em></p>" +

    "<p class='mb-6'><strong>Me atrevería a decir que todos pensamos lo mismo.</strong><br>" +
    "<em>I’d go as far as to say we’re all thinking the same thing.</em></p>",

  tone:
    "✅ Slightly formal-sounding.\n\n" +
    "✅ Great for strong opinions without sounding aggressive.\n\n" +
    "✅ Polite, but with a confident “spicy take” vibe. 🌶️",

  examples: [
    {
      spanish: "Me atrevería a decir que ya es hora de un cambio.",
      english: "I think it’s time for a change."
    },
    {
      spanish: "Me atrevería a decir que fue su mejor partido.",
      english: "I’d dare say it was his best game."
    }
  ],

  similarChunks:
    "<strong>Diría que</strong>\n" +
    "<strong>Hasta diría que</strong>\n" +
    "<strong>Hasta creo que</strong>\n" +
    "<strong>Me parece que</strong>",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "de-haber-sabido",
  title: "De haber sabido",
  category: "sentence starters",

  meaning:
    "Right, so this one’s just a natural way of saying:\n" +
    "👉 <strong>If I'd known...</strong>\n\n" +
    "No need to dig around for complex grammar rules, just whip this chunk out and you’ll sound 100% legit.\n\n\n" +
    "💡It’s often followed by <strong>hubiera + past participle</strong> OR <strong>que + verb in imperfect</strong>.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you regret not knowing something earlier:</p>" +
    "<strong>De haber sabido, ni hubiera venido.</strong><br>" +
    "<em>If I’d known, I wouldn’t even have come.</em></p>" +

    "<p class='mb-6'><strong>De haber sabido que venías, hubiera preparado algo de comer.</strong><br>" +
    "<em>If I’d known you were coming, I would’ve made some food.</em></p>",

  tone:
    "✅ Standard Spanish, not slangy.\n\n" +
    "✅ Works in casual convos <strong>AND</strong> formal writing.\n\n" +
    "✅ Carries a slightly regretful/nostalgic vibe.",

  examples: [
    {
      spanish: "De haber sabido, te hubiera ayudado con las cajas.",
      english: "If I’d known, I would’ve helped you with the boxes."
    },
    {
      spanish: "De haber sabido que te caía mal, no lo hubiera invitado.",
      english: "If I’d known you didn’t like him, I wouldn’t have invited him."
    }
  ],

  similarChunks:
    "<strong>Si hubiera sabido</strong>\n" +
    "<strong>Si me hubieras dicho</strong>\n" +
    "<strong>Si tan solo</strong>",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "deja-tu",
  title: "Deja tú",
  category: "sentence starters",

  meaning:
    "OK, this is one of my absolute favorites.\n\n" +
    "And I’ve never heard or seen it being taught anywhere!\n\n" +
    "But Mexicans use it <strong>ALL. THE. FRIGGING. TIME</strong> in the wild.\n\n" +
    "Here’s what it means:\n" +
    "👉 <strong>Forget about that…</strong>\n" +
    "👉 <strong>Never mind that…</strong>\n" +
    "👉 <strong>That’s nothing compared to this…</strong>\n\n" +
    "So yeah, it’s a great way to dismiss a point before throwing down something bigger, juicier, or more dramatic. 🍉",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When you want to redirect the convo and say <em>“pff, that’s not even the half of it…”:</em></p>" +
    "<strong>Deja tú el tráfico, ¡ya se nos está acabando la gas!</strong><br>" +
    "<em>Forget the traffic, we’re about to run out of gas!</em></p>" +

    "<p class='mb-4'><strong>Deja tú su ubicación, ¡ni tiene internet!</strong><br>" +
    "<em>Never mind its location, it doesn’t even have internet!</em></p>" +

    "<p class='mb-6'><strong>Deja tú que esté caro, ¡ni lo venden aquí!</strong><br>" +
    "<em>Forget about it being expensive, they don’t even sell it here!</em></p>",

  tone:
    "✅ Ultra Mexican.\n\n" +
    "✅ Great for everyday convos.",

  examples: [
    {
      spanish: "Deja tú que llueva, ¡ya se fue la luz en toda la colonia!",
      english: "Forget about the rain, the whole neighborhood’s out of power"
    }
  ],

  similarChunks:
    "<a href=\"/chunk/deja-de-noun\" class=\"text-blue-700\"><strong>Deja de + noun</strong></a>\n" +
    "<strong>¡Deja de eso!</strong>\n" +
    "<strong>Y eso no es todo</strong>\n" +
    "<strong>¡Eso es lo de menos!</strong>",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Boomers 👶" },
    { label: "Gen X 🎸" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "deja-de-noun",
  title: "Deja de + noun",
  category: "sentence starters",

  meaning:
    "This one’s very similar to the <a href=\"/chunk/deja-tu\" class=\"text-blue-700\"><strong>deja tú</strong></a> structure (check it out if you haven’t already!).\n\n" +
    "And, in my humble opinion, it’s another absolute gem 💎\n\n" +
    "It just means:\n" +
    "👉 <strong>Forget about + noun</strong>\n\n" +
    "👉 <strong>Never mind + noun</strong>\n\n" +
    "So yeah, it’s used to dismiss one topic and shift the focus to something more important.\n\n" +
    "The crux.\n\n" +
    "El meollo.\n\n" +
    "I think you probably get the gist! 😉",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>When you wanna say that X is more important than Y:</p>" +
    "<strong>Deja de los vecinos, ¿ya viste las noticias?</strong><br>" +
    "<em>Forget the neighbors, have you seen the news?</em></p>" +

    "<p class='mb-6'><strong>Deja del dinero, wey, el problema es el tiempo.</strong><br>" +
    "<em>Never mind the money, dude, the problem is the time.</em></p>",

  tone:
    "✅ Mexican AF.\n\n" +
    "✅ Great for informal convos.",

  examples: [
    {
      spanish: "Deja de los tacos, ¿ya probaste las quesadillas?",
      english: "Forget the tacos, have you tried the quesadillas?"
    },
    {
      spanish: "Deja del perrito, ¡el problema es el esposo!",
      english: "Forget about the dog, the real problem is the husband!"
    }
  ],

  similarChunks:
    "<a href=\"/chunk/deja-tu\" class=\"text-blue-700\"><strong>Deja tú</strong></a>\n" +
    "<strong>¡Deja de eso!</strong>\n" +
    "<strong>Olvídate de</strong>\n" +
    "<strong>Ni decir de</strong>\n" +
    "<strong>Ni qué decir de</strong>",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Boomers 👶" },
    { label: "Gen X 🎸" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "al-cabo-que",
  title: "Al cabo que",
  category: "sentence starters",

  meaning:
    "Woah! Another <strong>EPIC</strong> Mexican sentence starter.\n\n" +
    "I’m really spoiling you, jiji. 😉\n\n" +
    "Here’s what it means:\n" +
    "👉 <strong>It doesn’t matter… / Anyway… / Whatever…</strong>\n\n" +
    "Come again??\n\n" +
    "Yeah, unfortunately, it doesn’t have a like-for-like English translation.\n\n" +
    "But I want you to visualize something for me.\n\n" +
    "Sour grapes… 🍇\n\n" +
    "You see, the nuance here is that you’re brushing something off, minimizing it, or pretending you didn’t care in the first place.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to downplay a situation, excuse yourself, or add a <em>“meh, who cares”</em> tone:</p>" +
    "<strong>Al cabo que ni quería ir.</strong><br>" +
    "<em>It doesn’t matter; it’s not like I even wanted to go.</em></p>" +

    "<p class='mb-4'><strong>No me invitaron, pero al cabo que ni tenía ganas.</strong><br>" +
    "<em>They didn’t invite me, but it’s not like I wanted to go anyway.</em></p>" +

    "<p class='mb-6'><strong>Al cabo que ya estaba cansado.</strong><br>" +
    "<em>I mean, I was too tired anyway.</em></p>",

  tone:
    "✅ Super Mexican.\n\n" +
    "✅ Informal but common.\n\n" +
    "✅ Often playful or sarcastic.",

  examples: [
    {
      spanish: "Al cabo que ni me gustaba.",
      english: "Whatever, I didn’t even like it anyway."
    },
    {
      spanish: "Se acabó el postre, pero no importa, al cabo que ya estoy lleno.",
      english: "The dessert’s gone, but whatever, I’m already full."
    }
  ],

  similarChunks:
    "<strong>De todas formas</strong>\n" +
    "<strong>Total que</strong>\n" +
    "<strong>Al fin que</strong>\n" +
    "<strong>De cualquier forma</strong>\n" +
    "<strong>¿Y qué?</strong>",

  tags: [
    { label: "C1 (¡Eres un chingón!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "siento-que",
  title: "Siento que",
  category: "sentence starters",

  meaning:
    "This one’s simple but effective.\n\n" +
    "And who doesn’t like simple and effective chunks!\n\n" +
    "Here’s what it means:\n" +
    "👉 <strong>I feel like…</strong>\n" +
    "👉 <strong>I think…</strong>\n" +
    "👉 <strong>I get the feeling that…</strong>\n\n" +
    "So yeah, you can just think of it as a softer, hedgier version of creo que.\n\n\n" +
    "💡 <strong>Siento que</strong> is <strong>VERY</strong> useful, but use <a href=\"/chunk/se-me-hace\" class=\"text-blue-700\"><strong>se me hace que</strong></a> if you wanna sound like you have an agave farm in Jalisco (i.e., <strong>VERY</strong> Mexican).",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you’re giving an opinion, but you’re not 100% sure:</p>" +
    "<strong>Siento que va a llover.</strong><br>" +
    "<em>I feel like it’s gonna rain.</em></p>" +

    "<p class='mb-4'><strong>Siento que me odia la maestra.</strong><br>" +
    "<em>I get the feeling the teacher hates me.</em></p>" +

    "<p class='mb-6'><strong>Siento que esta serie está sobrevalorada.</strong><br>" +
    "<em>I think this show is overrated.</em></p>",

  tone:
    "✅ Super common in Mexico.\n\n" +
    "✅ Fine to use in literally any situation.\n\n" +
    "✅ Conveys sincerity.",

  examples: [
    {
      spanish: "Siento que ya no me quiere.",
      english: "I feel like he doesn’t love me anymore."
    },
    {
      spanish: "Siento que necesito vacaciones urgentes.",
      english: "I’m in desperate need of a vacation."
    }
  ],

  similarChunks:
    "<a href=\"/chunk/se-me-hace\" class=\"text-blue-700\"><strong>se me hace que</strong></a>\n" +
    "<strong>Me late que</strong>\n" +
    "<strong>Creo que</strong>\n" +
    "<strong>Me da la impresión de que</strong>\n" +
    "<strong>Pienso que</strong>\n" +
    "<strong>Me da la sensación de</strong>",

  tags: [
    { label: "A2 (¡Vas bien!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "si-mal-no-recuerdo",
  title: "Si mal no recuerdo",
  category: "sentence starters",

  meaning:
    "Another super useful one! I honestly feel like these sentence starter chunks are gonna revolutionize your Spanish. 😁\n\n" +
    "In all honesty, they revolutionized mine!\n\n" +
    "Anyway, this lil’ beauty normally translates well to one of either:\n" +
    "👉 <strong>If I remember correctly</strong>\n" +
    "👉 <strong>If I’m not mistaken</strong>\n" +
    "👉 <strong>I’m pretty sure</strong>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you’re trying to recall something from memory (but aren’t 100% sure):</p>" +
    "<strong>Si mal no recuerdo, la junta es a las 10.</strong><br>" +
    "<em>If I remember correctly, the meeting’s at 10.</em></p>" +

    "<p class='mb-4'><strong>Ese lugar ya lo cerraron, si mal no recuerdo.</strong><br>" +
    "<em>I’m pretty sure that place closed down already.</em></p>" +

    "<p class='mb-6'><strong>Si mal no recuerdo, fue en Oaxaca donde lo conocí.</strong><br>" +
    "<em>I’m pretty sure I met him in Oaxaca.</em></p>",

  tone:
    "✅ Works in casual convos.\n\n" +
    "✅ Softer than stating a fact outright (adds that polite hedge).\n\n" +
    "✅ Not appropriate for formal writing.",

  examples: [
    {
      spanish: "Si mal no recuerdo, la última vez que viniste fue en diciembre.",
      english: "I’m pretty sure you came in December last time."
    },
    {
      spanish: "El profe ya había explicado eso, si mal no recuerdo.",
      english: "The teacher had already explained that, if I’m remembering right."
    }
  ],

  similarChunks:
    "<strong>Si no me equivoco</strong>\n" +
    "<strong>Según recuerdo</strong>\n" +
    "<strong>Que yo recuerde</strong>\n" +
    "<a href=\"/chunk/segun-yo\" class=\"text-blue-700\"><strong>Según yo</strong></a>\n" +
    "<strong>Si mi memoria no me falla</strong>",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "en-una-de-esas",
  title: "En una de esas",
  category: "sentence starters",

  meaning:
    "This is a chunk that kinda confused me for a while.\n\n" +
    "I just couldn’t hit on a good English equivalent.\n\n" +
    "But after comparing like 20 examples (yep, I’m not exaggerating!), I worked out that they could all be translated as:\n" +
    "👉 <strong>Who knows, maybe…</strong>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you’re talking about things that might just happen (with a pinch of luck 😉):</p>" +
    "<strong>En una de esas me saco la lotería.</strong><br>" +
    "<em>Who knows, maybe I’ll win the lottery.</em></p>" +

    "<p class='mb-4'><strong>En una de esas sí viene a la fiesta.</strong><br>" +
    "<em>Who knows, maybe she’ll actually come to the party.</em></p>" +

    "<p class='mb-6'><strong>En una de esas pasas el examen sin estudiar.</strong><br>" +
    "<em>Who knows, you might just pass the test without studying.</em></p>",

  tone:
    "✅ Super mega <strong>MEXICAN</strong>. 🌮\n\n" +
    "✅ Informal, everyday speech.\n\n" +
    "✅ Can be hopeful, ironic, or playful depending on tone of voice.",

  examples: [
    {
      spanish: "En una de esas te vuelve a ver jugar.",
      english: "Who knows, maybe she'll see you play (football) again."
    },
    {
      spanish: "Deja te hago la oferta, y en una de esas, hasta encuentras nueva familia.  (real-life example 🎯)",
      english: "Let me make you an offer, and who knows, maybe you’ll even find a new family."
    }
  ],

  similarChunks:
    "<strong>Igual y</strong>\n" +
    "<strong>Capaz que</strong>\n" +
    "<strong>A lo mejor</strong>\n" +
    "<strong>Chance y</strong>\n" +
    "<strong>Primero Dios y</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "MUY informal 💀" }
  ],

  audioUrls: []
},

{
  slug: "pon-tu-que",
  title: "Pon tú que",
  category: "sentence starters",

  meaning:
    "This chunk’s just a playful way of saying <strong>let’s say</strong>.\n\n" +
    "Yep, it really is that simple! Why on earth doesn’t anyone teach this stuff?!\n" +
    "👉 <strong>Let’s say…</strong>\n" +
    "👉 <strong>Suppose…</strong>\n\n\n" +
    "💡You might also hear <strong>ponle tú que</strong> and <a href=\"/chunk/pon-que\" class=\"text-blue-700\"><strong>pon que</strong></a>, which work in pretty much the same way!",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you need to give an example or frame a hypothetical:</p>" +
    "<strong>Pon tú que no hay tráfico.</strong><br>" +
    "<em>Let’s say there’s no traffic.</em></p>" +

    "<p class='mb-4'><strong>Pon tú que sí funciona la idea.</strong><br>" +
    "<em>Suppose the idea actually works.</em></p>" +

    "<p class='mb-6'><strong>Pon tú que elegimos al presidente. ¿Tú crees que vaya a cambiar algo?</strong><br>" +
    "<em>Suppose we pick the president. Do you think anything’s gonna change?</em></p>",

  tone:
    "✅ Very Mexican.\n\n" +
    "✅ Great for informal conversation.",

  examples: [
    {
      spanish: "Pon tú que ganas la lotería, ¿qué harías?",
      english: "Let’s say you win the lottery, what would you do?"
    },
    {
      spanish: "Pon tú que ganas la lotería, ¿qué harías?Pon tú que investigas bien… (real-life example 🎯)",
      english: "Let’s say you investigate well…"
    }
  ],

  similarChunks:
    "<strong>Ponle tú</strong>\n" +
    "<a href=\"/chunk/pon-que\" class=\"text-blue-700\"><strong>Pon que</strong></a>\n" +
    "<strong>Supongamos que</strong>\n" +
    "<strong>Haz de cuenta que</strong>\n" +
    "<strong>Imagina que</strong>\n" +
    "<strong>Supón que</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "MUY informal 💀" }
  ],

  audioUrls: []
},

{
  slug: "pon-que",
  title: "Pon que",
  category: "sentence starters",

  meaning:
    "Yep, this one’s yet another way of saying;\n" +
    "👉 <strong>Let’s say…</strong>\n" +
    "👉 <strong>Suppose that…</strong>\n\n\n" +
    "💡You might also hear <strong>ponle tú que</strong> and <a href=\"/chunk/pon-tu-que\" class=\"text-blue-700\"><strong>pon tú que</strong></a>, which work in pretty much the same way!",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you’re whipping out a quick hypothetical:</p>" +
    "<strong>Pon que no llega.</strong><br>" +
    "<em>Suppose he doesn’t show up.</em></p>" +

    "<p class='mb-6'><strong>Pon que mañana no hay clases.</strong><br>" +
    "<em>Let’s say there’s no school tomorrow.</em></p>",

  tone:
    "✅ Mexican AF.\n\n" +
    "✅ Perfect for casual conversation.",

  examples: [
    {
      spanish: "Pon que te creo.",
      english: "Let’s say I believe you"
    },
    {
      spanish: "Pon que sí viene, ¿cómo lo recibimos?",
      english: "Suppose he does come, how do we welcome him?"
    }
  ],

  similarChunks:
    "<a href=\"/chunk/pon-tu-que\" class=\"text-blue-700\"><strong>Pon tú que</strong></a>\n" +
    "<strong>Ponle tú</strong>\n" +
    "<strong>Haz de cuenta que</strong>\n" +
    "<strong>Supón que</strong>\n" +
    "<strong>Imagina que</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "MUY informal 💀" }
  ],

  audioUrls: []
},

{
  slug: "hay-de-dos",
  title: "Hay de dos",
  category: "sentence starters",

  meaning:
    "This chunkety chunk chunk packs a punch! 👊\n\n" +
    "Here’s what it means:\n" +
    "👉 <strong>There are two possibilities... / There are two ways this could go...</strong>\n\n" +
    "It’s a neat, compact way to frame a situation as having exactly two outcomes, which is why Mexicans often use it to set up an <strong>o … o …</strong> construction <strong>(either… or…)</strong>.\n\n\n" +
    "💡 You could also say <strong>hay dos opciones</strong>, but it’s nowhere near as colloquial. 😉",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>🌪️ When to whip it out</p>" +
    "Whenever you’re laying out two paths, choices, or explanations:\n\n" +
    "<p class='mb-6'><strong>Hay de dos, wey… o lo hacemos bien, o lo hacemos dos veces.</strong><br>" +
    "<em>There are two options, dude… either we do it right, or we do it twice.</em></p>\n" +

    "<p class='mb-6'><strong>Hay de dos: o sigues de godín o te lanzas de emprendedor.</strong><br>" +
    "<em>You’ve got 2 options: stay in your 9–5 or dive into entrepreneurship.</em></p>\n" +

    "<p class='mb-6'><strong>Hay de dos: o me contestas el WhatsApp o ya no somos amigos.</strong><br>" +
    "<em>You have two options: either you answer my WhatsApp or we're no longer friends.</em></p>",

  tone:
    "✅ <strong>SUPER</strong> Mexican.\n\n" +
    "🚫 <strong>DON’T</strong> use in business meetings.",

  examples: [
    {
      spanish: "Hay de dos: o me perdonas o aquí se acaba todo.",
      english: "There are two options: either you forgive me, or it's over between us."
    },
    {
      spanish: "Hay de dos con el examen: o le echas ganas desde ahorita o valiste.",
      english: "There are two ways this exam can go: either you start studying hard right now, or you're screwed."
    }
  ],

  similarChunks:
    "<strong>Hay de dos sopas</strong>\n" +
    "<strong>Hay dos opciones</strong>\n" +
    "<strong>Tienes de dos</strong>\n" +
    "<strong>Nomás hay de dos</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "MUY informal 💀" }
  ],

  audioUrls: []
},

{
  slug: "una-cosa-es-que",
  title: "Una cosa es que",
  category: "sentence starters",

  meaning:
    "Ok, ok… I admit it! This one’s actually a two-part chunk.\n\n" +
    "It’s <strong>ALWAYS</strong> followed by a second clause beginning with <strong>y otra que</strong> (or variations like <strong>y otra muy distinta es que</strong> and <strong>y una muy diferente es que</strong>).\n\n" +
    "Here’s how it works:\n" +
    "👉 <strong>It’s one thing to X… and another to Y.</strong>\n\n" +
    "So yeah, it’s basically Spanish’s way of drawing a hard line between two situations.\n\n" +
    "You’re essentially saying: <strong>THIS is fine, but THAT’S going too far.</strong>\n\n",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>🌪️ When to whip it out</p>" +
    "Whenever you want to draw a clear line between two situations:\n\n" +
    "<p class='mb-6'><strong>Una cosa es que no quieras ir… y otra que hagas mala cara todo el día.</strong><br>" +
    "<em>It’s one thing not wanting to go… but quite another to be sulking all day.</em></p>\n" +

    "<p class='mb-6'><strong>Una cosa es que se te olvide una vez… y otra que nunca cumplas tus promesas.</strong><br>" +
    "<em>It’s one thing to forget once… and another to never keep your promises.</em></p>",

  tone:
    "✅ Neutral, baby! Works with friends, family, work, etc.\n\n" +
    "🚫 Not slangy, but often said with a hint of drama.",

  examples: [
    {
      spanish: "Una cosa es que salga caro… y otra que sea imposible de pagar.",
      english: "It’s one thing for it to be pricey… and another for it to be impossible to afford."
    },
    {
      spanish: "Una cosa es que quieras ser presidente, y una muy diferente es que me quieras chingar.",
      english: "It’s one thing if you want to be president… and a completely different thing if you want to screw me over."
    }
  ],

  similarChunks:
    "<strong>No es lo mismo… que…</strong>\n" +
    "<strong>Una cosa es una cosa y otra cosa es otra cosa</strong>\n" +
    "<strong>Te paso que… pero no que…</strong>\n" +
    "<strong>Esto te lo paso, pero no que…</strong>",

  tags: [
    { label: "C1 (¡Eres un chingón!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "de-hecho",
  title: "De hecho",
  category: "sentence starters",

  meaning:
    "Say hello to the Spanish equivalent of: \n" +
    "👉 <strong>in fact / actually</strong>\n\n" +
    "And it’s not just a stiff essay phrase! In daily speech, <strong>de hecho</strong> is your go-to for correcting, adding a surprising detail, or emphasizing that something’s true!\n\n" +
    "Yep, quite the useful lil’ chunk!\n\n\n" +
    "💡 Even though <strong>de hecho</strong> is <strong>VERY</strong> common, if you wanna sound super-duper Mexican, you can often swap it with <a href=\"/chunk/fijate-que\" class=\"text-blue-700\"><strong>fíjate que</strong></a>.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to clarify, correct, or add a surprising twist:\n" +

    "<p class='mb-4'><u><strong>Clarifying:</strong></u><br>" +
    "<strong>Me gusta la idea, de hecho.</strong><br>" +
    "<em>In fact, I like the idea.</em></p>" +

    "<p class='mb-4'><u><strong>Correcting:</strong></u><br>" +
    "<strong>De hecho, soy de Veracruz.</strong><br>" +
    "<em>I’m actually from Veracruz.</em></p>" +

    "<p class='mb-6'><u><strong>Dropping a little surprise:</strong></u><br>" +
    "<strong>De hecho, sí lo conozco. Fuimos roomies en la uni.</strong><br>" +
    "<em>Actually, I do know him. We were roommates in college.</em></p>",

  tone:
    "✅ Neutral, baby!\n\n" +
    "✅ Extremely common.",

  examples: [
    {
      spanish: "De hecho, ese restaurante ya cerró.",
      english: "Actually, that restaurant’s already closed."
    }
  ],

  similarChunks:
    "<a href=\"/chunk/fijate-que\" class=\"text-blue-700\"><strong>Fíjate que</strong></a>\n" +
    "<strong>En realidad</strong>\n" +
    "<strong>La neta</strong>\n" +
    "<strong>Aunque no lo creas</strong>" +
    "<strong>Tal cual</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "por-lo-visto",
  title: "Por lo visto",
  category: "sentence starters",

  meaning:
    "This is one of the great discourse markers!\n\n" +
    "Huh?\n\n" +
    "Sorry, I’ll try not to get bogged down in fancy linguistic terms …\n\n" +
    "It’s just a <strong>VERY</strong> common way of saying:\n" +
    "👉 <strong>apparently / it looks like</strong>\n\n" +
    "And unlike <strong>aparentemente</strong> (which also means <strong>apparently</strong>), <strong>por lo visto</strong> is a phrase you’re actually gonna hear in conversation.\n\n" +
    "Before you accuse me of making things up, data from the <strong>Corpus of Contemporary Spanish</strong> shows that <strong>por lo visto</strong> is used 90% more often in oral speech than <strong>aparentemente</strong> (trust me now?).",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to point out something that seems true based on what you’ve heard or seen:</p>" +

    "<p class='mb-4'><strong>Por lo visto, ya no van a venir.</strong><br>" +
    "<em>Apparently, they’re not coming anymore.</em></p>" +

    "<p class='mb-4'><strong>Por lo visto, está enfermo.</strong><br>" +
    "<em>Apparently, he’s sick.</em></p>" +

    "<p class='mb-6'><strong>Por lo visto, nadie quiere hacer la fila.</strong><br>" +
    "<em>No one wants to stand in line, apparently.</em></p>",

  tone:
    "✅ Neutral!\n\n" +
    "✅ Common across all Spanish-speaking countries.",

  examples: [
    {
      spanish: "Por lo visto, ya se pelearon otra vez.",
      english: "It looks like they had another fight."
    },
    {
      spanish: "Por lo visto, mañana va a llover.",
      english: "Apparently, it’s going to rain tomorrow."
    }
  ],

  similarChunks:
    "<strong>Al parecer </strong>\n" +
    "<strong>Parece que</strong>\n" +
    "<strong>Pareciera que</strong>\n" +
    "<strong>Tal parece que</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "en-cuanto-a",
  title: "En cuanto a",
  category: "sentence starters",

  meaning:
    "This one just means:\n" +
    "👉 <strong>regarding / as for</strong>\n\n" +
    "And in terms of formality, it’s pretty neutral.\n\n" +
    "<strong>BUT</strong>… I wouldn’t personally use it for super casual topic changes with friends!\n\n" +
    "Stick to <strong>y sobre...</strong> or just jump right in!\n\n\n" +
    "💡 Not to be confused with <strong>en cuanto</strong>, which means <strong>as soon as</strong>.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to introduce a new angle or specify what part of a topic you’re talking about:</p>" +
    "<p class='mb-4'><strong>Me encanta la serie. En cuanto a la novela, aún no la leo.</strong><br>" +
    "<em>I love the series. As for the novel, I haven't read it yet.</em></p>" +

    "<p class='mb-6'><strong>En cuanto a los resultados, pues, superaron expectativas.</strong><br>" +
    "<em>Regarding the results, well, they exceeded expectations.</em></p>",

  tone:
    "✅ Totally fine in business meetings <strong>AND</strong> normal conversations.\n\n" +
    "✅ Sits somewhere between formal and neutral on the formality scale.",

  examples: [
    {
      spanish: "En cuanto a la comida, todo estuvo delicioso.",
      english: "As for the food, everything was delicious."
    },
    {
      spanish: "En cuanto a tus dudas, podemos hablar después.",
      english: "As for your questions, we can discuss them later."
    }
  ],

  similarChunks:
    "<strong>Respecto a</strong>\n" +
    "<strong>Con respecto a</strong>\n" +
    "<strong>En lo que respecta a</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "con-respecto-a",
  title: "Con respecto a",
  category: "sentence starters",

  meaning:
    "🧠 <strong>What it means</strong>\n" +
    "You can think of this one as the brother-in-arms of <strong>en cuanto a</strong>!\n\n" +
    "Because, well, it means the exact same thing:\n" +
    "👉 <strong>Con respecto a...</strong> = <em>Regarding...</em>\n\n" +
    "Just tack it onto the beginning of a sentence to address a specific topic or a specific aspect of something.\n\n\n" +
    "💡 <strong>Con respecto a</strong> sounds a tad more formal than <strong>en cuanto a</strong> (in case you were wondering 😉).",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to frame your opinion or clarify what specific thing you’re talking about, especially in semi-formal or formal contexts:</p>" +
    "<p class='mb-4'><strong>Con respecto a la economía…</strong><br>" +
    "<em>Regarding the economy…</em></p>" +

    "<p class='mb-6'><strong>Con respecto a los resultados, superaron expectativas.</strong><br>" +
    "<em>Regarding the results, they exceeded expectations.</em></p>",

  tone:
    "✅ Formal!\n\n" +
    "✅ Common at work and in academic environments.\n\n" +
    "🚫 Too stiff for casual convos.",

  examples: [
    {
      spanish: "Con respecto a tu desempeño, estoy muy satisfecho.",
      english: "As for your performance, I’m very satisfied."
    },
    {
      spanish: "Con respecto a la ley, no hay excepciones.",
      english: "With respect to the law, there are no exceptions."
    }
  ],

  similarChunks:
    "<strong>En cuanto a</strong>\n" +
    "<strong>Respecto a</strong>\n" +
    "<strong>Sobre</strong>\n" +
    "<strong>En lo que respecta a</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" },
    { label: "Formal 💼" }
  ],

  audioUrls: []
},

{
  slug: "a-fin-de-cuentas",
  title: "A fin de cuentas",
  category: "sentence starters",

  meaning:
    "<strong>A fin de cuentas</strong> means something like:\n" +
    "👉 <strong>ultimately / at the end of the day</strong>\n\n" +
    "It’s basically just a way to wrap things up in a neat little summary with a ribbon on top. 🎀",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to wrap things up and point out the bottom line:</p>" +
    "<p class='mb-4'><strong>A fin de cuentas, seguimos siendo amigos.</strong><br>" +
    "<em>At the end of the day, we’re still friends.</em></p>" +

    "<p class='mb-4'><strong>A fin de cuentas, no importó lo que dijo.</strong><br>" +
    "<em>Ultimately, it didn’t matter what he said.</em></p>" +

    "<p class='mb-6'><strong>A fin de cuentas, lo que importa es que estés feliz.</strong><br>" +
    "<em>When all’s said and done, what matters is that you’re happy.</em></p>",

  tone:
    "✅ Neutral, everyday Spanish.\n\n" +
    "✅ Not very <strong>barrio</strong>!",

  examples: [
    {
      spanish: "A fin de cuentas, lo importante no es lo que tienes, sino con quién lo compartes.",
      english: "At the end of the day, it doesn’t matter what you have, but who you share it with."
    },
    {
      spanish: "A fin de cuentas, todo salió bien.",
      english: "Ultimately, everything turned out fine."
    }
  ],

  similarChunks:
    "<strong>Al final de cuentas</strong>\n" +
    "<a href=\"/chunk/al-fin-y-al-cabo\" class=\"text-blue-700\"><strong>Al fin y al cabo</strong></a>\n" +
    "<strong>Al final</strong>\n" +
    "<strong>Después de todo</strong>",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "al-fin-y-al-cabo",
  title: "Al fin y al cabo",
  category: "sentence starters",

  meaning:
    "<strong>Al fin</strong> means <strong>in the end</strong>, and <strong>al cabo</strong>… errr, well, it also means <strong>in the end</strong>!\n\n" +
    "Although this one’s probably got your redundancy alarms peeling full blast, it’s actually just another way of saying:\n" +
    "👉 <strong>ultimately / at the end of the day</strong>\n\n" +
    "And is it different from <a href=\"/chunk/a-fin-de-cuentas\" class=\"text-blue-700\"><strong>a fin de cuentas</strong></a> and <strong>al final de cuentas</strong>?\n\n" +
    "<strong>¡Nel!</strong> They’re used pretty much interchangeably.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to highlight the thing that really matters once all is said and done:</p>" +
    "<p class='mb-4'><strong>Al fin y al cabo, todos somos humanos.</strong><br>" +
    "<em>At the end of the day, we’re all human.</em></p>" +

    "<p class='mb-6'><strong>Al fin y al cabo, ya no podemos cambiar el pasado.</strong><br>" +
    "<em>After all, we can’t change the past.</em></p>",

  tone:
    "✅ Neutral, everyday Spanish.\n\n" +
    "✅ Used across the Spanish-speaking world.",

  examples: [
    {
      spanish: "Al fin y al cabo, fue una buena experiencia.",
      english: "At the end of the day, it was a good experience."
    },
    {
      spanish: "Al fin y al cabo, nadie salió lastimado.",
      english: "Ultimately, nobody got hurt."
    }
  ],

  similarChunks:
    "<a href=\"/chunk/a-fin-de-cuentas\" class=\"text-blue-700\"><strong>A fin de cuentas</strong></a>\n" +
    "<strong>Al final de cuentas</strong>\n" +
    "<strong>Después de todo</strong>",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "al-infinitive",
  title: "Al + infinitive",
  category: "sentence starters",

  meaning:
    "This is another super useful chunk and one that you’ll be using <strong>A LOT</strong> once you get your head around it!\n\n" +
    "It’s basically just a really neat way of linking events:\n" +
    "👉 <strong>on/upon + infinitive</strong>\n\n" +
    "<strong>Al llegar a la playa, me metí en el mar luego luego.</strong><br>" +
    "<em>When I got to the beach, I got into the water straight away.*</em>\n\n" +
    "<strong>Al terminar la tarea, el niño empezó a jugar videojuegos.</strong><br>" +
    "<em>After finishing his homework, the boy started playing video games.</em>\n\n" +
    "*In spoken English, we almost always use <strong>when</strong> instead of <strong>on/upon</strong> to link the two events (see examples below!).\n\n\n" +
    "💡 Remember <strong>NOT</strong> to use <strong>al</strong> with <strong>gerunds (-ando/-iendo)</strong>:\n" +
    "✔️ <strong>al llegar</strong>\n" +
    "❌ <strong>al llegando</strong>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to say what happened when a particular action occurred:</p>" +
    "<p class='mb-4'><strong>Al escuchar la noticia, todos se sorprendieron.</strong><br>" +
    "<em>Everyone was shocked when they heard the news.</em></p>" +

    "<p class='mb-6'><strong>Al terminar la clase, salimos corriendo.</strong><br>" +
    "<em>When the class ended, we ran out.</em></p>",

  tone:
    "✅ Neutral, standard Spanish.\n\n" +
    "🚫 Not slangy at all!",

  examples: [
    {
      spanish: "Al salir, apaga la luz.",
      english: "When you leave, turn off the light."
    },
    {
      spanish: "Al ver el precio, decidí no comprarlo.",
      english: "I decided not to buy it when I saw the price."
    }
  ],

  similarChunks:
    "<strong>Cuando + verb</strong>\n" +
    "<strong>En cuanto + verb</strong>\n" +
    "<strong>Nomás + verb</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "has-de-saber-que",
  title: "Has de saber que",
  category: "sentence starters",

  meaning:
    "🧠 <strong>What it means</strong>\n" +
    "This one's a great way to introduce a fact, story, anecdote, or even a juicy piece of gossip!\n\n" +
    "Gotta love the juicy gossip. 😉\n\n" +
    "It basically means:\n" +
    "👉 <strong>Just so you know… / You should know that…</strong>\n\n\n" +
    "💡 This is a chunk your <strong>Mexican abuela</strong> is <strong>VERY</strong> likely to say, but your <strong>barrio cuz</strong> not so much!",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to give someone background info or a heads-up before making your point:</p>" +
    "<p class='mb-4'><strong>Has de saber que el examen va a estar difícil.</strong><br>" +
    "<em>Just so you know, the test is going to be tough.</em></p>" +

    "<p class='mb-4'><strong>Has de saber que andan diciendo que se van a casar.</strong><br>" +
    "<em>Word is they’re getting married… just so you know.</em></p>" +

    "<p class='mb-6'><strong>Has de saber que no me gustan las sorpresas.</strong><br>" +
    "<em>Just so you know, I don’t like surprises.</em></p>",

  tone:
    "✅ Neutral but a bit old-school.\n\n" +
    "🚫 Younger speakers often use other phrases.",

  examples: [
    {
      spanish: "Has de saber que no es la primera vez que pasa.",
      english: "You should know this isn’t the first time it’s happened."
    },
    {
      spanish: "Has de saber que aquí siempre llueve en julio.",
      english: "Just so you know, it always rains here in July."
    }
  ],

  similarChunks:
    "<strong>Nomás pa’ que sepas</strong>\n" +
    "<strong>Tienes que saber que</strong>\n" +
    "<strong>Cabe mencionar que</strong>\n" +
    "<strong>Ahí te encargo que</strong>\n" +
    "<a href=\"/chunk/fijate-que\" class=\"text-blue-700\"><strong>Fíjate que</strong></a>\n" +
    "<strong>Debo decir que</strong>\n" +
    "<strong>Algo que debes saber es que</strong>",

  tags: [
    { label: "C1 (¡Eres un chingón!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Abuela-approved 👵" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "estoy-pensando-en",
  title: "Estoy pensando en",
  category: "sentence starters",

  meaning:
    "This one’s the Spanish equivalent of:\n" +
    " 👉 <strong>I’m thinking about</strong>\n\n" +
    "The tricky thing here is the preposition, which is obviously completely different from English.\n\n" +
    "⚠️ <strong>¡Aguas!</strong> It’s <strong>NEVER</strong> correct to say <strong>estoy pensando de</strong>!",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to say <em>I’m thinking about</em> in Spanish:</p>" +

    "<p class='mb-4'><strong>Estoy pensando en pedir tacos al pastor.</strong><br>" +
    "<em>I’m thinking about ordering tacos al pastor.</em></p>" +

    "<p class='mb-4'><strong>Estoy pensando en comprarme una bici.</strong><br>" +
    "<em>I’m thinking about buying a bike.</em></p>" +

    "<p class='mb-6'><strong>Estoy pensando en ti.</strong><br>" +
    "<em>I’m thinking about you.</em></p>",

  tone:
    "✅ 100% neutral.\n\n" +
    "✅ Can’t get much more standard, tbh.",

  examples: [
    {
      spanish: "Estoy pensando en cambiar de trabajo.",
      english: "I’m thinking about changing jobs."
    },
    {
      spanish: "Estoy pensando en qué vamos a cenar.",
      english: "I’m thinking about what we’re going to have for dinner."
    }
  ],

  similarChunks:
    "<strong>Ando pensando en</strong>\n" +
    "<strong>Traigo la cabeza en</strong>\n" +
    "<strong>Le estoy dando vueltas a que</strong>",

  tags: [
    { label: "A2 (¡Vas bien!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "a-ver-si-entiendo",
  title: "A ver si entiendo",
  category: "sentence starters",

  meaning:
    "This is another useful one for us learners!\n\n" +
    "It means something like:\n" +
    " 👉 <strong>Let me get this straight…</strong>\n\n" +
    "So yeah, it’s the perfect chunk for when you’re not 100% sure if you’ve got the right end of the proverbial stick!",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to check if you’ve understood something correctly:</p>" +
    "<p class='mb-4'><strong>A ver si entiendo: ¿quieres que llegue tarde a propósito?</strong><br>" +
    "<em>Let me get this straight: you want me to arrive late on purpose?</em></p>" +

    "<p class='mb-4'><strong>A ver si entiendo: me estás diciendo que todo esto fue gratis.</strong><br>" +
    "<em>So if I understand correctly, you’re telling me all this was free.</em></p>" +

    "<p class='mb-6'><strong>A ver si entiendo… primero vamos a hablar del presupuesto y luego decidiremos sobre la contratación. ¿Es cierto?</strong><br>" +
    "<em>Let’s see if I understand… first, we’re going to talk about the budget, and then we’ll decide on hiring. Is that right?</em></p>",

  tone:
    "✅ Very common in casual convos.\n\n" +
    "✅ Works with friends, coworkers, teachers, etc.",

  examples: [
    {
      spanish: "A ver si entiendo… ¿me prestaste dinero para que lo gastara en cerveza?",
      english: "Let me get this straight… you lent me money so I could spend it on beer?"
    },
    {
      spanish: "A ver si entiendo: ¿mañana es gratis la entrada?",
      english: "So if I understand correctly, tomorrow the entry is free?"
    },
    {
      spanish: "A ver si entiendo… ¿quieres ir a la playa este fin de semana?",
      english: "Let me get this straight … you wanna go to the beach this weekend?"
    }
  ],

  similarChunks:
    "<strong>O sea</strong>\n" +
    "<strong>Entonces, si no me equivoco</strong>\n" +
    "<strong>A ver si te entendí</strong>\n" +
    "<strong>A ver si te estoy entendiendo</strong>\n" +
    "<strong>¿Lo que quieres decir es que…?</strong>\n" +
    "<strong>¿Quieres decir que…?</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "si-todo-sale-bien",
  title: "Si todo sale bien",
  category: "sentence starters",

  meaning:
    "Whoa, this is a bit of a weird one, right?\n\n" +
    "I mean, what’s the verb <strong>salir</strong> doing here?\n\n" +
    "Well, in this context, <strong>salir</strong> actually translates as <strong>to go well</strong>, so this chunk just means:\n" +
    "👉 <strong>If everything goes well... / If all goes well...</strong>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to say if all goes well in Spanish:</p>" +
    "<p class='mb-4'><strong>Si todo sale bien, termino la uni este año.</strong><br>" +
    "<em>If all goes well, I’ll finish uni this year.</em></p>" +

    "<p class='mb-4'><strong>Si todo sale bien, compramos la casa en diciembre.</strong><br>" +
    "<em>If everything goes well, we’ll buy the house in December.</em></p>" +

    "<p class='mb-6'><strong>Si todo sale bien, vamos a terminar el proyecto este viernes.</strong><br>" +
    "<em>If everything goes well, we’re going to finish the project this Friday.</em></p>",

  tone:
    "✅ Neutral, everyday Spanish.\n\n" +
    "✅ Super common in Mexico and across the Spanish-speaking world.",

  examples: [
    {
      spanish: "Si todo sale bien, mañana me quitan los puntos.",
      english: "If all goes well, they’ll take out my stitches tomorrow."
    },
    {
      spanish: "Si todo sale bien, lanzamos la app en septiembre.",
      english: "If all goes well, we’ll launch the app in September."
    }
  ],

  similarChunks:
    "<strong>Con suerte</strong>\n" +
    "<strong>Si todo va bien</strong>\n" +
    "<strong>Si Dios quiere</strong>\n" +
    "<strong>Dios mediante</strong>\n" +
    "<strong>Si todo sale de acuerdo al plan</strong>\n" +
    "<strong>Primero Dios</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "a-menos-que",
  title: "A menos que",
  category: "sentence starters",

  meaning:
    "This one just means:\n" +
    "👉 <strong>unless</strong>\n\n" +
    "And just as in English, it’s used to set up a condition:\n" +
    "<strong>No voy a salir a menos que deje de llover.</strong><br>" +
    "<em>I’m not going out unless it stops raining.</em><br><br><br>" +

    "💡Just note that the next verb is normally in the <strong>SUBJUNCTIVE</strong> as it’s not something that’s guaranteed to happen!",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you’d say <em>unless</em> in English:</p>" +

    "<p class='mb-4'><strong>No voy a la fiesta a menos que vayas tú.</strong><br>" +
    "<em>I’m not going to the party unless you go.</em></p>" +

    "<p class='mb-4'><strong>No firmo nada a menos que me expliquen bien el contrato.</strong><br>" +
    "<em>I’m not signing anything unless they explain the contract properly.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-2 mb-4'>You can also use it to create suspense:</p>" +
    "<strong>Se me hace que le puso el cuerno… A menos que…</strong><br>" +
    "<em>I think he cheated on her... Unless...</em></p>",

  tone:
    "✅ Great for casual conversation.\n\n" +
    "✅ But works in serious/legal contexts too!",

  examples: [
    {
      spanish: "No puedes entrar a menos que seas socio.",
      english: "You can’t go in unless you’re a member."
    },
    {
      spanish: "No me subo al coche a menos que manejes tú.",
      english: "I’m not getting in the car unless you drive."
    }
  ],

  similarChunks:
    "<strong>Salvo que</strong>\n" +
    "<strong>Excepto que</strong>\n" +
    "<strong>Con la condición de que…</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "espero-que",
  title: "Espero que",
  category: "sentence starters",

  meaning:
    "I think this is probably the most “famous” subjunctive trigger there is.\n\n" +
    "Well, my high school Spanish teacher absolutely loved it, at least!\n\n" +
    "It literally translates as:\n" +
    "👉 <strong>I hope that</strong>\n\n" +
    "And yeah, because you’re talking about something that ain’t guaranteed, the next verb has to be in the <strong>SUBJUNCTIVE</strong>!",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to say that you hope something will happen:</p>" +

    "<p class='mb-4'><strong>Espero que te guste la comida.</strong><br>" +
    "<em>I hope you like the food.</em></p>" +

    "<p class='mb-4'><strong>Espero que no lleguen tarde.</strong><br>" +
    "<em>I hope they don’t arrive late.</em></p>" +

    "<p class='mb-6'><strong>Espero que todo salga bien.</strong><br>" +
    "<em>I hope everything turns out okay.</em></p>",

  tone:
    "✅ 100% neutral!\n\n" +
    "✅ Works in formal emails, casual chats, or with your abuela.\n\n" +
    "⚡ Want more drama? Use <strong>ojalá (que)</strong> instead.",

  examples: [
    {
      spanish: "Espero que hayas dormido bien.",
      english: "I hope you slept well."
    },
    {
      spanish: "Espero que te mejores pronto.",
      english: "I hope you get better soon."
    }
  ],

  similarChunks:
    "<strong>Ojalá que</strong>\n" +
    "<strong>Ojalá y</strong>\n" +
    "<strong>A ver si</strong>\n" +
    "<strong>Primero Dios</strong>\n" +
    "<strong>Dios mediante</strong>\n" +
    "<strong>Pon changuitos para que</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "ten-en-cuenta-que",
  title: "Ten en cuenta que",
  category: "sentence starters",

  meaning:
    "This one’s Spanish for:\n" +
    " 👉 <strong>Keep in mind that… / Remember that…</strong>\n\n" +
    "Native speakers use it when they want to flag something important.\n\n" +
    "Kinda like a verbal sticky note. 🗒️",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to tell someone to keep something in mind:</p>" +

    "<p class='mb-4'><strong>Ten en cuenta que mañana no hay clases.</strong><br>" +
    "<em>Remember that there’s no school tomorrow.</em></p>" +

    "<p class='mb-4'><strong>Ten en cuenta que es muy caro vivir ahí.</strong><br>" +
    "<em>Bear in mind that it’s really expensive to live there.</em></p>" +

    "<p class='mb-6'><strong>Ten en cuenta que cierra a las 8.</strong><br>" +
    "<em>Remember it closes at 8.</em></p>",

  tone:
    "✅ Neutral, baby!\n\n" +
    "✅ Common everywhere in the Spanish-speaking world.",

  examples: [
    {
      spanish: "Ten en cuenta que puede tardar varias semanas.",
      english: "Bear in mind it might take several weeks."
    },
    {
      spanish: "Ten en cuenta lo pesado que es entrenar después de una noche de fiesta.",
      english: "Keep in mind how hard it is to train after a night of partying."
    }
  ],

  similarChunks:
"<strong>Recuerda que</strong>\n" +
"<strong>No olvides que</strong>\n" +
"<strong>Toma en cuenta que</strong>\n" +
"<strong>Ten en consideración que</strong>\n" +
"<strong>No se te olvide que</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],

  audioUrls: []
},

{
  slug: "ya-me-dio",
  title: "Ya me dio",
  category: "sentence starters",

  meaning:
    "This is <strong>THE. MOST. MEXICAN</strong> way of talking about states.\n\n" +
    "Technically, it’s for something that <strong>SUDDENLY</strong> hits you…\n" +
    "<strong>Ya me dio sueño.</strong> = <em>I just got sleepy.</em>\n\n" +
    "But in practice, it’s often just a <strong>casual way to say you’re feeling something right now</strong>: hunger, tiredness, laziness, etc.\n\n" +
    "👉 <strong>I’m… / I feel… (but with Mexican spice!)</strong>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to say you’re hungry, tired, cold, etc.</p>" +
    "<p class='mb-4'><strong>Ya me dio hambre.</strong><br><em>I’m hungry now.</em></p>" +
    "<p class='mb-4'><strong>Ya me dio sueño.</strong><br><em>I feel sleepy.</em></p>" +
    "<p class='mb-6'><strong>Ya me dio flojera salir.</strong><br><em>I don’t feel like going out anymore.</em></p>",

  tone:
    "✅ Super Mexican.\n\n" +
    "✅ Informal (but everyone uses it!).\n\n" +
    "🚫 <strong>DON’T</strong> use in formal writing!",

  examples: [
    {
      spanish: "Ya me dio frío.",
      english: "I’m cold."
    },
    {
      spanish: "Es que ya me dio mucha hambre.",
      english: "It’s just that I’m pretty hungry now."
    }
  ],

  similarChunks:
    "<strong>Me dieron ganas de</strong>\n" +
    "<strong>Se me antoja</strong>\n" +
    "<strong>Ya me entró</strong>\n" +
    "<strong>Traigo ganas de</strong>",

  tags: [
    { label: "A2 (¡Vas bien!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},


{
  slug: "como-que",
  title: "¿Cómo que…?",
  category: "useful questions",

  meaning:
    "This chunk’s another easy win when it comes to sounding more Mexa. 🎉\n\n" +
    "Here’s what it means:\n" +
    "👉 <strong>What do you mean…? / Wait, you’re saying…?</strong>\n\n" +
    "Yep, it’s just a natural way to show surprise, disbelief, or confusion re. something you just heard.\n\n\n" +
    "💡 Not to be confused with <strong>¿Como qué…?</strong>, which you’d use when asking <strong>WHAT KIND OF THING</strong> someone is talking about.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Right after someone drops some surprising, questionable, or suspicious news:</p>" +

    "<p class='mb-4'><strong>— Ya no como tacos.</strong><br>" +
    "<strong>— ¿Cómo que ya no comes tacos?</strong><br>" +
    "<em>— I don’t eat tacos anymore.<br>— What do you mean you don’t eat tacos anymore?!</em></p>" +

    "<p class='mb-6'><strong>— Voy a dejar la escuela.</strong><br>" +
    "<strong>— ¿Cómo que vas a dejar la escuela?</strong><br>" +
    "<em>— I’m going to quit school.<br>— What do you mean you’re quitting school?</em></p>",

  tone:
    "✅ Everyday, informal Mexican Spanish.\n\n" +
    "✅ Your tone of voice can make it sound curious, shocked, or teasing.\n\n" +
    "🚫 Not for serious, formal clarifications!",

  examples: [
    {
      spanish: "¿Cómo que te vas a Grecia?",
      english: "What do you mean you’re going to Greece?"
    },
    {
      spanish: "¿Cómo que no pueden tener las hamburguesas ese día? (real-life example 🎯)",
      english: "Wait, what do you mean they can’t have the burgers ready for that day?"
    },
    {
      spanish: "¿Cómo que no trajiste tu pasaporte? ¡El avión sale en una hora!",
      english: "What do you mean you didn't bring your passport? The plane leaves in an hour!"
    }
  ],

  similarChunks:
    "<strong>¿Cómo que no?</strong>\n" +
    "<strong>¿Cómo de que no?</strong>\n" +
    "<strong>¿O sea que…?</strong>\n" +
    "<strong>¿Me estás diciendo que…?</strong>\n" +
    "<strong>¿A poco…?</strong>\n" +
    "<strong>¿Es neta?</strong>\n" +
    "<strong>¿Es neta que…?</strong>\n" +
    "<strong>¿De verdad?</strong>\n" +
    "<strong>¿En serio?</strong>\n" +
    "<strong>¿Es en serio?</strong>\n" +
    "<strong>¿En serio…?</strong>",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "como-que-no",
  title: "¿Cómo que no?",
  category: "useful questions",

  meaning:
    "👉 <strong>What do you mean no?! / Of course it is! / Of course I am!</strong>\n\n" +
    "This little protest phrase is a <strong>VERY MEXICAN</strong> way of pushing back when someone makes a negative statement.\n\n\n" +
    "💡 It only works if the other person has just said <strong>NO</strong> (or something <strong>NEGATIVE</strong>!), and you want to challenge them.\n\n" +
    "So if someone says:\n" +
    "<strong>No eres bueno para el fútbol.</strong>\n" +
    "<em>You’re not good at football.</em>\n\n" +
    "You could say:\n" +
    "<strong>¿Cómo que no? Metí 3 goles el fin de semana pasado.</strong>\n" +
    "<em>Of course I am! I scored 3 goals last weekend.</em>",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Right after someone says NO, to defend yourself or challenge their opinion:</p>" +

    "<p class='mb-4'><strong>— Ya no hay tacos.</strong><br>" +
    "<strong>— ¿Cómo que no? ¡Si vi el trompo ahí afuera!</strong><br>" +
    "<em>— There aren’t any more tacos.<br>— Of course there are! I saw the spit outside!</em></p>" +

    "<p class='mb-6'><strong>— No vamos a ir a la playa.</strong><br>" +
    "<strong>— ¿Cómo que no? ¡Ya tengo mi traje de baño listo y todo!</strong><br>" +
    "<em>— We’re not going to the beach.<br>— What do you mean we’re not going? I’ve got my swimsuit ready and everything!</em></p>",

  tone:
    "✅ Informal, everyday Mexican Spanish.\n\n" +
    "🚫 Not for formal disagreement.",

  examples: [
    {
      spanish: "¿Cómo que no? ¡Ya me habías dicho que sí!",
      english: "What do you mean no?! You already said yes!"
    },
    {
      spanish: "— No voy a venir.\n— ¿Cómo que no?",
      english: "— I’m not coming.\n— What do you mean you’re not coming?"
    }
  ],

  similarChunks:
    "<strong>¿Cómo que sí?</strong>\n" +
    "<strong>¿Cómo crees?</strong>\n" +
    "<strong>¿Por qué no?</strong>\n" +
    "<strong>¿De qué hablas?</strong>\n" +
    "<strong>Claro que sí</strong>\n" +
    "<strong>¿Cómo de que no?</strong>\n" +
    "<strong>¿Pooooor?</strong> (Millennial/Gen Z)\n" +
    "<strong>¿Ah, no?</strong>\n" +
    "<strong>¿Ah, sí?</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "y-que-crees",
  title: "¿Y qué crees?",
  category: "useful questions",

  meaning:
    "This chunk is just a very Mexican way to build suspense before dropping some juicy news, a plot twist, or a funny punchline.\n\n" +
    "Here’s what it means:\n" +
    "👉 <strong>And guess what?</strong>\n\n\n" +
    "💡 It’s also worth noting that you don’t actually wait for the listener to guess; you just keep going straight to the punchline. 🥊",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to grab someone’s attention and make them curious about what’s coming next:</p>" +

    "<p class='mb-4'><strong>¿Y qué crees? Me encontré a Juan en el súper.</strong><br>" +
    "<em>And guess what? I ran into Juan at the supermarket.</em></p>" +

    "<p class='mb-6'>Oh, and it works even better with a lil’ pause for dramatic effect:<br>" +
    "<strong>¿Y qué crees? ¡Se nos olvidaron los boletos!</strong><br>" +
    "<em>And guess what? We forgot the tickets!</em></p>",

  tone:
    "✅ Informal, everyday Mexican Spanish.\n\n" +
    "✅ Perfect for storytelling, gossip, or big reveals.\n\n" +
    "🚫 Don’t use it in formal writing!",

  examples: [
    {
      spanish: "¿Y qué crees? Me dieron el trabajo.",
      english: "And guess what? I got the job."
    },
    {
      spanish: "¿Y qué crees? ¡No sabes, wey! (real-life example 🎯)",
      english: "And guess what? You don’t have a clue, dude!"
    }
  ],

  similarChunks:
    "<strong>Adivina qué</strong>\n" +
    "<strong>A qué no sabes</strong>\n" +
    "<strong>A qué no te imaginas</strong>\n" +
    "<strong>No sabes</strong>\n" +
    "<strong>¿Qué crees…?</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],

  audioUrls: []
},

{
  slug: "que-crees",
  title: "¿Qué crees?",
  category: "useful questions",

  meaning:
    "👉 <strong>Guess what?</strong>\n\n" +
    "Yep, it’s just a super common way to grab someone’s attention before dropping some news, be it good, bad, shocking, or funny.\n\n\n" +
    "💡 <strong>¿Qué crees?</strong> is generally more urgent/direct than <strong>¿Y qué crees?</strong>, which has more storytelling flair.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you’re about to reveal information and you want the listener hooked:</p>" +

    "<p class='mb-4'><strong>¿Qué crees? Me encontré a tu primo en el súper.</strong><br>" +
    "<em>Guess what? I ran into your cousin at the supermarket.</em></p>" +

    "<p class='mb-4'><strong>¿Qué crees que me dijo?</strong><br>" +
    "<em>What do you think she told me?</em></p>",

  tone:
    "✅ Informal, friendly, and great for storytelling.\n\n" +
    "✅ Works for good <strong>\AND</strong>\ bad news.\n\n" +
    "🚫 Not for formal settings, it’s 100% conversational.",

  examples: [
    {
      spanish: "¿Qué crees? ¡Vamos a la playa!",
      english: "Guess what? We’re going to the beach!"
    },
    {
      spanish: "¿Qué crees que vaya a venir en el examen?",
      english: "What do you think’s going to be in the exam?"
    },
    {
      spanish: "— ¿Qué crees? (real-life example 🎯)\n— ¿Qué pasa, mi amor?",
      english: "— Guess what?\n— What happened, sweetheart?"
    }
  ],

  similarChunks:
    "<strong>¿Y qué crees?</strong>\n" +
    "<strong>Adivina qué</strong>\n" +
    "<strong>A qué no sabes</strong>\n" +
    "<strong>A que no imaginas que</strong>\n" +
    "<strong>A que no te imaginas</strong>\n" +
    "<strong>No sabes</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],
},

{
  slug: "que-se-te-ofrece",
  title: "¿Qué se te ofrece?",
  category: "useful questions",

  meaning:
    "This is what my <strong>suegra</strong> always says to me when I wander into the kitchen looking for food.\n\n" +
    "Yep, she knows I’ve got a bit of a taco habit, lol.\n\n" +
    "It just means:\n" +
    "👉 <strong>How can I help you? / What do you need?</strong>\n\n\n" +
    "So yeah, it’s basically the go-to polite way to ask someone what they want / need / are looking for, especially in shops, restaurants, etc.\n\n" +
    "It’s friendly, service-oriented, and sounds very local.\n\n\n" +
    "💡 You might also hear it being used sarcastically when someone seems a bit lost or is snooping around somewhere they shouldn't!",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you're the one offering help!</p>" +
    "<p class='text-xl font-semibold mt-2 mb-4'>Think working in a shop, hosting guests, or when someone enters your kitchen looking hungry 😂:</p>" +

    "<strong>— ¿Qué se le ofrece?</strong><br>" +
    "<strong>— Necesito ayuda con la llave de mi habitación.</strong><br>" +
    "<em>— How can I help?</em><br>" +
    "<em>— I need help with my room key.</em></p>",

  tone:
    "✅ Great for everyday service situations or with friends/family.\n\n" +
    "✅ Sounds warm and attentive.",

  examples: [
    {
      spanish: "¿Buenas tardes, qué se te ofrece?",
      english: "Good afternoon, how can I help you?"
    }
  ],

  similarChunks:
    "<strong>¿En qué te puedo ayudar?</strong>\n" +
    "<strong>¿Qué necesitas?</strong>\n" +
    "<strong>¿Te ofrezco algo?</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],
},

{
  slug: "como-le-hago-para",
  title: "¿Cómo le hago para…?",
  category: "useful questions",

  meaning:
    "This is a super Mexican way to ask for instructions or advice.\n\n" +
    "It literally translates to <strong>How do I make it so that…?</strong>, but in everyday Mex Spanish, it just means:\n" +
    "👉 <strong>How do I…? / What do I have to do to…? / How do I go about…?</strong>\n\n\n" +
    "💡The <strong>le</strong> doesn't refer to anyone (or anything!) specific, it's just part of the expression!",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you’re asking someone how to do something:</p>" +

    "<p class='mb-4'><strong>¿Cómo le hago para sacar mi pasaporte?</strong><br>" +
    "<em>How do I go about getting a passport?</em></p>" +

    "<p class='mb-6'><strong>¿Cómo le hago para convencerla?</strong><br>" +
    "<em>How do I convince her?</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-2 mb-4'>It's also sometimes used to express deep frustration (a favorite of parents and teachers):</p>" +

    "<p class='mb-4'><strong>¿Cómo le hago para que dejen los celulares y pongan atención?</strong><br>" +
    "<em>How do I get you to put down your cell phones and pay attention?</em></p>" +

    "<p class='mb-6'><strong>¿Cómo le hago para que me entiendas? ¡Ya te lo dije mil veces!</strong><br>" +
    "<em>How can I make you understand? I've told you this a thousand times!</em></p>",

  tone:
    "✅ Informal, everyday Mexican Spanish.\n\n" +
    "✅ Perfect for casual problem-solving.\n\n" +
    "🚫 In formal speech, you’d say <strong>¿Cómo puedo…?</strong> or <strong>¿Qué debo hacer para…?</strong>",

  examples: [
    {
      spanish: "¿Cómo le hago para llegar al centro?",
      english: "How do I get downtown?"
    },
    {
      spanish: "¿Cómo le hacen para meter el hielo a estas botellas?",
      english: "How do they get the ice in these bottles?"
    },
    {
      spanish: "¿Cómo chingados le hago para humillar a mi hermano en televisión nacional?  (real-life example 🎯)",
      english: "How the fuck am I gonna humiliate my brother on national television?"
    }
  ],

  similarChunks:
    "<strong>¿Y cómo le hago para…?</strong>\n" +
    "<a href=\"/chunk/como-le-hago\" class=\"text-blue-700\"><strong>¿Cómo le hago?</strong></a>\n" +
    "<strong>¿Cómo le hiciste?</strong>\n" +
    "<strong>Me enseñas a</strong>\n" +
    "<strong>¿Cómo puedo…?</strong>",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],
},

{
  slug: "como-le-hago",
  title: "¿Cómo le hago?",
  category: "useful questions",

  meaning:
    "<strong>¿Cómo le hago?</strong> is just an ultra-casual, native way to ask how to go about doing something.\n\n" +
    "It translates to something like:\n" +
    "👉 <strong>How do I do it? / What do I do?</strong>\n\n\n" +
    "💡 It’s often used when someone’s feeling overwhelmed/lost re. a task.\n\n" +
    "I heard it the other day in the supermarket when an old dude didn’t know how to use the self-checkout machine, for example.",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to ask how to do something:</p>" +

    "<p class='mb-4'><strong>Quiero vender mi coche. ¿Cómo le hago?</strong><br>" +
    "<em>I want to sell my car. How do I do it?</em></p>" +

    "<p class='mb-6'><strong>Tengo que convencer a mi jefe… ¿cómo le hago?</strong><br>" +
    "<em>I need to convince my boss… what do I do?</em></p>",

  tone:
    "✅ Very informal, very Mexican.\n\n" +
    "✅ Perfect for casual conversation and asking friends for tips.\n\n" +
    "🚫 Not used in formal contexts!",

  examples: [
    {
      spanish: "Quiero ahorrar para un viaje, ¿cómo le hago, wey?",
      english: "I want to save up for a trip. How do I go about it, man?"
    }
  ],

  similarChunks:
    "<a href=\"/chunk/como-le-hago-para\" class=\"text-blue-700\"><strong>¿Cómo le hago para…?</strong></a>\n" +
    "<strong>¿Cómo le hicieron?</strong>\n" +
    "<strong>Me enseñas a</strong>\n" +
    "<strong>¿Cómo puedo…?</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],
},

{
  slug: "tu-que-te-crees",
  title: "¿Tú qué te crees?",
  category: "useful questions",

  meaning:
    "This is an <strong>EXCELLENT</strong> chunk for when you want to call someone out for acting arrogant, entitled, etc.\n\n" +
    "It just means:\n" +
    "👉 <strong>Who do you think you are?</strong>\n\n\n" +
    "💡It’s often (but not always!) followed by an example of a famous person (like <strong>“Who do you think you are? The President?”</strong>)",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to confront someone’s inflated ego, bossy behavior, or nonsense:</p>" +

    "<p class='mb-4'><strong>¿Tú qué te crees, hablándome así?</strong><br>" +
    "<em>Who do you think you are, talking to me like that?</em></p>" +

    "<p class='mb-6'><strong>¿Tú qué te crees? ¿Messi?</strong><br>" +
    "<em>Who do you think you are? Messi?</em></p>",

  tone:
    "✅ Informal, everyday Mexican Spanish.\n\n" +
    "✅ Can be teasing or confrontational… tone of voice is <strong>EVERYTHING</strong> here.",

  examples: [
    {
      spanish: "¿Tú qué te crees? ¿Por qué me estás dando órdenes?",
      english: "Who do you think you are?! Why are you bossing me around?"
    },
    {
      spanish: "¿Tú qué te crees? ¿José Ramón Fernández o qué? (real-life example 🎯)",
      english: "Who do you think you are? José Ramón Fernández or what?"
    }
  ],

  similarChunks:
    "<strong>¿Qué te crees?</strong>\n" +
    "<strong>Se cree mucho</strong>\n" +
    "<strong>¿Te crees muy muy, verdad?</strong>\n" +
    "<strong>¿Te crees mucho?</strong>\n" +
    "<strong>¿Pues quién te crees?</strong>\n" +
    "<strong>Ni que fueras</strong>",

  tags: [
    { label: "B2 (¡Nivelazo!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],
},
{
  slug: "tu-que-crees",
  title: "¿Tú qué crees?",
  category: "useful questions",

  meaning:
    "Super chunk time!! 🎉🍾\n\n" +
    "<strong>¿Tú qué crees?</strong> is a <strong>SUPER COMMON</strong>, colloquial way to ask someone’s opinion in Mexican Spanish.\n\n" +
    "It's a bit like saying:\n" +
    "👉 <strong>What do you think?</strong>\n\n" +
    "It’s friendly, conversational, and works in most everyday situations!",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to ask someone’s opinion in a casual sorta way:</p>" +

    "<p class='mb-4'><strong>¿Tú qué crees, deberíamos irnos ya?</strong><br>" +
    "<em>What do you think? Should we leave now?</em></p>" +

    "<p class='mb-6'><strong>Siento que el café sabe medio raro…¿tú qué crees?</strong><br>" +
    "<em>I feel like the coffee tastes kinda weird…what do you think?</em></p>",

  tone:
    "✅ Informal but polite.\n\n" +
    "✅ Great for everyday conversations.\n\n" +
    "🚫 <strong>NOT</strong> the go-to for formal writing.",

  examples: [
    {
      spanish: "Yo creo que tu papá quería otra niña. ¿Tú qué crees?",
      english: "I think your Dad wanted another girl (baby). What do you think?"
    },
    {
      spanish: "¿Tú qué crees, le digo o no?",
      english: "What do you think, should I tell him or not?"
    }
  ],

  similarChunks:
    "<strong>¿Cómo ves?</strong>\n" +
    "<strong>¿Qué te parece?</strong>\n" +
    "<strong>¿Qué opinas?</strong>\n" +
    "<strong>¿Qué piensas?</strong>\n" +
    "<strong>¿Te late?</strong>\n" +
    "<strong>¿O tú qué crees?</strong>\n" +
    "<strong>¿Qué dices?</strong>\n" +
    "<strong>¿No crees?</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],
},
{
  slug: "me-crees",
  title: "¿Me crees?",
  category: "useful questions",

  meaning:
    "In Mexican Spanish, this is the go-to way to check if someone thinks you’re telling the truth.\n\n" +
    "It normally translates well to:\n" +
    "👉 <strong>Do you believe me? / Can you believe it?</strong>\n\n\n" +
    "💡 Tone is everything here! It can sound pleading, curious, playful, or dramatic depending on how you say it!",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to check if someone believes you, or add emphasis to a truth that might be hard to believe:</p>" +

    "<p class='mb-4'><strong>Te juro que no fui yo. ¿Me crees?</strong><br>" +
    "<em>I swear it wasn't me. You believe me, right?</em></p>" +

    "<p class='mb-6'><strong>¡Me saqué la lotería! ¿Me crees?</strong><br>" +
    "<em>I won the lottery! Can you believe it?</em></p>",

  tone:
    "✅ Super common in everyday conversation.\n\n" +
    "✅ Works in friendly chats <strong>AND</strong> in more serious contexts.",

  examples: [
    {
      spanish: "Me dejó plantado… ¿me crees?",
      english: "He stood me up… can you believe it?"
    }
  ],

  similarChunks:
    "<strong>¿Me crees, verdad?</strong>\n" +
    "<strong>¿Sí, me crees?</strong>\n" +
    "<strong>¿Me crees o no?</strong>\n" +
    "<strong>¿Tú crees?</strong>\n" +
    "<strong>¿No me crees?</strong>\n" +
    "<strong>¿Me creerías si…?</strong>\n" +
    "<strong>¿Crees?</strong>",

  tags: [
    { label: "B1 (¡Ya le agarras la onda!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Colloquial 🗯️" }
  ],
},

{
  slug: "que-te-pasa",
  title: "¿Qué te pasa?",
  category: "useful questions",

  meaning:
    "This one’s a super common (and universal!) way to ask if someone’s upset, acting weird, or in a bad mood.\n\n" +
    "👉 <strong>What’s wrong with you? / What’s the matter? / What’s your problem?</strong>\n\n\n" +
    "💡Tone is literally of the essence here! Said gently, it’s <strong>“What’s wrong?”</strong>; said sharply, it’s <strong>“What’s your problem?”</strong> (eek!).\n",

  explanation:
    "<p class='text-xl font-semibold mt-2 mb-4'>Whenever you want to ask why someone looks sad or is acting off:</p>" +

    "<p class='mb-4'><strong>¿Qué te pasa, wey? Te ves todo bajoneado.</strong><br>" +
    "<em>What’s the matter, dude? You look really down.</em></p>" +

    "<hr class='my-8 border-t-2 border-gray-400' />" +

    "<p class='text-xl font-semibold mt-2 mb-4'>But it can also be used more aggressively to call out annoying behavior:</p>" +

    "<p class='mb-6'><strong>Oye, ¿qué te pasa? No son tus cosas</strong><br>" +
    "<em>Hey, what’s wrong with you? That’s not your stuff.</em></p>",

  tone:
    "✅ Neutral if said with concern.\n\n" +
    "✅ Can be confrontational if said with a sharper tone.",

  examples: [
    {
      spanish: "Te ves triste… ¿qué te pasa?",
      english: "You look sad… what’s wrong?"
    },
    {
      spanish: "¿Y ahora qué te pasa?",
      english: "Now what’s wrong?"
    }
  ],

  similarChunks:
    "<strong>¿Qué tienes?</strong>\n" +
    "<strong>¿Qué te pasó?</strong>\n" +
    "<strong>¿Qué sucede?</strong>\n" +
    "<strong>¿Qué traes?</strong>\n" +
    "<strong>¿Qué onda contigo?</strong>\n" +
    "<strong>¿Estás bien?</strong>\n" +
    "<strong>¿Todo bien?</strong>\n" +
    "<strong>¿Qué mosca te picó?</strong>\n" +
    "<strong>¿Y ahora?</strong>",

  tags: [
    { label: "A2 (¡Vas bien!)" },
    { label: "Used EVERYWHERE 🇲🇽" },
    { label: "Standard Spanish 😌" }
  ],
}
































































];

export default chunks;
