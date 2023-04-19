import React, { useEffect, useState } from "react";
import Header from "./Header";

const urlJSON = 'http://localhost:3001/pups'

function DogDetails (){
  return (
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <img src="" alt="dog picture"></img>
          <h2>Dog Name</h2>
          <button>Good Dog!</button>
        </div>
      </div>
  )
}

function App() {
  const [dogList, setDogList] = useState([])

  useEffect( () => {
    fetch(urlJSON)
    .then( res  => res.json())
    .then( data => setDogList(data))
  }, [])

  return (
    <div className="App">
      <Header dogList = {dogList} />
      <DogDetails />
    </div>
  );
}

export default App;
