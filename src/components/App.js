// create your App component here
import React from "react";
import { useState, useEffect } from "react";


function App(){
    const [image,setImage] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r=> r.json())
        .then(data => setImage(data.message))
    },[])

    if(!image){
        return<p>Loading...</p>
    }
    return(
    
    <div>
        <div>
          <img
            alt="A Random Dog"
            src="https://images.dog.ceo/breeds/bulldog-english/mami.jpg"
          />
        </div>
      </div>
    )
}

export default App