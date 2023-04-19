import React, { useEffect, useState } from "react";
import Header from "./Header";
import DogDetails from "./DogDetails";
import { urlJSON } from "../data/urlJson";




function App() {
  const [dogList, setDogList] = useState([])
  const [dogDetail, setDogDetail] = useState(null)

  useEffect( () => {
    fetch(urlJSON)
    .then( res  => res.json())
    .then( data => setDogList(data))
  }, [])

  function updateDogList (dogObj){
    const updatedDogList = dogList.map (dog => dog.id === dogObj.id ? dogObj : dog)
    setDogList(updatedDogList)
  }

  return (
    <div className="App">
      <Header dogList = {dogList} setDogDetail = {setDogDetail} />
      <DogDetails dogDetail={dogDetail} updateDogList = {updateDogList}/>
    </div>
  );
}

export default App;
