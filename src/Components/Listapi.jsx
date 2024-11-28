import React,{useEffect, useState} from "react";
function Listapi(){

    const[apicount,setapicount]=useState([])

       const handlefetch = async () => {
        let res=await fetch("https://fakestoreapi.com/products");
        let data=await res.json();
        setapicount(data);

     };

useEffect(()=>{
    handlefetch()
})

return(
    <div>
        <h1>Api Call</h1>
        {/* <button onClick={handlefetch}>call Api</button> */}
   
   {apicount.map((da)=>(
    <div>
        <img height={200} width={200} src={da.image}/>
        <h1>{da.title}</h1>
        <p>{da.price}</p>
    </div>
   ))}
 </div> 
);
}

export default Listapi