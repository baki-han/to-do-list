import React from 'react';


function TrashItem(props){

 return (
    <li> <span className="trash-list">{props.elem.task}</span>

     <button onClick={()=> props.del(props.elem.id)} 
             className="btn btn-secondary remove_from_bin">
             <i className="fa fa-trash"></i></button> 
   
     <button onClick={()=> props.restore(props.elem.id)} 
             className="btn btn-primary btn-sm restore-button">restore</button>
       <hr />
 </li>
 );

}

export default TrashItem;