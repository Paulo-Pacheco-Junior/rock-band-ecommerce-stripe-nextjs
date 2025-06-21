import React from "react";

export default function PaymentInfo() {
  return (
    <section
      id="pix"
      className="border border-gray-700 border-0_5 p-6 rounded shadow-sm max-w-xl mx-auto md:max-w-4xl bg-neutral-800 text-gray-100 mb-4"
    >
      <p className="mb-4">
        - Envie o comprovante para{" "}
        <a
          href="https://w.app/r2jac7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          62996116534
        </a>
        .
      </p>

      <h2 className="text-lg font-semibold mb-2">
        💲 <strong>PIX:</strong>
      </h2>

      <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-4 text-gray-300">
        <p>
          <strong>Chave Aleatória:</strong> 341ac614-7167-416c-8054-2e39d34e73c9
        </p>
      </blockquote>

      <p>Gabriel de Morais Pereira / NUBANK</p>

      <p className="mt-4 italic text-sm text-gray-400">
        Não se esqueça de nos enviar o comprovante! 😉
      </p>
    </section>
  );
}
