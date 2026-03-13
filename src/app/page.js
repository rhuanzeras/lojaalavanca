"use client"

export default function Home() {

  const produtos = [
    {
      id: 1,
      nome: "Camisa Atlética Alavanca",
      preco: 79.90,
      img: "https://via.placeholder.com/400"
    },
    {
      id: 2,
      nome: "Short Esportivo",
      preco: 59.90,
      img: "https://via.placeholder.com/400"
    },
    {
      id: 3,
      nome: "Boné Alavanca",
      preco: 49.90,
      img: "https://via.placeholder.com/400"
    },
    {
      id: 4,
      nome: "Moletom Alavanca",
      preco: 129.90,
      img: "https://via.placeholder.com/400"
    }
  ];


  async function comprar(produto){

    const res = await fetch("/api/pagamento",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(produto)
    })

    const data = await res.json()

    window.location.href = data.url
  }


  return (
    <main style={{fontFamily:"Arial, sans-serif"}}>

      {/* NAVBAR */}
      <header style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"20px 60px",
        background:"#0f0f0f",
        color:"white"
      }}>

        <div style={{display:"flex",alignItems:"center",gap:"15px"}}>
          <img src="/logo.png" width="60" />
          <h2 style={{color:"#ff6a00"}}>ALAVANCA</h2>
        </div>

        <nav style={{display:"flex",gap:"30px"}}>
          <a style={{cursor:"pointer"}}>Produtos</a>
          <a style={{cursor:"pointer"}}>Masculino</a>
          <a style={{cursor:"pointer"}}>Feminino</a>
          <a style={{cursor:"pointer"}}>Carrinho</a>
        </nav>

      </header>


      {/* BANNER */}
      <section style={{
        height:"420px",
        background:"#111",
        color:"white",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
      }}>

        <h1 style={{
          fontSize:"52px",
          color:"#ff6a00",
          marginBottom:"10px"
        }}>
          Nova Coleção
        </h1>

        <p style={{fontSize:"18px"}}>
          Loja oficial da Atlética Alavanca
        </p>

        <button style={{
          marginTop:"25px",
          padding:"14px 35px",
          border:"none",
          background:"#ff6a00",
          color:"white",
          fontWeight:"bold",
          cursor:"pointer",
          fontSize:"16px",
          borderRadius:"5px"
        }}>
          Comprar agora
        </button>

      </section>


      {/* PRODUTOS */}
      <section style={{
        padding:"70px",
        background:"#f5f5f5"
      }}>

        <h2 style={{
          marginBottom:"40px",
          fontSize:"28px"
        }}>
          Produtos
        </h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(4,1fr)",
          gap:"30px"
        }}>

          {produtos.map(produto => (

            <div key={produto.id} style={{
              background:"white",
              borderRadius:"10px",
              overflow:"hidden",
              boxShadow:"0 5px 15px rgba(0,0,0,0.1)"
            }}>

              <img src={produto.img} width="100%" />

              <div style={{padding:"20px"}}>

                <h3 style={{marginBottom:"10px"}}>
                  {produto.nome}
                </h3>

                <p style={{
                  fontWeight:"bold",
                  marginBottom:"15px"
                }}>
                  R$ {produto.preco}
                </p>

                <button
                  onClick={()=>comprar(produto)}
                  style={{
                    width:"100%",
                    padding:"12px",
                    background:"#ff6a00",
                    color:"white",
                    border:"none",
                    fontWeight:"bold",
                    cursor:"pointer",
                    borderRadius:"5px"
                  }}
                >
                  Comprar
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}