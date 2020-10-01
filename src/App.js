import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import List from "./components/List";
import {v4 as uuid4} from 'uuid';


function App() {
    //Todo initial list
    const initList = [{id: uuid4(), task: "solve the problem", checked: false},
    {id: uuid4(), task: "work hard", checked: false},
    {id: uuid4(), task: "banana", checked: false},
    {id: uuid4(), task: "sleep", checked: false},
    {id: uuid4(), task: "study", checked: false}
  ];

    const [notes, setNotes] = useState(initList);
    const [trashList, setTrashList] = useState([]);
  
    //Todo add new item to the list
    const addNote = (value)=>{
      let newList = [...notes];
      newList.push({id: uuid4(), task: value, checked: false});
      setNotes(newList);
    }

    //Todo delete item from the list & add to trash
    const delItem = (id)=>{
        const newList = notes.filter(el => el.id !== id);
        const newTrash = notes.filter(el => el.id === id)[0];
        const tempList = [...trashList];
        tempList.push(newTrash);
        setTrashList(tempList);
        setNotes(newList);
    }

   //Todo toggle the "checked property" to mark the item completed
    const updateCheck = (id) =>{
      const newList = notes.map(el =>{
         if(el.id === id) return {...el, checked: !el.checked};
         return el;
       });
       setNotes(newList)
    }

    //Todo permanently remove item from trash bin
    const removeFromTresh = (id) =>{
      const newTrashList = trashList.filter(el => el.id !== id);
      setTrashList(newTrashList);
    }

    //Todo restore item from trash bin to the notes list
    const restoreItem = (id) =>{
      const restoredItem = trashList.filter(el => el.id === id)[0];
      restoredItem.checked = false;
      const newTrash = trashList.filter(el => el.id !== id);
      setTrashList(newTrash)
      const newList = [...notes];
      newList.unshift(restoredItem);
      setNotes(newList);
    }

    return (
      <div className="App">
         <Header addNote={addNote} 
                 trashList={trashList}
                 removeFromTresh={removeFromTresh}
                 restoreItem={restoreItem}
              />
         <hr/>

        <List notes={notes} 
              delItem={delItem} 
              updateCheck={updateCheck}
            />
      </div>
  );
}

export default App;
