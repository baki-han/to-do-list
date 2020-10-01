import React from "react";
import Todo from "./Todo";

function List(props){
   const notes = props.notes;
   const delItem = props.delItem;

    return (

       <div >

       {notes.map(el => <Todo 
           key={el.id}
           elem={el}
           task={el.task}
           done={el.checked}
           id={el.id}
           delItem={delItem}
           updateCheck={props.updateCheck}
       />)} 

       </div>
    );
}
export default List;

