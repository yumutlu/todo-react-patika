import React, { useState,useEffect } from "react";
import List from './List';
import Form from './Form';


function Contacts() {

const [todos, setTodos] = useState([

{
  
addInput:"Reading a book",
 isComplete: false
},
{
  
  addInput:"Learn JavaScript",
   isComplete: false
  }

]);


useEffect(()=>{
console.log(todos);
},[todos]);

  return (
    <div>
      <Form addTodo={setTodos} todos={todos}/>
      <List todos={todos} />
    </div>
  );
}

export default Contacts;
