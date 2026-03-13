
import { CarrinhoProvider } from "../components/CarrinhoContext"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <CarrinhoProvider>
          {children}
        </CarrinhoProvider>
      </body>
    </html>
  )
}