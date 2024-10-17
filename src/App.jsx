import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Gallery} from './assets/components/Gallery'

function App() {

  return (
    <>
      <div className='min-h-screen bg-orange-300 flex items-center justify-center'>
        <h1 className="text-3xl font-bold text-center mb-4">
            Dragon Ball Z
        </h1>
        <Gallery/>
      </div>
    </>
  )
}

export default App