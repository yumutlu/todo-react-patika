import React, { useState } from "react";

function List({ todos }) {

const removeItem = (e)=>{
if(e.target.id=== "delete-item"){

  e.target.parentElement.remove()
}
}
//tüm listeyi temizleme
const clearAll = (e)=>{
  if(window.confirm("Tüm liste Silinecek ! Emin misiniz ?")){
  
   e.target.parentElement.remove()
  }
  }



  return (
    <div>
      <div>
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {todos.map((todo, key) => (
              <li key={key}>
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>{todo.addInput}</label>
                  <button onClick={removeItem} id="delete-item" className="destroy"></button>
                </div>
              </li>
            ))}

          </ul>
        </section>
      </div>
      <button id="clearAll" onClick={clearAll}>Clear All</button>

    </div>
    
  );
}

export default List;
