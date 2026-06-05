import ItemsGrid from '../components/ItemsGrid'
import ProductCard from '../components/product/ProductCard'
import { useProductos } from '../hooks/useProductos'

const Catalogo = () => {
  const status = useProductos()

  return (
    <main>
      <h1 className="font-bold text-4xl">Catálogo de productos</h1>

      {status.status === 'loading' && <p>Cargando...</p>}
      {status.status === 'error' && <p>Error cargando los productos</p>}

      {status.status === 'success' && (
        <ItemsGrid
          items={status.data.products}
          renderItem={(producto) => (
            <ProductCard key={producto.id} producto={producto} />
          )}
        />
      )}
    </main>
  )
}

export default Catalogo
