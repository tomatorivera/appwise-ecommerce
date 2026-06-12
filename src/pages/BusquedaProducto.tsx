import { useSearchParams } from 'react-router-dom'
import ItemsGrid from '../components/ItemsGrid'
import ProductCard from '../components/product/ProductCard'
import { useCarrito } from '../features/carrito/useCarrito'
import { useProductos } from '../hooks/useProductos'
import FilterBar from '../components/bar/FilterBar'

const BusquedaProducto = () => {
  const { agregarItem } = useCarrito()
  const [searchParams] = useSearchParams()
  const response = useProductos(searchParams.get('search') ?? '')

  return (
    <main>
      {response.status === 'loading' && <p>Cargando...</p>}
      {response.status === 'error' && <p>Error cargando los productos</p>}

      {response.status === 'success' && (
        <section className="grid grid-cols-1 sm:grid-cols-[250px_1fr] gap-4">
          <FilterBar />
          <ItemsGrid
            items={response.data.products}
            cols={4}
            renderItem={(producto) => (
              <ProductCard
                key={producto.id}
                producto={producto}
                agregarCarrito={agregarItem}
              />
            )}
          />
        </section>
      )}
    </main>
  )
}

export default BusquedaProducto
