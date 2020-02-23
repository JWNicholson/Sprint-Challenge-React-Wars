import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';




const CharCard = props => {
    console.log("Card js ", props)

    return(
        <div  key={props.index}>

<Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
          <Button color="danger">Danger!</Button>
        </CardBody>
      </Card>
      
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle><h2>Character: {props.name}</h2></CardTitle>
        <CardText><h3>Gender: {props.gender}</h3></CardText>
        <CardText><h3>Date of birth: {props.bday}</h3></CardText>
        <Button>Button</Button>
      </Card>  

    </div>
   
    )
    
}

export default CharCard;

