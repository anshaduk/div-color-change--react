import React, { useState } from 'react'

const Color = () => {
    const [color,setColor]=useState('red')
    const [toggle,setToggle]=useState(false)
    const handleColor=()=>{
        setToggle(!toggle)
        setColor('blue')
    }
  return (
    <div>
        <div style={{background:toggle?color:'green'}}>1</div>
        <div style={{background:toggle?'green':color}}>2</div>
        <button onClick={handleColor}>colorChange</button>
    </div>
  )
}

export default Color