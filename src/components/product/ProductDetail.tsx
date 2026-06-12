import { Link } from 'react-router-dom'
import { Producto } from '../../types/producto.types'
import { useCarrito } from '../../features/carrito/useCarrito'

const ProductDetail = ({ producto }: { producto: Producto }) => {
  const { agregarItem } = useCarrito()

  const handleAddToCart = () => {
    agregarItem(producto)
  }

  return (
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
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline mb-6"
          >
            ← Volver al catálogo
          </Link>

          <span className="bg-blue-200 border border-blue-500 px-3 py-1 inline-block rounded-4xl text-blue-700">
            #{producto.category}
          </span>
        </div>

        <div className="my-4">
          <h1 className="font-bold text-2xl">{producto.title}</h1>

          <p className="text-gray-500">
            Valorado en <strong>{producto.rating}</strong>/<strong>5</strong> ★
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

          <button
            onClick={handleAddToCart}
            className="bg-white inline-block text-green-600 border border-green-600 py-2 px-4 rounded-xl cursor-pointer hover:border-green-700 hover:text-green-700 transition-colors"
          >
            Agregar al carrito
          </button>
        </div>

        <p>
          🔥 <strong>{producto.stock}</strong> unidades restantes
        </p>
      </div>
    </section>
  )
}

export default ProductDetail
