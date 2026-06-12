import { useState } from 'react'
import { Search } from 'react-feather'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({ className = '' }: { className?: string }) => {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!query || !query.trim()) return

    navigate(`/productos?search=${query.trim()}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex md:w-auto items-center justify-center gap-1 bg-gray-50 border border-gray-300 px-2 py-1 ${className}`}
    >
      <Search size={16} className="text-slate-500" />
      <input
        type="text"
        placeholder="Search a post..."
        name="search"
        id="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 bg-transparent focus:outline-0 focus:border-0 p-1 text-slate-600"
      />
    </form>
  )
}

export default SearchBar
