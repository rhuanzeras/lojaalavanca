import mercadopago from "mercadopago";

mercadopago.configure({
  access_token: "APP_USR-8919716877152482-031315-d65772af8f90cd6aba4c3b0cdff791c2-3264695611"
});

export async function POST(req) {

  const produto = await req.json();

  const preference = {
    items: [
      {
        title: produto.nome,
        quantity: 1,
        currency_id: "BRL",
        unit_price: Number(produto.preco)
      }
    ]
  };

  const response = await mercadopago.preferences.create(preference);

  return Response.json({
    url: response.body.init_point
  });

}