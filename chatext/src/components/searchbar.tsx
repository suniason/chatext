import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar: React.FC = () => {
  const [term, setTerm] = useState<string>('')

  return (
    <div className='flex m-4 bg-neutral-300 p-2 rounded-full'>
      <div className='w-1/12 flex justify-center items-center'>
        <AiOutlineSearch />
      </div>
      <input
        type='text'
        placeholder='Search'
        value={term}
        className='w-11/12 bg-neutral-300 outline-none text-sm mx-1'
        onChange={e => {
          setTerm(e.target.value)
        }}
      />
    </div>
  )
}

export default SearchBar
