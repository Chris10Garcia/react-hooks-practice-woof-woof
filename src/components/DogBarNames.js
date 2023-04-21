import React from "react"
import {Link} from "react-router-dom"

function DogBarNames({id, name, handleOnClickDogDetail}){
    return(
      // <span onClick = { () => handleOnClickDogDetail(id) }><Link to = {`/${id}`}>{name}</Link></span>
      <span><Link to = {`/${id}`}>{name}</Link></span>
    )
}


export default DogBarNames