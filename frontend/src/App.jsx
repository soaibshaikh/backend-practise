import { useState } from 'react'

import './App.css'

function App() {

  const [jokes, setjokes] = useState([]);


  // use
  return (
    <>

      <h1>Altech app</h1>
      <h5>jokes count {jokes.length}</h5>

      {
        jokes.map((joke) => (
          <div className="" key={joke.id}>
              <h5>{joke.title}</h5>
          </div>
        ))
      }
    </>
  )
}

export default App
