import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Apartment from './pages/Apartment'
import Error from './pages/Error'

function Chemin() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/apartment" element={<Apartment />} />
  
      <Route path="*" element={<Error />} /> 
    </Routes>
  )
}

export default Chemin;






