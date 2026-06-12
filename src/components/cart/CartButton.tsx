import { ShoppingCart, X } from 'react-feather'
import { useToggle } from '../../hooks/useToggle'
import { useCarrito } from '../../features/carrito/useCarrito'

const CartButton = () => {
  const {
    value: isOpen,
    activate: openDropdown,
    deactivate: closeDropdown,
  } = useToggle()

  const {
    items,
    quitarItem,
    cambiarCantidad,
    vaciarCarrito,
    totalItems,
    totalPrecio,
  } = useCarrito()

  const handleRemoveFromCart = (productId: number) => {
    quitarItem(productId)
  }

  const handleQuantityChange = (productId: number, quantity: number) => {
    cambiarCantidad(productId, quantity)
  }

  const handleClearCart = () => {
    vaciarCarrito()
  }

  return (
    <div className="relative">
      <button
        className="cursor-pointer relative flex items-center"
        onClick={() => (isOpen ? closeDropdown() : openDropdown())}
      >
        <ShoppingCart
          size={25}
          className="text-white hover:text-emerald-100 transition-colors"
        />

        <span className="absolute -top-3.75 -right-4.25 bg-white text-sm rounded-full p-0.75 text-emerald-700">
          {totalItems}
        </span>
      </button>

      {isOpen && (
        <div className="absolute bg-white -right-50 w-80 top-10 border border-gray-300 shadow-xl z-50 md:-right-3 md:top-6 md:mt-3">
          <ul className="max-h-96 overflow-y-auto divide-y divide-gray-100">
            {items.length > 0 ? (
              items.map((producto) => {
                return (
                  <li className="flex gap-3 p-4 pb-0" key={producto.id}>
                    <img
                      src={producto.thumbnail}
                      alt={`Imagen del producto: ${producto.title}`}
                      className="h-15 w-15 rounded object-cover"
                    />

                    <div className="relative flex-1">
                      <h3 className="line-clamp-2 text-sm font-medium pe-2">
                        {producto.title}
                      </h3>

                      <p className="text-sm text-gray-500">
                        Precio unitario: ${producto.price}
                      </p>
                      <p className="font-semibold text-emerald-700">
                        ${(producto.price * producto.cantidad).toFixed(2)}
                      </p>

                      <section className="text-sm max-w-full flex mt-2 gap-3">
                        <p>Cantidad:</p>
                        <input
                          type="number"
                          value={producto.cantidad}
                          onChange={(e) =>
                            handleQuantityChange(
                              producto.id,
                              Number(e.target.value)
                            )
                          }
                          className="w-[55px] border border-gray-300 ps-1"
                        />
                      </section>

                      <button
                        className="cursor-pointer"
                        onClick={() => handleRemoveFromCart(producto.id)}
                      >
                        <X
                          className="absolute top-0 right-0 text-red-600"
                          size={20}
                        />
                      </button>
                    </div>
                  </li>
                )
              })
            ) : (
              <p className="text-gray-500 text-center py-5">
                No hay items en el carrito
              </p>
            )}
          </ul>

          <div className="border-t border-gray-200 p-4">
            <div className="mb-3 flex justify-between font-semibold">
              <span>Total</span>
              <span>${totalPrecio.toFixed(2)}</span>
            </div>

            <button className="w-full rounded bg-emerald-600 py-2 text-white hover:bg-emerald-700 transition-colors cursor-pointer">
              Finalizar compra
            </button>
            <button
              className="w-full mt-2 rounded border border-red-600 text-red-600 py-2 hover:border-red-900 hover:text-red-900 transition-colors cursor-pointer"
              onClick={handleClearCart}
            >
              Vaciar carrito
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartButton
