import { useCategorias } from '../../hooks/useCategorias'

interface Props {
  className?: string
}

const FilterBar = ({ className = '' }: Props) => {
  const responseCategorias = useCategorias()

  if (responseCategorias.status === 'error')
    console.error(responseCategorias.error)

  return (
    <aside className={`bg-gray-100 p-3 ${className}`}>
      <h2 className="text-xl font-bold">Filtros</h2>
      <section className="my-4">
        <h3 className="text-md font-semibold">Categorías</h3>

        {responseCategorias.status === 'idle' && (
          <p className="py-2">Cargando categorias...</p>
        )}

        {responseCategorias.status === 'error' && (
          <p className="py-2">Error al cargar las categorías</p>
        )}

        {responseCategorias.status === 'success' && (
          <ul className="py-2">
            {responseCategorias.data.map((category, index) => {
              return (
                <li className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name={`cat-${index}`}
                    id={`cat-${index}`}
                  />
                  <label htmlFor={`cat-${index}`}>{category}</label>
                </li>
              )
            })}
          </ul>
        )}
      </section>
    </aside>
  )
}

export default FilterBar
