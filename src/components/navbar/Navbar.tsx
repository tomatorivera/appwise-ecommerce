import { ShoppingCart } from 'react-feather'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-full bg-emerald-500 p-4">
      <div className="max-w-7xl flex flex-col gap-4 justify-between items-center md:flex-row md:gap-0 mx-auto">
        <h2 className="font-bold text-lg text-white">AppwiseShop</h2>

        <ul className="flex items-center justify-center gap-5 text-white">
          <li>
            <Link
              to="/"
              className="cursor-pointer hover:underline hover:text-emerald-100 transition-all"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/catalogo"
              className="cursor-pointer hover:underline hover:text-emerald-100 transition-all"
            >
              Catálogo
            </Link>
          </li>
          <li>
            <Link
              to="/catalogo"
              className="cursor-pointer hover:underline hover:text-emerald-100 transition-all"
            >
              Favoritos
            </Link>
          </li>
          <li>
            <Link
              to="/catalogo"
              className="cursor-pointer hover:underline hover:text-emerald-100 transition-all"
            >
              Ofertas
            </Link>
          </li>
        </ul>

        <section className="flex items-center gap-5">
          <button className="cursor-pointer">
            <ShoppingCart className="text-white hover:text-emerald-100 transition-colors" />
          </button>
          <button className="bg-white px-3 py-1 rounded-2xl text-emerald-700 cursor-pointer hover:bg-emerald-50 transition-colors">
            Ingresar
          </button>
        </section>
      </div>
    </nav>
  )
}

export default Navbar
