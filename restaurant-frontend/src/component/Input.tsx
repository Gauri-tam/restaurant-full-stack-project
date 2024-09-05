import React  from 'react';

interface Props extends React.HTMLAttributes<HTMLInputElement>{
    label: string,
    name: string,
    type: string,
    value:string
  }

 const Input : React.FC<Props> = ({label, name, type, value, onChange, ...props })=> {

    // function convertRolesToUppercase(inputValue: string) {
    //     // Trim leading and trailing spaces
    //     const trimmedValue = inputValue.trim();
        
    //     // Convert to uppercase
    //     const uppercaseValue = trimmedValue.toUpperCase();
        
    //     return uppercaseValue;
    // }

    // if (name === "roles") {
    //    value = convertRolesToUppercase(value)
    // }    
    return (
        <div className='container '>
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} name={name} value={value} onChange={onChange} required {...props}/>
        </div>
    )
}

export default Input;