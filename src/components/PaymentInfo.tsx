import React from "react";

export default function PaymentInfo() {
  return (
    <section
      id="pix"
      className="w-full border-t border-b border-yellow-600 border-0_5 p-6 bg-yellow-500 text-neutral-900 mb-4"
    >
      <div className="max-w-2xl mx-auto text-left">
        <p className="mb-4">
          - Envie o comprovante para{" "}
          <a
            href="https://w.app/r2jac7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            62996116534
          </a>
          .
        </p>

        <h2 className="text-lg font-semibold mb-2">
          💲 <strong>PIX:</strong>
        </h2>

        <blockquote className="border-l-4 border-blue-600 pl-4 italic mb-4 text-neutral-800">
          <p>
            <strong>Chave Aleatória:</strong>{" "}
            341ac614-7167-416c-8054-2e39d34e73c9
          </p>
        </blockquote>

        <p>Gabriel de Morais Pereira / NUBANK</p>

        <p className="mt-4 italic text-sm text-neutral-800 font-medium">
          Não se esqueça de nos enviar o comprovante! ✅
        </p>
      </div>
    </section>
  );
}
