import React ,{useState} from "react"

const  School =() =>{

    let [oldState,newState] =useState({
        name : "JKUAT",
        year : 1967
    })

     newState={
        name : "MKU",
        year : 1955
    }


    return(
        <div>
            <h2>my school is {oldState.name}  since {oldState.year}</h2>
            <h2>my school is {newState.name}  since {newState.year}</h2>
        </div>
    )
} 
export default School