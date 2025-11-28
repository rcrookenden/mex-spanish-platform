export default function BadgePreview() {
  // All tags + colors
  const tags = [
    // DIFFICULTY LEVEL
    { label: "A1 (¡Vas empezando!)", color: "bg-[#e7000b] text-white" },
    { label: "A2 (¡Vas bien!)", color: "bg-[#e7000b] text-white" },
    { label: "B1 (¡Ya le agarras la onda!)", color: "bg-[#e7000b] text-white" },
    { label: "B2 (¡Nivelazo!)", color: "bg-[#e7000b] text-white" },
    { label: "C1 (¡Eres un chingón!)", color: "bg-[#e7000b] text-white" },

    // LOCATION
    { label: "Costeño 🌴", color: "bg-[#32A8C2] text-white" },
    { label: "Norteño 🐮", color: "bg-[#C28F4A] text-white" },
    { label: "Chilango 🚇", color: "bg-[#E5007E] text-white" },
    { label: "Sureño 🐆", color: "bg-[#2F855A] text-white" },
    { label: "Yucateco 🛕", color: "bg-[#1ABC9C] text-white" },
    { label: "Fronterizo 🚧", color: "bg-[#4A6FA5] text-white" },
    { label: "Used EVERYWHERE 🇲🇽", color: "bg-[#008236] text-white" },

    // SOCIAL VIBE
    { label: "Fresa 🍓", color: "bg-[#FF4FA3] text-white" },
    { label: "Barrio 🧢", color: "bg-amber-700 text-white" },
    { label: "Queer 🏳️‍🌈", color: "bg-gradient-to-r from-[#FF6B6B] via-[#F7D154] to-[#6A5ACD] text-black" },
    { label: "Chavitos 👟", color: "bg-[#7CFC00] text-black" },
    { label: "Abuela-approved 👵", color: "bg-[#C47E39] text-white" },

    // GENERACIÓN
    { label: "Boomers 👶", color: "bg-[#90A4AE] text-black" },
    { label: "Gen X 🎸", color: "bg-[#607D8B] text-white" },
    { label: "Millennial 😎", color: "bg-[#26A69A] text-white" },
    { label: "Gen Z 👾", color: "bg-[#C084FC] text-black" },

    // TONE
    { label: "Formal 💼", color: "bg-[#4A85A0] text-white" },
    { label: "Colloquial 🗯️", color: "bg-[#4f39f6] text-white" },
    { label: "Slang 🌶️", color: "bg-[#FF6A3D] text-white" },
    { label: "MUY informal 💀", color: "bg-[#333333] text-white" },
    { label: "Standard Spanish 😌", color: "bg-[#fdc700] text-black" },
    { label: "Standard Mexican Spanish 💀", color: "bg-[#5CB85C] text-white" },

    // OTHERS
    { label: "Academic 🤓", color: "bg-[#4169E1] text-white" },
    { label: "Offensive (light) ⚠️", color: "bg-[#F4D03F] text-black" },
    { label: "Offensive (strong) ⚠️", color: "bg-[#F39C12] text-black" },
    { label: "Offensive (extreme) ⚠️", color: "bg-[#E53935] text-white" },
    { label: "Rare 🦄", color: "bg-[#DDA0DD] text-black" },
    { label: "Dated 📼", color: "bg-[#BCAAA4] text-black" },
  ];

  return (
    <div className="min-h-screen bg-[#f7f7f7] p-10 font-baloo">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10">
        
        <h1 className="text-4xl font-extrabold text-green-700 mb-8 text-center">
          Badge Color Preview 🎨
        </h1>

        <p className="text-gray-700 text-center mb-10">
          This page shows <strong>every tag + color</strong> so you can visually confirm the color scheme.
        </p>

        <div className="flex flex-wrap gap-4">
          {tags.map((tag, i) => (
            <span 
              key={i}
              className={`${tag.color} px-4 py-2 rounded-full text-lg font-semibold shadow-sm`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
