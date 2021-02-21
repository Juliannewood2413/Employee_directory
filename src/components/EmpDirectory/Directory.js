//File to handle populating cards from API
import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Cards from './Cards';
import './Directory.css';

function Directory (props){

        return (
            //Pass search bar here so we can utilize the inputchange as a prop
            //i.e. <Search myFunction = {handleInputChange} />
            <CardDeck className="searchCards" fluid="sm">
                <Container className="Card-Container" fluid="sm">
                    <Cards searchResults={props.directory} />
                </Container>
            </CardDeck>
        )
    

}

export default Directory;
