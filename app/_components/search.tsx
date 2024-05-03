'use client'

import { SearchIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { FormEventHandler, useState } from 'react'
import { useRouter } from 'next/navigation'

function Search() {
  const [search, setSearch] = useState('')

  const router = useRouter()

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleSearchSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()

    if (!search) {
      return
    }
    router.push(`/restaurants?search=${search}`)
  }

  return (
    <form className="flex gap-2" onSubmit={handleSearchSubmit}>
      <Input
        type="search"
        placeholder="Buscar Restaurantes"
        className="border-none"
        onChange={onChange}
      />
      <Button size="icon" type="submit">
        <SearchIcon size={20} />
      </Button>
    </form>
  )
}

export default Search
