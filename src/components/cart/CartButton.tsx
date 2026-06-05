import { ShoppingCart } from 'react-feather'

const CartButton = () => {
  const isOpen = true // Todo: reemplazar por useToggle

  return (
    <div className="relative">
      <button className="cursor-pointer relative flex items-center">
        <ShoppingCart
          size={25}
          className="text-white hover:text-emerald-100 transition-colors"
        />

        {/* Todo: actualizar la cantidad dinámicamente */}
        <span className="absolute -top-3.75 -right-4.25 bg-white text-sm rounded-full p-0.75 text-emerald-700">
          10
        </span>
      </button>

      {isOpen && (
        <div className="absolute bg-white -right-50 w-80 top-10 border border-gray-300 shadow-xl z-50 md:-right-3 md:top-6 md:mt-3">
          <ul className="max-h-96 overflow-y-auto divide-y divide-gray-100">
            <li className="flex gap-3 p-4">
              <img
                src="https://via.placeholder.com/60"
                alt="Producto"
                className="h-15 w-15 rounded object-cover"
              />

              <div className="flex-1">
                <h3 className="line-clamp-2 text-sm font-medium">
                  Producto de ejemplo
                </h3>

                <p className="text-sm text-gray-500">Cantidad: 2</p>

                <p className="font-semibold text-emerald-700">$15.000</p>
              </div>
            </li>

            <li className="flex gap-3 p-4">
              <img
                src="https://via.placeholder.com/60"
                alt="Producto"
                className="h-15 w-15 rounded object-cover"
              />

              <div className="flex-1">
                <h3 className="line-clamp-2 text-sm font-medium">
                  Otro producto
                </h3>

                <p className="text-sm text-gray-500">Cantidad: 1</p>

                <p className="font-semibold text-emerald-700">$8.500</p>
              </div>
            </li>
          </ul>

          <div className="border-t border-gray-200 p-4">
            <div className="mb-3 flex justify-between font-semibold">
              <span>Total</span>
              <span>$23.500</span>
            </div>

            <button className="w-full rounded bg-emerald-600 py-2 text-white hover:bg-emerald-700 transition-colors cursor-pointer">
              Finalizar compra
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartButton
