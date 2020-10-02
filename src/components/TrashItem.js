import React, { useState } from 'react';


function TrashItem(props){
        const [confirmed, setConfirmed] = useState(false)


        const applyCofirmed = ()=>{
           setConfirmed(true);  
        }

        const delFromTrash = ()=>{
           props.del(props.elem.id);
           setConfirmed(false);
        }

        const cancelDeletion = ()=>{
          setConfirmed(false);
        }


 return (
        <div>
        {!confirmed ? 
                <li> <span className="trash-list">{props.elem.task}</span>
     
                <button onClick={applyCofirmed} 
                        className="btn btn-secondary remove_from_bin">
                        <i className="fa fa-trash"></i></button> 
              
                <button onClick={()=> props.restore(props.elem.id)} 
                        className="btn btn-primary btn-sm restore-button">restore</button>
                 </li>  
                 
               :
        <li className="confirm-div">
                <label>Are you sure you want to <br/>permanently delete this item ?</label> 
                <button onClick={delFromTrash} 
                        className="btn btn-secondary btn-sm restore-button">yes</button>  
                <button onClick={cancelDeletion} className="btn btn-primary btn-sm restore-button">no</button>
       
        </li>
                
                }
         <hr />
    </div>

       
 
 );

}

export default TrashItem;