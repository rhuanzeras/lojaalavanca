export default function Home() {
  const produtos = [
    {
      id: 1,
      nome: "Camisa Atlética Alavanca",
      preco: "R$ 79,90",
      imagem: "https://via.placeholder.com/300"
    },
    {
      id: 2,
      nome: "Short Esportivo",
      preco: "R$ 59,90",
      imagem: "https://via.placeholder.com/300"
    },
    {
      id: 3,
      nome: "Boné Alavanca",
      preco: "R$ 49,90",
      imagem: "https://via.placeholder.com/300"
    }
  ];

  return (
    <main style={{padding: "40px"}}>
      <h1>Loja Atlética Alavanca</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        marginTop: "30px"
      }}>

        {produtos.map(produto => (
          <div key={produto.id} style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px"
          }}>
            <img src={produto.imagem} width="100%" />
            <h2>{produto.nome}</h2>
            <p>{produto.preco}</p>
            <button>Comprar</button>
          </div>
        ))}

      </div>
    </main>
  );
}