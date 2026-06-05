import { useEffect, useState } from 'react'
import { MOCK_PRODUCTOS } from '../data/productos'
import { EstadoAsync } from '../types/generic.types'
import { ProductoResponse } from '../types/producto.types'

export function useProductosMock() {
  // Todo: traer datos desde la API e implementar estados
  // para la espera de datos
  const productos = MOCK_PRODUCTOS

  return {
    productos,
  }
}

export function useProductoMock(id: number) {
  const producto = MOCK_PRODUCTOS.find((producto) => producto.id === id)

  return {
    producto,
  }
}

export function useProductos(search?: string) {
  const [status, setStatus] = useState<EstadoAsync<ProductoResponse>>({
    status: 'idle',
  })

  const apiUrl = search?.trim()
    ? `https://dummyjson.com/products/search?q=${search}`
    : 'https://dummyjson.com/products?limit=20&skip=0'

  useEffect(() => {
    const controller = new AbortController()

    const cargar = async () => {
      setStatus({ status: 'loading' })

      try {
        const response = await fetch(apiUrl, {
          signal: controller.signal,
        })

        if (!response.ok)
          throw new Error(
            `Ocurrió un error obteniendo los productos - HTTP STATUS: ${response.status}`
          )

        const responseData: ProductoResponse = await response.json()
        setStatus({
          status: 'success',
          data: responseData,
        })
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return

        setStatus({
          status: 'error',
          error: error instanceof Error ? error.message : 'Error desconocido',
        })
      }
    }

    void cargar()

    return () => {
      controller.abort()
    }
  }, [search])

  return status
}
