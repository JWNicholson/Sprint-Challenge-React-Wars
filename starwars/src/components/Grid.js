import React, {useState, useEffect} from "react";
import axios from "axios";
import CharCard from "./Card";

export default function Grid(){
    const [swData, setSwData] = useState([])

    useEffect(() => {
        axios
          .get(`https://swapi.co/api/people/`)
          .then(response => {
            // console.log(response.data.results[0].name);

            console.log(response.data.results)

            setSwData(response.data.results)
            
          })
          .catch(error => {
            console.log("the data was not return", error);
          });
      }, []);
            
     //Character card
    return(
      <div className="character-info">

{swData.map(char => {
        return (
          <CharCard
            key={char.index}
            name={char.name}
            gender={char.gender}
            bday={char.birth_year}
          />
        );
      })}
       </div>
    ) 

      
 
 

      
   
}