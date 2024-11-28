import React, { useState } from "react";

export default function ToDoList(){
    const[inputdata,setinputdata]=useState("")
    const handleinput=(e)=>{
        setinputdata(e.target.value)
    }
   const handlefetch = async()=>{
    let res = fetch("http://localhost:3000/todoList")
   }
return(
    <div>
    <h1>CRUD</h1>
    <input onChange={handleinput} placeholder="Enter your task"  />
    <button>Add</button>
</div>
)

}