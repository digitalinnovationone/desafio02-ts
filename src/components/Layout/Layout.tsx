import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"

export const Layout = ({ children }: any) => {
  return(
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
}
