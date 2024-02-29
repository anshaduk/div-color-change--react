import React, { useState } from 'react'
import randomColor from 'randomcolor'

function ColorChange() {
    const [color1,setColor1]=useState('red');
    const [color2,setColor2]=useState('green');
    const handleChange=()=>{
        setColor1(randomColor);
        setColor2(randomColor);
    }

  return (
    <div>
        <div style={{background:color1, width:'100%',height:'100%',marginBottom:'20px'}}>
            1
        </div>
        <div style={{background:color2,width:'100%', height:'100%'}}> 2</div>
        <button onClick={handleChange}>ChangeColor</button>
    </div>
  )
}

export default ColorChange