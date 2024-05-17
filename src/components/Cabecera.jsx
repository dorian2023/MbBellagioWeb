const Cabecera = () => {
  return (
    <>
    <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            
            <img className="w-11 h-11 text-white rounded-full" src="https://i.ibb.co/PD2gLMZ/logo23.jpg" alt="logo23" border="0" />
            <span className="ml-3 text-xl text-gray-500 ">Muebles Bellagio</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 button">Inicio</a>
            <a className="mr-5 button">Productos</a>
            <a className="mr-5 button">Tiendas</a>
            <a className="mr-5 button">Contacto</a>
            </nav>
            <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none button rounded text-base mt-4 md:mt-0"> Ingresar
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            </button>
        </div>
        </header>
    
    
    </>
  )
}
export default Cabecera
