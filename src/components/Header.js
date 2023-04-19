import React, { useState } from "react";
import DogBarNames from "./DogBarNames";



function Header({dogList}) {
  const [filter, setFilter] = useState(false)

  function handleOnClickFilter(){
    setFilter(!filter)
  }

  const filteredDogList = filter 
      ? dogList.filter(dog => dog.isGoodDog === true)
      : dogList

  return (
    <div>
      <div id="filter-div">
        <button onClick={handleOnClickFilter} id="good-dog-filter">
          Filter good dogs: {filter ? "ON" : "OFF"}
          </button>
      </div>
      <div id="dog-bar">
        { filteredDogList.map( dog => <DogBarNames key = {dog.id} id = {dog.id} name = {dog.name} /> ) }
      </div>
    </div>
  );
}


export default Header