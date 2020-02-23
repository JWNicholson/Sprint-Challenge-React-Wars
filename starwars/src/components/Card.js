import React from "react";




const Card = props => {
    console.log("Card js ", props)

    return(
       
        <div  key={props.index}>
        <h2>Character: {props.name}</h2>
        <h3>Gender: {props.gender}</h3>
    <h3>Date of birth: {props.bday}</h3>
    </div>
   
    )
    
}

export default Card;

