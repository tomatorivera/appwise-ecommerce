import ItemsGrid from '../components/ItemsGrid'
import ProductCard from '../components/product/ProductCard'
import { useCarrito } from '../features/carrito/useCarrito'
import { useProductos } from '../hooks/useProductos'

const Catalogo = () => {
  const status = useProductos()
  const { agregarItem } = useCarrito()

  return (
    <main>
      <h1 className="font-bold text-4xl">Catálogo de productos</h1>

      {status.status === 'loading' && <p>Cargando...</p>}
      {status.status === 'error' && <p>Error cargando los productos</p>}

      {status.status === 'success' && (
        <ItemsGrid
          items={status.data.products}
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

export default Catalogo
