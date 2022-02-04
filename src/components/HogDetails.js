import React from "react";


function HogDetails({hog}) {
    const {name, specialty, greased, weight, 'highest medal achieved': medal, image } = hog
console.log(hogs)
    return (
     <div>
        <h1>{name}</h1>
        <img src={image}></img>
     </div>

    )
}

export default HogDetails