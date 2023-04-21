import React, {useState, useEffect } from "react"
import { useParams} from "react-router-dom"
import { urlJSON } from "../data/urlJson"

function DogCard ({updateDogList}){

    const { id } = useParams()
    const [dogDetail, setDogDetail] = useState(null)

    useEffect( () => {
        fetch(urlJSON + "/" + id)
        .then( r => r.json())
        .then( d => setDogDetail(d))
      }, [id])

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


    if (!dogDetail) {
        return (<h2>Loading dog details...</h2>)}

    const {name, isGoodDog, image} = dogDetail

    return(
            <div id="dog-info">
                  <img src={image} alt={name}></img>
                  <h2>{name}</h2>
                  <button onClick = {patchRequestIsGoodDog}>{isGoodDog ? "Bad Dog!" : "Good Dog!"}</button>
            </div>
    )

}


export default DogCard
