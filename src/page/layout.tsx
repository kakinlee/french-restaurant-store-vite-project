
import { Outlet } from "react-router-dom"
import Header from '../components/header.tsx'
import Footer from '../components/footer.tsx'
import Cart from '../components/cart.tsx'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Cart />
      <Footer />
    </>
  )
}

export default Layout