import React, {Component} from 'react'
import Directory from '../../components/EmpDirectory/Directory'
import NavbarComp from '../../components/Navbar/Navbar'
import API from '../../utils/API';

class Main extends Component {
    state = {
        search: '',
        results: [],
        searchResults: []
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
        // alert('this button was clicked')
        console.log(value)
        const directoryList = resultsArray.filter((empName) => empName.name.first.toLowerCase().includes(value.toLowerCase()) || empName.name.last.toLowerCase().includes(value.toLowerCase()));
        this.setState({
            searchResults: directoryList,
        })
        
    }

    handleByAge = (event) => {
        event.preventDefault();
        //add choice - either youngest to oldest or oldest to youngest
        const unFiltered = this.state.searchResults;
        const filteredAge = unFiltered.sort(function (a,b) {
          return b.dob.age - a.dob.age;
        })
        this.setState({
          searchResults: filteredAge
        })
    }

    render(){
        return (
            <>
            <NavbarComp searchFunction= {this.handleInputChange}handleByAge= {this.handleByAge}></NavbarComp>
            <Directory directory={this.state.searchResults}></Directory>
            </>
        )
    }
}

export default Main
