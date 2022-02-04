import HogTile from "./hogTile"

function Hoglist ({hogs}) {
    
    return (
        <div>
          {hogs.map(hog => (
              <HogTile key={hog.name}
                    hog={hog}    
              />
          ))}  
        </div>
    )
}


export default Hoglist