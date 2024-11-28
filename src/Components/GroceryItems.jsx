import React, { useState } from "react";
export default function GroceryItems(){

const[inputdata,setinputdata] = useState("")
const handleinput = (e) => {
setinputdata(e.target.value)

}

const handlepost = async() =>{

    let body = {
   task: inputdata

    }
    let res = await axios.post("http://localhost:3000/todoList",body)
    handleget()
}

    return(
    <div>
<h1>GroceryItems</h1>

<input onChange={handleinput}placeholder=" Grocery"/>
<button onClick={handlepost}>Send</button>
    </div>
    )
}