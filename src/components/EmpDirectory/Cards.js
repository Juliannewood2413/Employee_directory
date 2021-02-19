import React from "react";
import {Card, Row, Col, Image, CardDeck} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

//add phone number to employee card
function populateCards(props) {
    console.log(props)

    return (
        <>
    {props.searchResults.map((result) => (
        <CardDeck className="seeAll">
        <Card className="Directory-cards" key={result.login.uuid}>
            <Row>
                <Col className="Img-Card-Col">
                    <Image src={result.picture.large} variant="top" className="Img-card"></Image>
                </Col>
            </Row>
            <Card.Body>
                <Card.Title>{result.name.first + " " + result.name.last}</Card.Title>
                <Card.Text className="Card-text">
                    Age: {result.dob.age}
                </Card.Text>
                <Card.Text className="Card-text">
                    City: {result.location.city}
                </Card.Text>
                <Card.Text className="Card-text">
                    State: {result.location.state}
                </Card.Text>
                <Card.Text className="Card-text">
                    Email: {result.email}
                </Card.Text>
                <Card.Text className="Card-text">
                    Phone: {result.phone}
                </Card.Text>
            </Card.Body>

        </Card>


        </CardDeck>



    ))}
        </>


    )
}

export default populateCards;