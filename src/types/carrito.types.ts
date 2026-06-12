import { ProductoEnCarrito, ProductoPreview } from './producto.types'

export type CarritoContextValue = {
  items: ProductoEnCarrito[]
  agregarItem: (producto: ProductoPreview) => void
  quitarItem: (productoId: number) => void
  cambiarCantidad: (productoId: number, cantidad: number) => void
  vaciarCarrito: () => void
  totalItems: number
  totalPrecio: number
}
