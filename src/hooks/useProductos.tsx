import { MOCK_PRODUCTOS } from '../data/productos'

export function useProductos() {
  // Todo: traer datos desde la API e implementar estados
  // para la espera de datos
  const productos = MOCK_PRODUCTOS

  return {
    productos,
  }
}
