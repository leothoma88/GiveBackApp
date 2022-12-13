import React, {  useState } from 'react';
import Cards from './Cards';

const Search   = ({acceptSearches, charities}) => {

    const [_searchFilter, setSearchFilter] = useState()
  
    const handleChange = (event) => {
        setSearchFilter(event.target.value.toLowerCase())
     
      acceptSearches(event.target.value.toLowerCase())
    }

    const filteredCharities = charities.filter(
        (charity) => {
          let lowerCaseName = charity.name.toLowerCase()
          return lowerCaseName.indexOf(_searchFilter) !== -1;
        }
      );

      return (
        <div> 
         <div className="d-flex justify-content-center">
           <form className='search-filter form-group'>
             <input className='form-control form-control-l' type='text' placeholder='Search' onChange={ event => handleChange(event) } />
           </form>
         </div>        
         <div className="grid grid-cols-3 gap-4">
             {filteredCharities.map((charity) => {
               return <Cards name={charity['name']}
               description={charity['description']}
               coverImageUrl={charity['coverImageUrl']}/>
             })}
           </div>
           </div>  
           )
  
    
    }

    export default Search