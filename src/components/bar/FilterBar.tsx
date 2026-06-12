interface Props {
  className?: string
}

const FilterBar = ({ className = '' }: Props) => {
  return (
    <aside className={`bg-gray-100 p-3 ${className}`}>
      <h2 className="text-xl font-bold">Filtros</h2>

      {/* Todo: traer categorías de la api */}
      <section className="my-4">
        <h3 className="text-md font-semibold">Categorías</h3>
        <ul className="py-2">
          <li className="flex items-center gap-2">
            <input type="checkbox" name="cat1" id="cat1" />
            <label htmlFor="cat1">Categoría 1</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" name="cat2" id="cat2" />
            <label htmlFor="cat2">Categoría 2</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" name="cat3" id="cat3" />
            <label htmlFor="cat3">Categoría 1</label>
          </li>
        </ul>
      </section>
    </aside>
  )
}

export default FilterBar
