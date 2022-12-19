import React, {useState, useEffect } from 'react';
import Search from './Search'
import { QUERY_SEARCH} from '../utils/queries'
import { useLazyQuery } from '@apollo/client';
import {BiSearchAlt} from 'react-icons/bi'

// class CharitiesBuilder extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         charities: []
//       };
//     }
function CharitiesBuilder({setCharitiesToShow}) {
   
    const [charities,setCharities] = useState([])
    const [search,setSearch] = useState("charity")
    const[doSearch ,{loading,data}] = useLazyQuery(QUERY_SEARCH, {
        variables: { searchTerm: search },
      })
    

    const handleSearch = () => {
        console.log("SEARCGIN!!!", charities)
        
        doSearch()
    }
    useEffect(()=>{
      handleSearch();

    },[])

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
          <button className='w-auto text-white my-3 inline-block px-9 py-2.5 bg-[#191f3d] text-sm uppercase rounded shadow-lg hover:bg-teal-600  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out' onClick={() => {
              handleSearch() 
          }} >Search Organizations</button>

        </div>
      );
    }
  
  
  export default CharitiesBuilder;


//   https://partners.every.org/v0.2/search/dogs?apiKey=ba48908690c47fcc97e15a15220bcb75

//   https://partners.every.org/v0.2/nonprofit/maps?apiKey=ba48908690c47fcc97e15a15220bcb75