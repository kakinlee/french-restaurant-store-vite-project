import './App.css'; 
import Layout from './page/layout.tsx';
import Home from './page/home.tsx';
import Restaurant from './page/restaurant.tsx';
import ProductsPage from './page/productsPage.tsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {
  

  return (
   
    
    <Router>
       <Routes>
      <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/productsPage" element={<ProductsPage/>} />
          
        </Route>  
      </Routes>
    </Router>

    

  )
}

export default App
