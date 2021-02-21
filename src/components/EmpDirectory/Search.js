//handles search function
import React from 'react';

function Search(props) {
    return (
        <form className="search-form">
            <label htmlFor="search">Search for Employee:</label>
            <input
            value={props.search}
            name="search"
            onChange={this.handleInputChange}
            type="text"
            />
        </form>
    )
}

export default Search;