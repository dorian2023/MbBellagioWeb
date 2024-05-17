import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layaut from './components/layaut'
import Tiendas from './components/Tienda'
import Productos from './components/Producto.jsx'
import Cabecera from './components/Cabecera'

import './index.css'


function App() {


  return (
    <>
      <div className="text-white bg-black min-h-screen">
      
            {/* <Router>
              <Route path='/Tiendas' element={<Tiendas/>}   />
              <Route path='/Productos' element={<Productos/>} />
            </Router>  */}
        <Cabecera />

        <Layaut>
  
          <h1>Muebles Bellagio</h1>
        </Layaut>
         <Tiendas />
        <Productos /> 
      </div>

    </>
  )
}


export default App
