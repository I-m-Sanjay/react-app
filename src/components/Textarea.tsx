import React from 'react'

interface TextAreaProps{
  id:string;
  name:string;
  value?:string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; 
  placeholder:string;
  rows?:number;
  cols?:number;
  className:string;
}


const TextArea:React.FC<TextAreaProps>=({
id,
name,
value,
onChange,
placeholder,
rows,
cols,
className,
})=>{
  return(
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      className={className}></textarea>
  )
}

export default TextArea