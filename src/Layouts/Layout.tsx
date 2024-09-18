import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"

export const Layout = ({ children }: any) => {
  return(
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
}
