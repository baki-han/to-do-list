import React from 'react';

function Todo(props){
    const isDone = props.done; // false
    
     const checkedStyle = {
         color: "red",
         textDecoration: 'line-through',
     }

     const uncheckedStyle = {
        color: "#50a3a2ue",
    }

    const checkedButtonStyle = {
        backgroundColor: "hsl(113, 94%, 53%)",
    }

    const unCheckedButtonStyle = {
        backgroundColor: "#8492b1",
    }

    return (
        <div className="list">
         <button style={isDone ? checkedButtonStyle : unCheckedButtonStyle} 
                 onClick={()=>props.updateCheck(props.id)} className="check-button">✔</button>

         <h2 style={isDone ? checkedStyle : uncheckedStyle}>
             <span style={{color : "#50a3a2"}}>{props.task}</span></h2>

         <button onClick={()=> props.delItem(props.id)} 
                 className="btn btn-danger del-button">
                 <i className="fa fa-trash"></i></button>
        </div>
    );
}

export default Todo;