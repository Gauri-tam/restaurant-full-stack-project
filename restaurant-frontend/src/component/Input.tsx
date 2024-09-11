import React  from 'react';

interface Props extends React.HTMLAttributes<HTMLInputElement>{
    label: string,
    name: string,
    type: string,
    value:string
  }

 const Input:React.FC<Props> = ({label , name, type, value, onChange, ...props })=> {
  
    return (
        <div className='items-center'>
            <label htmlFor={name}>{label}</label>
            <input 
            className=" text-black outline-none opacity-65 focus:ring-black bg-transparent border-2 border-black focus:text-black text-sm min-w-full caret-black mr-3 py-3 px-2 h-2 rounded mb-2"
            type={type} 
            id={name} 
            name={name} 
            value={value} 
            autoComplete="off"
            onChange={onChange} 
            required {...props}/>
        </div>
    )
}

export default Input;