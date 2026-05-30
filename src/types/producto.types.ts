export interface Producto {
  id: number
  title: string
  description: string
  category: string
  price: number
  rating: number
  stock: number
  thumbnail: string
}

export interface ProductoResponse {
  products: Producto[]
  total: number
  skip: number
  limit: number
}

export type ProductoEnCarrito = Producto & {
  quantity: number
}

export type ProductoPreview = Pick<
  Producto,
  'id' | 'title' | 'price' | 'thumbnail'
>
