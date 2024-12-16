
import { Outlet } from "react-router-dom"
import Header from '../components/header.tsx'
import Footer from '../components/footer.tsx'
import Cart from '../components/cart.tsx'
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

const Layout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
      <Outlet />
      </Container>
      <Cart />
      <Footer />
    </>
  )
}

export default Layout