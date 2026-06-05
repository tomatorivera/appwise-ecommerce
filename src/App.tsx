import { Link } from 'react-router-dom'

function App() {
  // Todo: reemplazar con homepage

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1>Hola mundo desde e-commerce</h1>

      <Link to="/catalogo" className="underline font-semibold">
        Ir al catálogo →
      </Link>
    </div>
  )
}

export default App
