"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Banana Bipolar"
            width={40}
            height={40}
            className="rounded-full border border-yellow-400"
          />
          <span className="text-md font-bold text-yellow-300 tracking-wider">
            Merchandising Banana Bipolar
          </span>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="#produtos" className="hover:text-yellow-400">
            Produtos
          </Link>
          <Link href="#pix" className="hover:text-yellow-400">
            Pix
          </Link>
          <Link href="#apoiadores" className="hover:text-yellow-400">
            Apoiadores
          </Link>
        </nav>

        {/* Menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Abrir menu"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>
      </div>

      {/* Dropdown mobile */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 pb-4">
          <nav className="flex flex-col gap-4 text-sm">
            <Link href="#produtos" className="hover:text-yellow-400">
              Produtos
            </Link>
            <Link href="#pix" className="hover:text-yellow-400">
              Pix
            </Link>
            <Link href="#apoiadores" className="hover:text-yellow-400">
              Apoiadores
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
