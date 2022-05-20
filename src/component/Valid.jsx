import React, { useState } from 'react'

export default function Valid() {
    const [register, setregister] = useState("")
    const handleSubmit=(e)=>{
  setregister(e.target.value)
    }
  return (
    
    <div>
        <h1>hiii</h1>
        <form onSubmit={handleSubmit}>
      <input onchange={e=>(setregister(e.target.value)) } />
      <input onchange={e=>(setregister(e.target.value)) } />
      <input onchange={e=>(setregister(e.target.value)) } />
      <input type="submit" />
    </form>

    </div>
  );
  
}
