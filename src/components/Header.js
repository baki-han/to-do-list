import React, {useState} from "react";
import TrashItem from "./TrashItem";


function Header(props){

    const [value, setValue] = useState('');

    const inputHandler = (event)=>{
        setValue(event.target.value);
    }

    const addButtonHandler = ()=> {
        props.addNote(value);
        setValue('');
    }

    return (
        <div className="header">
                <input className="input-class" type="text" onChange={inputHandler}
                       placeholder="add todo" value={value}/>

                <button onClick={addButtonHandler}>add item</button>

                <button className="btn-warning trash-bin" type="button" 
                       data-toggle="collapse" data-target="#collapseExample" 
                       aria-expanded="false" aria-controls="collapseExample">
                       <i className="fa fa-trash"></i> Trash</button>

                     <div className="collapse" id="collapseExample">
                     <div className="card card-body collapse-div">

                      <h4>Deleted items:</h4> 
                      <hr/>
                      <ul>
                     {props.trashList.map(el => <TrashItem 
                         key={el.id}
                         elem={el}
                         del={props.removeFromTresh}
                         restore={props.restoreItem}
                     />)}
                        </ul>
                    </div>
             </div>  
        </div>
    );
}

export default Header;
