import React from 'react';
import RedeemIcon from '@mui/icons-material/Redeem';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Searchgift = () => {
  const [isInputRelation,setInputRelation] = useState('');
  const [isSelectAge,setSelectAge] = useState(false);
  
  
  const initialDivStates = [
    { isHovered: false },
    { isHovered: false },
    { isHovered: false },
    { isHovered: false }
  ];
  
  const [divStates, setDivStates] = useState(initialDivStates);
  const navigate = useNavigate();
  

  const handleDivClick = (index) => {
    setDivStates((prevDivStates) =>
      prevDivStates.map((state, i) =>
        i === index ? { isHovered: !state.isHovered } : false
      )
    );
    setSelectAge(true);
  };

  const handleSubmit=()=>{
    if(!isSelectAge || !isInputRelation.length > 0){
      return toast.warning("Please fill all the fields!");
    }
    else{
      navigate('/filter')
    }
    
  };

  return (
    <div>
      <ToastContainer />
      <div className='text-center text-xl m-4'>
        <RedeemIcon className='mr-2' />
        gift finder
      </div>
      <form onSubmit={handleSubmit}>
      <div className='text-center items-center justify-center'>
        <h1 className='text-2xl mb-4'>Who are you shopping for?</h1>
        <input type="text"
          onChange={e => setInputRelation(e.target.value)} 
          placeholder='brother, friend, niece, etc.' 
          className='h-[45px] md:w-[70%] w-[80%] p-2 border-2 border-gray-500'
        />
      </div>
      <div className='flex flex-col flex-wrap items-center justify-center m-4'>
        <h1 className='text-3xl'>And they are a...</h1>
        <div className='flex flex-wrap items-center justify-center'>
        {divStates.map((state, index) => (
        <div
          key={index}
          onClick={() => handleDivClick(index)}
          className={`select flex m-4 border-2 border-gray-500 w-[80px] h-[35px] justify-center rounded-full text-xl text-gray-700 ${state.isHovered ? 'bg-pink-200' : ''}`}
        >
          {index === 0 ? 'baby' : index === 1 ? 'kid' : index === 2 ? 'teen' : 'adult'}
        </div>
      ))}
        </div>
      </div>
      <div className='flex flex-col justify-center items-center text-center mb-6 mt-12'>
        <button type='submit' className='border-2 border-gray-800 w-[150px] h-[40px] rounded text-center bg-black text-gray-300 text-xm hover:bg-pink-200 hover:text-black'>CONTINUE
        </button>
        <Link to='/filter' className='mt-2 underline hover:text-gray-200'>
          skip&#8811;
        </Link>
      </div>
      </form>
    </div>
  )
}

export default Searchgift
