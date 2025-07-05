import { useEffect, useState } from "react";

function Sample() {


    // syntax
    // const [state, function] =useState();

    const[a,add]=useState(50)
    const[b,sub]=useState(50)


    useEffect(()=>{
        console.log(a);
        console.log(b);
        
        
    },[a,b])
   
   


    return (
        <>                               
           <button onClick={()=>add((a1)=>a1+1)}>add</button>
           <p>{a}</p>
           <button onClick={()=>sub((b1)=>b1-1)}>sub</button>
           <p>{b}</p>
        </>
    )

}
export default Sample;