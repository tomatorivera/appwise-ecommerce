import { useParams } from 'react-router-dom'
import { useProduct } from '../hooks/useProductos'
import ProductDetail from '../components/product/ProductDetail'

const DetalleProducto = () => {
  const { id } = useParams()
  const response = useProduct(Number(id))

  return (
    <main>
      {/* Todo: skeleton  */}
      {response.status == 'loading' && <p>Cargando...</p>}

      {/* Todo: error page */}
      {response.status == 'error' && <p>Error</p>}

      {response.status == 'success' && (
        <ProductDetail producto={response.data} />
      )}
    </main>
  )
}

export default DetalleProducto
