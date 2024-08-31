import React from 'react'

interface SearchbarProps{
  id:string
  name:string
  placeholder:string
  type:string
  maxLength?:number
  className:string
}

const SearchBar:React.FC<SearchbarProps>= ({
  id,
  name,
  placeholder,
  type,
  maxLength,
  className,
})=>{
  return(
    <input
    id={id}
    name={name}
    placeholder={placeholder}
    type={type}
    maxLength={maxLength}
    className={className}/>
    
  )
}

export default SearchBar