import React from "react"
import { Route } from "react-router-dom"
import DogCard from "./DogCard"

function DogDetails ({updateDogList}){

    return (
        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          <Route exact path={"/"}>
            <h4>Click on the above to load a pup!</h4>
          </Route>
          <Route path={`/:id`}>
            <DogCard updateDogList={updateDogList} />
          </Route>
        </div>
    )
  }


  export default DogDetails