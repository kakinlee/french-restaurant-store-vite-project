
import { Outlet } from "react-router-dom"
import Header from '../components/header.tsx'
import Footer from '../components/footer.tsx'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout