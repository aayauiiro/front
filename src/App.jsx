import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [quote, setQuote] = useState("Kanye once said")
       
      useEffect(() => {
        fetch('https://auth-fastapi-1.onrender.com/').then((res) => {
          return res.json()
        })
        .then((data) => {
          console.log(data)
          setQuote(data.message)
        })
      }, [])   
   
  return (
    <div>{quote}</div>
  )
}

export default App
