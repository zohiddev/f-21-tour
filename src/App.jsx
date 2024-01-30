import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from "./page/Home"
import About from "./page/About"
import Header from './components/Header'
import Contact from './page/contact'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="continer">
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='Home' element={<Home />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </div >
    </div >
  )
}

export default App

