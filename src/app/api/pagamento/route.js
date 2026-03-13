import mercadopago from "mercadopago";

mercadopago.configure({
  access_token: process.env.MERCADO_PAGO_TOKEN
});

export async function POST(req){

  const produto = await req.json();

  const preference = {
    items: [
      {
        title: produto.nome,
        quantity: 1,
        currency_id: "BRL",
        unit_price: Number(produto.preco)
      }
    ],

    back_urls:{
      success:"https://lojaalavanca.netlify.app/sucesso",
      failure:"https://lojaalavanca.netlify.app/erro",
      pending:"https://lojaalavanca.netlify.app/pendente"
    },

    auto_return:"approved"
  };

  const response = await mercadopago.preferences.create(preference);

  return Response.json({
    url: response.body.init_point
  });

}