import React from 'react'
import Giftscategory from './Giftscategory';
import {giftCardDetails} from '../data/cardDetails';
import { useState, useEffect } from 'react';
import Filterdata from './Filterdata';
import { Link } from 'react-router-dom';

const Giftsformen = () => {

  
  const [filterValue,setFilterValue] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json())
      .then((value) => setFilterValue(value));
  }, []);

  return (
   
    <>
    <div className='flex flex-col w-[88%] m-auto'>
      <div className='flex flex-col w-[80vw] m-auto'>
        <div className='text-3xl'>
          <p>By recipient</p>
        </div>
      <div className='flex items-center justify-between mt-4'>
        <div className='flex items-center justify-center border-2 border-black w-[250px] h-[40px] hover:bg-[#f9f0e6]'>FOR DAD</div>
        <div className='flex items-center justify-center border-2 border-black w-[250px] h-[40px] hover:bg-[#f9f0e6]'>FOR HUSBANDS</div>
        <div className='flex items-center justify-center border-2 border-black w-[250px] h-[40px] hover:bg-[#f9f0e6]'>FOR BOYFRIENDS</div>
        <div className='flex items-center justify-center border-2 border-black w-[250px] h-[40px] hover:bg-[#f9f0e6]'>FOR TEENS</div>
      </div>
    </div>
    <div className=' flex flex-col mt-10 w-[100%] bg-pink-100'>
      <div className='text-3xl mt-4 ml-[50px]'>
        <p>By category</p>
      </div>
      <div className='flex flex-wrap items-center justify-center mt-2'>
          {giftCardDetails.map((data,idx)=>{
              return(
                <div key={idx}>
                <Giftscategory data={data}/>
                </div>
              )
          })}
      </div>
      <div className='flex flex-wrap items-center justify-center mt-2'>
          {filterValue.map((filtervalue,idx)=>{
            
              return(
                <div key={idx}>
                <Filterdata filtervalue={filtervalue}/>
                </div>
              )
          })}
      </div>
    </div>
    <div className='flex items-center justify-center h-[200px]'>
        <div className='flex flex-col items-center justify-center w-[850px] h-[150px] bg-[#f4efe2] border-2 border-black'>
          <h1 className='text-3xl'>Find the perfect gift</h1>
          <div className='flex items-center justify-center text-xl mt-4 bg-white border-2 border-black w-[250px] h-[40px]'>
            <Link to="/">Try our Gift finder</Link>
          </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Giftsformen
