import { useState } from 'react'

function App() {
  const [color , setColor] = useState('olive')

  return (
    <>
    <div className='h-screen' style={{ backgroundColor: color }}>
     <div className='flex gap-2 bg-blue-300 p-4 fixed bottom-0 align-center justify-center w-full'> 
      <button className='px-4 py-2 rounded-2xl' style={{ backgroundColor: "red" }}
       onClick={() => setColor('red')}>
        Red
        </button>
      <button className='px-4 py-2 rounded-2xl' style={{ backgroundColor: "blue" }}
       onClick={() => setColor('blue')}>
        Blue
        </button>
      <button className='px-4 py-2 rounded-2xl' style={{ backgroundColor: "green" }}
       onClick={() => setColor('green')}>
        Green
        </button>
     </div>
     </div>
    </>
  )
}

export default App
