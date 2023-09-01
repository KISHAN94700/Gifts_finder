import React from 'react'
import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Searchgift from './Searchgift';
import Filterdata from './Filterdata';

const Home = () => {
  let [filterValue,setFilterValue] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json())
      .then((value) => setFilterValue(value));
  }, []);

  function handleSearchInputChange(event) {
    setSearchQuery(event.target.value);
  }

  filterValue=filterValue.filter((fValue)=>
    fValue.title.toLowerCase().includes(searchQuery)
  )

  return (
    <div>
      <div className='flex flex-col items-center justify-center w-[100vw] mt-12'>
        <div className='flex items-center justify-center w-[50vw] h-[45px] border-2 border-black rounded-full'>
          <div className='flex items-center'>
           <input type="text" onChange={handleSearchInputChange} placeholder='Search keyword' className='w-[46vw] h-[40px] text-black bg-transparent outline-none' />
           <SearchIcon />
          </div>
        </div> 
         {searchQuery.length<=0 ?(
          <div className='w-[60%] border-2 border-black mt-12'>
            <Searchgift />
          </div>):
          (
            <div className='flex flex-wrap items-center justify-center w-[95%]'>
            {filterValue.map((filtervalue,idx)=>{
                return(
                  <div key={idx}>
                  <Filterdata filtervalue={filtervalue}/>
                  </div>
                )
            })}
          </div>
          )
        }
      </div>
    </div>
  )
}

export default Home;
