import React, {useState, useEffect } from 'react';
import Search from './Search'
import { QUERY_SEARCH} from '../utils/queries'
import { useLazyQuery } from '@apollo/client';

// class CharitiesBuilder extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         charities: []
//       };
//     }
function CharitiesBuilder({setCharitiesToShow}) {
   
    const [charities,setCharities] = useState([])
    const [search,setSearch] = useState("")
    const[doSearch ,{loading,data}] =useLazyQuery(QUERY_SEARCH, {
        variables: { searchTerm: search },
      })
    

    const handleSearch = () => {
        console.log("SEARCGIN!!!", charities)
        
        doSearch()
    }

    // const handleSearchByEnter = (event) => {
    //   console.log('please', event)
    //   if(event.key === 'Enter'){
    //     event.preventDefault();
    //     this.handleSearch()
    //     event.stopPropagation();
    //   }
    // }
    //Search by enter
    useEffect(() => {
      const listener = event => {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
          console.log("Enter key was pressed. Run your function.");
          event.preventDefault();
          // callMyFunction();
          handleSearch();
        }
      };
      document.addEventListener("keydown", listener);
      return () => {
        document.removeEventListener("keydown", listener);
      };
    }, []);


     const acceptSearches = (searchTerm) => {
        setSearch(searchTerm)
    }

    useEffect(() => {
      if(data && data.search){
        console.log('loki', data)
        setCharitiesToShow(data.search)
      }
    }, [setCharitiesToShow, data])
    
  
    
     
      const reducedCharities = charities.slice(0, 12)
      return (
        <div >
          <Search  acceptSearches={ acceptSearches } charities={ reducedCharities }/>
          <button className='text-white' onClick={() => {
              handleSearch() 
          }} >Do It!!!</button>

        </div>
      );
    }
  
  
  export default CharitiesBuilder;


//   https://partners.every.org/v0.2/search/dogs?apiKey=ba48908690c47fcc97e15a15220bcb75

//   https://partners.every.org/v0.2/nonprofit/maps?apiKey=ba48908690c47fcc97e15a15220bcb75