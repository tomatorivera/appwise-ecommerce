import { Link } from 'react-router-dom'
import { ProductoPreview } from '../../types/producto.types'

interface ProductCardProps {
  producto: ProductoPreview
}

const ProductCard = ({ producto }: ProductCardProps) => {
  return (
    <article className="overflow-hidden border border-gray-300 bg-white w-full">
      <img
        src={producto.thumbnail}
        alt={producto.title}
        className="h-70 w-full object-cover"
      />

      <section className="flex flex-col gap-3 p-4">
        <h2 className="line-clamp-2 text-lg font-semibold">{producto.title}</h2>
        <p className="text-2xl font-bold text-green-600">${producto.price}</p>

        <Link
          to={`/productos/${producto.id}`}
          className="mt-auto text-sm font-medium text-blue-600 hover:underline"
        >
          Leer más →
        </Link>
      </section>
    </article>
  )
}

export default ProductCard
