interface Props<T> {
  items: T[]
  cols?: number
  className?: string
  renderItem: (item: T) => React.ReactNode
}

const ItemsGrid = <T,>({
  items,
  cols = 4,
  className = '',
  renderItem,
}: Props<T>) => {
  const gridCols = `grid-cols-${cols}`

  return (
    <section
      className={`grid grid-cols-1 gap-6 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:${gridCols} ${className}`}
    >
      {items.map((item) => {
        return renderItem(item)
      })}
    </section>
  )
}

export default ItemsGrid
