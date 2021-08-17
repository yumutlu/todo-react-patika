import React from 'react'
import { useState, useEffect } from "react";

const initialFormValues ={addInput:""}

function Form({addTodo,todos}) {

    const [addForm, setaddForm] = useState(initialFormValues);

    //useEffect yöntemi ile submit sonrası inputtun içinin temizlenmesi
    useEffect(()=>{

      setaddForm(initialFormValues)//submit sonrası input içini temşizleme2

    },[todos])

    const onChangeInput = (e) => {
      setaddForm({ ...addForm, [e.target.name]: e.target.value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if(addForm.addInput ===""){
          return false;
      }
     
  addTodo([...todos, addForm]);
    };
    return (
        <div onSubmit={onSubmit}>
        <section className="todoapp" />
        <header className="header">
          <h1>todos</h1>
          <form>
            <input
              onChange={onChangeInput}
              name="addInput"
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              value={addForm.addInput}// submit sonrası input içini temizleme1
            />
          </form>
        </header>
        </div>
    )
}

export default Form
