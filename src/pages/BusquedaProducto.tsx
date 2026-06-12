import { useSearchParams } from 'react-router-dom'
import ItemsGrid from '../components/ItemsGrid'
import ProductCard from '../components/product/ProductCard'
import { useCarrito } from '../features/carrito/useCarrito'
import { useProductos } from '../hooks/useProductos'

const BusquedaProducto = () => {
  const { agregarItem } = useCarrito()
  const [searchParams] = useSearchParams()
  const response = useProductos(searchParams.get('search') ?? '')

  return (
    <main>
      {response.status === 'loading' && <p>Cargando...</p>}
      {response.status === 'error' && <p>Error cargando los productos</p>}

      {response.status === 'success' && (
        <ItemsGrid
          items={response.data.products}
          renderItem={(producto) => (
            <ProductCard
              key={producto.id}
              producto={producto}
              agregarCarrito={agregarItem}
            />
          )}
        />
      )}
    </main>
  )
}

export default BusquedaProducto
