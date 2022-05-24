import React, { useEffect, useRef, useState } from 'react';
import "./App.css"

function App(props) {

  const [count, setCount] = useState({
    name: "Shohrux",
    age: 19,
    surname: "Meliboyev"
  })

  const [value, setValue] = useState("");
  const inputRef = useRef("")

  function sammi () {
    setCount({
      ...count,
      name: "Akmal",
      age: 18,
      surname: "Erhonov"
    })
  }

  function sami () {
    setCount({
      ...count,
      name: "Shohrux",
      age: 19,
      surname: "Meliboyev"
    })
  }

  useEffect(() => {
    inputRef.current = value
  })

  return (
    <div className="App">
      {/* <button onClick={() => setCount({name: "Akmal"})} className="start">Edit</button> <br /> <br /> */}
      <button onClick={sammi} className="start">Edit</button>
      <button onClick={sami} className="stop">Edit</button> <br /> <br />
      <p>{JSON.stringify(count)}</p>
      <input ref={inputRef} type="text" className="input" onChange={e => setValue(e.target.value)} value={value} />
      <p>Past value {inputRef.current}</p>
    </div>
  );
}

export default App;