interface ItemsGridProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

const ItemsGrid = <T,>({ items, renderItem }: ItemsGridProps<T>) => {
  return (
    <section className="py-5 grid grid-cols-1 gap-6 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => {
        return renderItem(item)
      })}
    </section>
  )
}

export default ItemsGrid
