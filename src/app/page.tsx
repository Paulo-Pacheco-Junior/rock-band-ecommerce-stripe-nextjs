import ProductCard from "../components/ProductCard";

const products = [
  {
    id: "1",
    name: "Camisa Banana Bipolar",
    description: `
        Todas as nossas camisetas são confeccionadas em malha 100% algodão,
        fio 30.1 penteado e com costura ombro a ombro.

        Medidas:
        P = 71cm x 55cm
        M = 74cm x 57cm
        G = 78cm x 60cm
        GG = 81cm x 63cm
        EXG = 85cm x 66cm

        Ao comprar você:
        - Ganha kit exclusivo com 2 adesivos em vinil fosco, 1 adesivo holográfico e o Zine "O Fim da Banana Bipolar - A Verdade Sobre o Fim";
        
        - Recebe 10% de desconto na camisa;
        
        - Ajuda a banda diretamente a financiar os próximos lançamentos e shows;
        
        - Entra pro nosso grupo/lista de apoiadores. ❤
`,
    image:
      "https://img.notionusercontent.com/s3/prod-files-secure%2Ff072c086-4e67-421c-b612-5d9f43ae2f7f%2Ffecc701b-4c97-4deb-8ebf-9db48c083081%2FSAVE_20250116_100755.jpg/size/w=1420?exp=1750431106&sig=5bUxR8In3JvsfDuUJaFEAh74KZuuY4zNID2osOchWAw&id=1772611f-0ec9-80ed-96ed-d19a7d5bbd14&table=block",
    price: 7000,
  },
  {
    id: "2",
    name: "“Espectrificação”, adesivo em vinil fosco 5,5cm x 5,5cm",
    description: "",
    image:
      "https://img.notionusercontent.com/s3/prod-files-secure%2Ff072c086-4e67-421c-b612-5d9f43ae2f7f%2F2a81205e-147c-4b61-8e75-c1ef61381403%2FImagem_do_WhatsApp_de_2025-01-13_(s)_00.56.38_09dacc39.jpg/size/w=1360?exp=1750431309&sig=UL_ujaSxLcoGV3oizz_p0GkrNEI2fcSqm7yZRmpJHo8&id=19a2611f-0ec9-800c-ae71-e6091d47aefd&table=block",
    price: 500,
  },
  {
    id: "3",
    name: "Espectros & Banana, adesivo em vinil fosco 5,5cm x 8cm",
    description: "",
    image:
      "https://img.notionusercontent.com/s3/prod-files-secure%2Ff072c086-4e67-421c-b612-5d9f43ae2f7f%2F3019472a-b56d-472a-af21-d9a14569993e%2FImagem_do_WhatsApp_de_2025-01-13_(s)_00.56.37_c4ac4044.jpg/size/w=1360?exp=1750432504&sig=_uCxF7zsVnahiArudIAnOyacHY0YBB93Vebr2UkZt4o&id=19a2611f-0ec9-8019-bfdc-e442bf338243&table=block",
    price: 500,
  },
  {
    id: "4",
    name: "Espectros devorando o mundo, adesivo holográfico 7cm x 4cm",
    description: "",
    image:
      "https://img.notionusercontent.com/s3/prod-files-secure%2Ff072c086-4e67-421c-b612-5d9f43ae2f7f%2F0a85dc78-71d2-46e3-81d0-294f269e5211%2FImagem_do_WhatsApp_de_2025-01-13_(s)_00.56.38_df9d9e65.jpg/size/w=1360?exp=1750432536&sig=b3SF_iUlsW-y9Ozw_ptlJIah5vAJ4Z3I_mhU1H3D1cM&id=19a2611f-0ec9-8029-a046-ff7bb963caf0&table=block",
    price: 500,
  },
  {
    id: "5",
    name: "Zine “O Fim da Banana Bipolar - A Verdade Sobre o Fim”",
    description: "",
    image:
      "https://img.notionusercontent.com/s3/prod-files-secure%2Ff072c086-4e67-421c-b612-5d9f43ae2f7f%2F91bd9cfc-d0cd-4d9c-9501-534e00d46f26%2Fimage.png/size/w=1160?exp=1750432588&sig=jb8cj1Gun_lIb1CnLX4r2QIOZ_kkHUcWMrooe6FwRiM&id=19a2611f-0ec9-8078-8002-ea64b0fc42df&table=block",
    price: 500,
  },
  {
    id: "6",
    name: "Ecobag de ‘Cigarro’",
    description: `
      Comprimento: 30 cm,
      Largura: 30 cm,
      Altura da Alça: 60 cm`,
    image:
      "https://img.notionusercontent.com/s3/prod-files-secure%2Ff072c086-4e67-421c-b612-5d9f43ae2f7f%2Fdd6736fb-62ae-4c28-8ed4-ca538c02d65c%2Fecobag_copiar.jpg/size/w=1420?exp=1750432612&sig=NSkteLYhnrdisnAlqTQXsNyyR74oHsaW-7_BekNUmwg&id=1bc2611f-0ec9-8030-89f4-e00b1e5e365d&table=block",
    price: 4000,
  },
  {
    id: "7",
    name: "Kit Completo com Desconto",
    description: "",
    image:
      "https://img.notionusercontent.com/s3/prod-files-secure%2Ff072c086-4e67-421c-b612-5d9f43ae2f7f%2F1de7c1f1-fce3-4a4c-a1a7-a45df0351008%2Fsasa.jpg/size/w=2000?exp=1750433305&sig=UdcFhxXy42YdB1OIh5mVr7o9-kGWMaqavFXkkXzknNQ&id=1772611f-0ec9-80a7-9db7-f30e8a579bbf&table=block",
    price: 11000,
  },
];

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}
