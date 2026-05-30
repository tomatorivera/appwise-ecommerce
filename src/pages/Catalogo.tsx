import ProductCard from '../components/product/ProductCard'
import { useProductos } from '../hooks/useProductos'

const Catalogo = () => {
  const { productos } = useProductos()

  return (
    <main className="max-w-7xl mx-auto p-4">
      <h1 className="font-bold text-4xl">Catálogo de productos</h1>

      <section className="py-5 grid grid-cols-1 gap-6 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productos.map((p) => {
          return <ProductCard key={p.id} producto={p} />
        })}
      </section>
    </main>
  )
}

export default Catalogo
