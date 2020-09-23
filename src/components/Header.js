import React, {useState} from "react";


function Header(props){

    const [value, setValue] = useState('')

    const inputHandler = (event)=>{
        setValue(event.target.value);
    }

    const addButtonHandler = ()=> {
        props.onClick(value);
        setValue('');
    }

    return (
        <div className="header">
                <input className="input-class" type="text" onChange={inputHandler}
                 placeholder="add something" value={value}/>
                <button onClick={addButtonHandler}>add item</button>
        </div>
    );
}

export default Header;
