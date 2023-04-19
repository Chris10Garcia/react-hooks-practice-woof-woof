import React from "react"

function DogBarNames({id, name, handleOnClickDogDetail}){
    return(
      <span onClick = { () => handleOnClickDogDetail(id) }>{name}</span>
    )
}


export default DogBarNames