import React, { Component } from 'react';
import Cards from './Cards';
import Search from './Search'

class CharitiesBuilder extends Component {
    constructor(props) {
       // console.log(props,"HEY MOM")
      super(props);
      this.state = {
        charities: []
      };
    }
  
    handleSearch = () => {
        console.log("SEARCGIN!!!", {state: this.state})
        const searchedurl = `https://partners.every.org/v0.2/search/${this.state.searchTerm}?apiKey=ba48908690c47fcc97e15a15220bcb75`

      fetch(searchedurl, {
        method: "GET",
        headers: {
          "Content-Type" : "application/json"
        },
      })
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              charities: result.charitySearchResults
            });
          },
        )
    }

    acceptSearches = (searchTerm) => {
        console.log({...this.state, searchTerm})
        this.setState({...this.state, searchTerm})
    }
  
    render() {
      const { charities } = this.state;
      const reducedCharities = charities.slice(0, 12)
      return (
        <div>
          <Search  acceptSearches={ this.acceptSearches} charities={ reducedCharities }/>
          <button className='text-white' onClick={() => {
              this.handleSearch()
          }}>Do It!!!</button>
        </div>
      );
    }
  }
  
  export default CharitiesBuilder;


//   https://partners.every.org/v0.2/search/dogs?apiKey=ba48908690c47fcc97e15a15220bcb75

//   https://partners.every.org/v0.2/nonprofit/maps?apiKey=ba48908690c47fcc97e15a15220bcb75