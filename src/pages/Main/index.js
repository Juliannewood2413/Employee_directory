import React, {Component} from 'react'
import Directory from '../../components/EmpDirectory/Directory'
import NavbarComp from '../../components/Navbar/Navbar'
import API from '../../utils/API';

class Main extends Component {
    state = {
        search: '',
        results: [],
        searchResults: [],
        alphabetical: 'az'
    };

    componentDidMount() {
        API.getDirectory()
        .then((res) => 
        this.setState({results : res.data.results, searchResults: res.data.results}))
        .catch((err) => console.log(err));
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const resultsArray = this.state.results;
        // console.log(value)
        const directoryList = resultsArray.filter((empName) => empName.name.first.toLowerCase().includes(value.toLowerCase()) || empName.name.last.toLowerCase().includes(value.toLowerCase()));
        this.setState({
            searchResults: directoryList,
        })
        
    }

    handleByAge = (event) => {
        event.preventDefault();
        const unFiltered = this.state.searchResults;
        const filteredAge = unFiltered.sort(function (a,b) {
          return b.dob.age - a.dob.age;
        })
        this.setState({
          searchResults: filteredAge
        })
    }

    handleAlphabetical = (event) => {
        event.preventDefault();
        const unFilteredAlpha = this.state.searchResults;
        const filteredAlpha= unFilteredAlpha.sort((a,b) => 
       a.name.first > b.name.first ? 1 : -1);
       this.setState({
           searchResults: filteredAlpha
       })
    }

    render(){
        return (
            <>
            <NavbarComp searchFunction= {this.handleInputChange}handleByAge= {this.handleByAge} handleAlphabetical= {this.handleAlphabetical}></NavbarComp>
            <Directory directory={this.state.searchResults}></Directory>
            </>
        )
    }
}

export default Main
