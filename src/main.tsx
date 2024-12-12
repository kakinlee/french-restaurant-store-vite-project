import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Slide from './slide.tsx'
import Header from './components/header.tsx'
import Card from './components/card.tsx'
import Footer from './components/footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Header />
     <Slide />
     <Card />
     <Footer />
    <App />
  </StrictMode>,
)
