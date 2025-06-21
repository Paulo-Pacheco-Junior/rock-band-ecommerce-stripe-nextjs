import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Merchandising Banana Bipolar",
  description:
    "E a máquina de moer gente segue a todo vapor, como um espectro que ninguém vê. Por trás de todos os males, aquém de toda realidade, cada dia mais insaciável. Sempre aqui, presente, antes e depois de nossa efêmera passagem.",
  openGraph: {
    title: "Merchandising Banana Bipolar",
    description:
      "Apoie a banda e adquira nossos produtos exclusivos. Camisetas, adesivos, zine e muito mais!",
    url: "https://bananabipolar.vercel.app",
    siteName: "Merchandising Banana Bipolar",
    images: [
      {
        url: "https://bananabipolar.vercel.app/images/camiseta-banana-bipolar.webp",
        width: 1200,
        height: 630,
        alt: "Camiseta Banana Bipolar",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merchandising Banana Bipolar",
    description:
      "Apoie a banda e adquira nossos produtos exclusivos. Camisetas, adesivos, zine e muito mais!",
    images: [
      "https://bananabipolar.vercel.app/images/camiseta-banana-bipolar.webp",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} font-sans`}>{children}</body>
    </html>
  );
}
