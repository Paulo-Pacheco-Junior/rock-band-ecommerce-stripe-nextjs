import Link from "next/link";

export default function Success() {
  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h1>Pagamento realizado com sucesso! 🎉</h1>
      <p>
        Obrigado pela sua compra. Em breve você receberá a confirmação no seu
        e-mail.
      </p>
      <Link href="/">
        <a style={{ color: "blue", textDecoration: "underline" }}>
          Voltar para a página inicial
        </a>
      </Link>
    </div>
  );
}
