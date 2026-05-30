import ItemsGrid from '../components/ItemsGrid'
import ProductCard from '../components/product/ProductCard'
import { useProductos } from '../hooks/useProductos'

const Catalogo = () => {
  const { productos } = useProductos()

  return (
    <main className="max-w-7xl mx-auto p-4">
      <h1 className="font-bold text-4xl">Catálogo de productos</h1>

      <ItemsGrid
        items={productos}
        renderItem={(producto) => (
          <ProductCard key={producto.id} producto={producto} />
        )}
      />
    </main>
  )
}

export default Catalogo
