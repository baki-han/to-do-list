import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import List from "./components/List";

function App() {

    const [notes, setNotes] = useState([]);

    const addNote = (value)=>{
      let newList = [...notes];
      newList.push(value);
      setNotes(newList);
    }

    const removeItem = (index)=>{
        setNotes(notes.filter((el, i)=> index !== i));
    }

    /*  <<< THIS IS A FUNCTION TO RESET BACK TO DEFAULT >>> //
    const resetList = ()=>{
       setNotes([])
    } */

    return (
    <div className="App">
      <Header onClick={addNote} />
      <hr/>
      <List notes={notes} removeItem={removeItem} />
    </div>
  );
}

export default App;
