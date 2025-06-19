
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Home from "./Home"
import Sobre from "./Sobre"
import N from "./null"
import Unico from "./unico"

function App(){


  return(

    <BrowserRouter>


    <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/Sobre" element={<Sobre/>}></Route>
      <Route path="/null" element={<N/>}></Route>
      <Route path="/Id" element={<Unico/>}></Route>
    </Routes>
    
    </BrowserRouter>
  )
    
    
}

export default App