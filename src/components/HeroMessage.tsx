export default function HeroMessage() {
  const versosMobile = [
    "E a máquina de moer gente",
    "segue a todo vapor, como",
    "um espectro que ninguém vê.",
    "Por trás de todos os males,",
    "aquém de toda realidade,",
    "cada dia mais insaciável.",
    "Sempre aqui, presente,",
    "antes e depois de nossa",
    "efêmera passagem.",
  ];

  return (
    <>
      <h1 className="font-extrabold text-xl text-neutral-900 px-6 mt-12 mb-8 text-center">
        Merchandising Banana Bipolar
      </h1>

      <section className="bg-yellow-500 py-6 px-6 md:text-center rounded-sm shadow-lg border border-yellow-600 max-w-4xl md:max-w-full mx-auto">
        <div className="text-md italic text-white md:max-w-fit tracking-tight leading-tight text-left space-y-2 md:space-y-1 md:mx-auto md:text-center">
          {/* MOBILE */}
          <p className="block md:hidden max-w-max mx-auto space-y-1">
            {versosMobile.map((linha, i) => (
              <span key={i} className="block bg-[#5b1e17] px-2">
                {linha}
              </span>
            ))}
          </p>

          {/* DESKTOP */}
          <p className="hidden md:block bg-[#5b1e17] px-2 py-0.5">
            E a máquina de moer gente, segue a todo vapor, como um espectro que
            ninguém vê.
          </p>
          <p className="hidden md:block bg-[#5b1e17] px-2 py-0.5">
            Por trás de todos os males, aquém de toda realidade, cada dia mais
            insaciável.
          </p>
          <p className="hidden md:block bg-[#5b1e17] px-2 py-0.5">
            Sempre aqui, presente, antes e depois de nossa efêmera passagem.
          </p>
        </div>
      </section>
    </>
  );
}
