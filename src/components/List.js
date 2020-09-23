import React from "react";

function List(props){
    const notes = props.notes;
    const del = props.removeItem;
    return (

        <div >
            {notes.map((el, i)=>
              <div className="list" key={i}>  <h2>{el}</h2>
              <button onClick={() => del(i)}> del </button>
              </div>)}
        </div>
    );
}
export default List;