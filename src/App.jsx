import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

import Display from './components/DisplayBooks/Display'
import { BookContextProvider } from './contexts/Bookcontext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BookContextProvider>
     <Navbar />
     <Display />
     </BookContextProvider>
    </>
  )
}

export default App
