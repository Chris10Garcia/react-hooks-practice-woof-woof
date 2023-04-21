import React, { useEffect, useState } from "react"
import { urlJSON } from "../data/urlJson"
import {Route, useParams} from "react-router-dom"
import DogCard from "./DogCard"

function DogDetails ({updateDogList}){
    // const {name, id, isGoodDog, image} = dogDetail
    


    return (
        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          <Route exact path={"/"}>
            <h4>Click on the above to load a pup!</h4>
          </Route>
          <Route path={`/:id`}>
            {/* { dogDetail ? 
                <div id="dog-info">
                  <img src={dogDetail.image} alt={dogDetail.name}></img>
                  <h2>{dogDetail.name}</h2>
                  <button onClick = {patchRequestIsGoodDog}>{dogDetail.isGoodDog ? "Bad Dog!" : "Good Dog!"}</button>
                </div>
              : ""
            } */}
            <DogCard updateDogList={updateDogList} />
          </Route>
        </div>
    )
  }


  export default DogDetails