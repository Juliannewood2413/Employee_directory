//File to handle populating cards from API
import React, {Component} from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Cards from './Cards';
import Search from './Search';
import API from '../../utils/API';
import './Directory.css';

class Directory extends Component {
    //setting state as empty to start
    state = {
        search: '',
        results: [],
        searchResults: []
    };

    //populate landing page with initial results
    componentDidMount() {
        API.getDirectory()
        .then((res) => 
        this.setState({results : res.data.results, searchResults: res.data.results}))
        .catch((err) => console.log(err));
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const resultsArray = this.state.results;

        const directoryList = resultsArray.filter((empName) => empName.name.first.toLowerCase().indexOf(value.toLowerCase()) !== -1 || empName.name.last.toLowerCase().indexOf(value.toLowerCase()) -1);
        this.setState({
            searchResults: directoryList,
        })
        
    }



    //render results
    render() {
        return (
            <CardDeck className="searchCards">
                <Container className="Card-Container" fluid="sm">
                    <Cards searchResults={this.state.searchResults} />
                </Container>
            </CardDeck>
        )
    }

}

export default Directory;
