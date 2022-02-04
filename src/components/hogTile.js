import React, { useState} from "react";
import HogDetails from './HogDetails';


function HogTile({hog}) {
    const [Hidden, setHidden] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

function handleClicks() {
    setShowDetails((preShowDetails) => !preShowDetails)
}


    //hide the hogs
if(Hidden) return null;

    //show the hogs
const {name, specialty, image} = hog

return (
<div>
    <div>
        

    </div>


</div>
)
}


export default HogTile