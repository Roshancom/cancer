import React from "react";

const Input = ({type,id,inputName,placeholder})=>{
 
    const [userValue,setUserValue] = React.useState({})
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUserValue((pre)=>({...pre,[name]:value}))
    }

    return(
        <>
            <input            
            type={type}
            id={id}
            name={inputName}
            placeholder={placeholder}
            onChange={handleChange}
            value={userValue.name}
             />
        </>
    )
}

export default Input;