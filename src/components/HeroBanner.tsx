import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden">
      <Image
        src="/images/banner.webp"
        alt="Banner Banana Bipolar"
        layout="fill"
        objectFit="cover"
        priority
        className="brightness-[0.7]"
      />

      {/* Imagem sobreposta central */}

      <Image
        src="/images/logo2.webp" // Substitua pela imagem pequena
        alt="Selo Banana Bipolar"
        width={120}
        height={120}
        className="absolute bottom-[-45px] left-6 drop-shadow-lg"
      />
    </div>
  );
}
