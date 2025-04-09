import React, { useState } from 'react'
const LightDarkMode = () => {
  const [light, setLight] = useState(true)

  const toggleHandler = () => {
    setLight(!light)
  }

  console.log("component re-rendered")
  return (
    <div>
        <h1 className='font-bold text-2xl'>{light ? "Light" : "Dark"}</h1>
        <button onClick={toggleHandler} className='bg-blue-500 text-white px-4 py-2 rounded-md'>click</button>
    </div>
  )
}

export default LightDarkMode