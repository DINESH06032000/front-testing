import React, { useState } from 'react'

function Hello() {

    const[a,sum]=useState('')
    function ad(valu){
        sum((pre)=>pre+valu)
    }

    function su(){
        const ab= eval(a)
        sum(ab)
    }

    return (
        <>
            <input type="text" value={a} />
            <button onClick={()=>ad('1')}>1</button>
            <button onClick={()=>ad('2')}>2</button>
            <button onClick={()=>ad('+')}>+</button>
            <button onClick={()=>su()}>=</button>
        </>
    )
}

export default Hello