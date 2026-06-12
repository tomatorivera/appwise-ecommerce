import { useEffect, useState } from 'react'
import { EstadoAsync } from '../types/generic.types'

export function useCategorias() {
  const [status, setStatus] = useState<EstadoAsync<string[]>>({
    status: 'idle',
  })

  const apiUrl = 'https://dummyjson.com/products/category-list'

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

        const responseData: string[] = await response.json()
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
  }, [])

  return status
}
