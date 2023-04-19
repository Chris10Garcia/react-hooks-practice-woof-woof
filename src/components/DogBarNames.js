import React from "react"

function DogBarNames({id, name}){
    return(
      <span onClick = { () => console.log(id) }>{name}</span>
    )
}


export default DogBarNames