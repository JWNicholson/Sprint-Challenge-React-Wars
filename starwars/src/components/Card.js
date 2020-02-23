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
      

    </div>
   
    )
    
}

export default CharCard;

