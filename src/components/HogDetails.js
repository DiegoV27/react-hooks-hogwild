import React from "react";


function HogDetails({name, image}) {

    return (
     <div>
        <h1>{name}</h1>
        <img src={image}></img>
     </div>

    )
}

export default HogDetails