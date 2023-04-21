import React, {useState, useEffect } from "react"
import { useParams} from "react-router-dom"
import { urlJSON } from "../data/urlJson"

function DogCard ({updateDogList}){

    const { id } = useParams()
    const [dogDetail, setDogDetail] = useState({
        name : "Loading",
        isGoodDog : "Loading",
        image : "Loading"
    })

    console.log(id)

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

    useEffect( () => {
      fetch(urlJSON + "/" + id)
      .then( r => r.json())
      .then( d => setDogDetail(d))
    }, [id])

    console.log(dogDetail)

    return(
            <div id="dog-info">
                  <img src={dogDetail.image} alt={dogDetail.name}></img>
                  <h2>{dogDetail.name}</h2>
                  <button onClick = {patchRequestIsGoodDog}>{dogDetail.isGoodDog ? "Bad Dog!" : "Good Dog!"}</button>
                  {/* <img src={"dogDetail.image"} alt={"dogDetail.name"}></img>
                  <h2>{"dogDetail.name"}</h2>
                  <button onClick = {patchRequestIsGoodDog}>{`dogDetail.isGoodDog ? "Bad Dog!" : "Good Dog!"`}</button> */}
            </div>
    )

}


export default DogCard
