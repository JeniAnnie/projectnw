import React,{useState} from "react";

// import TestComp from "./Components/TestComp";
// import CountComp from"./Components/CountComp";
// import ListRender from"./Components/ListRender";
// import Listapi from"./Components/Listapi";
// import ToDoList from "./Components/ToDoList";
// import GroceryItems from "./Components/GroceryItems";
import Cardpage from "./Components/Cardpage";
import Productpage from "./Components/Productpage";

function App(){
  return(
    <>
{/*     
    <TestComp/>
    <CountComp/>
    <ListRender/> */}
    {/* <Listapi/> */}
{/* <ToDoList/> */}
{/* <GroceryItems/> */}

<h1>Context</h1>

<Counterprovider>


<Cardpage/>
<Productpage/>


</Counterprovider>

    </>
  )
}
export default App