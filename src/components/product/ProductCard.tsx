import { Link } from 'react-router-dom'
import { ProductoPreview } from '../../types/producto.types'

interface ProductCardProps {
  producto: ProductoPreview
}

const ProductCard = ({ producto }: ProductCardProps) => {
  return (
    <Link
      to={`/producto/${producto.id}`}
      className="mt-auto text-sm font-medium w-full h-full"
    >
      <article className="overflow-hidden border border-gray-300 bg-white w-full h-full flex flex-col">
        <img
          src={producto.thumbnail}
          alt={producto.title}
          className="h-70 w-full object-cover"
        />

        <section className="flex flex-col gap-3 p-4 justify-between flex-1">
          <div>
            <h2 className="line-clamp-2 text-lg font-semibold">
              {producto.title}
            </h2>
            <p className="text-2xl font-bold text-green-600">
              ${producto.price}
            </p>
          </div>

          <div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl cursor-pointer"
              // onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleAddItemToCart(producto.title, e)}
            >
              Agregar al carrito
            </button>
          </div>
        </section>
      </article>
    </Link>
  )
}

export default ProductCard
