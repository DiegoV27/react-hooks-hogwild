import React, { useState} from "react";
import HogDetails from './HogDetails';


function HogTile({hog}) {
    const [Hidden, setHidden] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

function handleClicks({specialty, weight, greased, }) {
    setShowDetails((preShowDetails) => !preShowDetails)
    return (
        <div>
            <h1>{specialty, weight, greased}</h1>
        </div>
    )
}


 

    //show the hogs
const {name, image} = hog

return (
<div>
    <div>
       <HogDetails name={name} image={image}/>
       <button onClick={handleClicks}>Show Details
       {showDetails}
       
       </button>
        

    </div>


</div>
)
}


export default HogTile