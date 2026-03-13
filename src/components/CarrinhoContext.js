"use client"
import { createContext, useState } from "react"

export const CarrinhoContext = createContext()

export function CarrinhoProvider({ children }) {

  const [carrinho, setCarrinho] = useState([])

  function adicionarProduto(produto){
    setCarrinho([...carrinho, produto])
  }

  return (
    <CarrinhoContext.Provider value={{carrinho, adicionarProduto}}>
      {children}
    </CarrinhoContext.Provider>
  )
}