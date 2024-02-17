import React from 'react'

const Input = ({setSearch ,placeholder}) => {
  return (
    <input type="text" placeholder={placeholder} className='bg-transparent py-1 px-3 outline-none w-full' onChange={(e) => setSearch(e.target.value)} />
  )
}

export default Input