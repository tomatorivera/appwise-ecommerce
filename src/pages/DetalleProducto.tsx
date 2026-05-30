import { Link, Navigate, useParams } from 'react-router-dom'
import { useProducto } from '../hooks/useProductos'

const DetalleProducto = () => {
  const { id } = useParams()
  const { producto } = useProducto(Number(id))

  if (!producto) {
    return <Navigate to="/catalogo" replace />
  }

  return (
    <main className="max-w-7xl mx-auto p-4">
      <section className="flex justify-center items-stretch gap-2 border border-gray-300 flex-col md:flex-row">
        <figure className="w-full md:w-1/2">
          <img
            src={producto.thumbnail}
            alt={`Imagen del producto ${producto.title}`}
            className="object-cover h-full w-full"
          />
        </figure>
        <div className="flex-1 p-5 flex flex-col justify-center">
          <div>
            <span className="bg-blue-200 border border-blue-500 px-3 py-1 inline-block rounded-4xl text-blue-700">
              #{producto.category}
            </span>
          </div>

          <div className="my-4">
            <h1 className="font-bold text-2xl">{producto.title}</h1>
            <p className="text-gray-500">
              Valorado en <strong>{producto.rating}</strong>/<strong>5</strong>{' '}
              ★
            </p>
          </div>

          <p className="font-bold text-5xl text-blue-500">
            $ {producto.price.toFixed(2)}
          </p>
          <p className="my-6 text-gray-600">{producto.description}</p>

          <div className="my-4 flex items-center gap-4">
            <button className="bg-green-600 inline-block text-white py-2 px-4 rounded-xl cursor-pointer hover:bg-green-700 transition-colors">
              Comprar ahora
            </button>
            <Link
              to="/catalogo"
              className="inline-block text-sm font-medium text-blue-600 hover:underline"
            >
              Volver al catálogo
            </Link>
          </div>

          <p>
            🔥 <strong>{producto.stock}</strong> unidades restantes
          </p>
        </div>
      </section>
    </main>
  )
}

export default DetalleProducto
