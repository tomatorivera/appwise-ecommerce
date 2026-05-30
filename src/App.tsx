import { Link } from 'react-router-dom'

function App() {
  // Todo: reemplazar con homepage

  return (
    <div className="h-screen w-screen bg-blue-500 flex flex-col justify-center items-center">
      <h1 className="text-white">Hola mundo desde e-commerce</h1>

      <Link to="/catalogo" className="text-white underline font-semibold">
        Ir al catálogo →
      </Link>
    </div>
  )
}

export default App
