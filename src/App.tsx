import './App.css'; 
import Slide from './components/slide.tsx'
import Header from './components/header.tsx'
import Card from './components/card.tsx'
import Footer from './components/footer.tsx'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div>
    <Header />
    <Slide />
    <Card />
    <Footer />
    </div>
  )
}

export default App
