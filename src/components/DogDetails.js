import React from "react"
import { urlJSON } from "../data/urlJson"

function DogDetails ({dogDetail, updateDogList}){
    // const {name, id, isGoodDog, image} = dogDetail

    function patchRequestIsGoodDog(){
        dogDetail.isGoodDog = !dogDetail.isGoodDog
        fetch(urlJSON + "/" + dogDetail.id, {
            method: "PATCH",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({isGoodDog : dogDetail.isGoodDog})
        })
        .then( r => r.json())
        .then( dogObj => updateDogList(dogObj))
    }


    return (
        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          { dogDetail ? 
              <div id="dog-info">
                <img src={dogDetail.image} alt={dogDetail.name}></img>
                <h2>{dogDetail.name}</h2>
                <button onClick = {patchRequestIsGoodDog}>{dogDetail.isGoodDog ? "Bad Dog!" : "Good Dog!"}</button>
              </div>
            : ""
          }
        </div>
    )
  }


  export default DogDetails