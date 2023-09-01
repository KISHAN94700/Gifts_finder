import React from 'react'
import RedeemIcon from '@mui/icons-material/Redeem';
import { Link } from 'react-router-dom';

const Searchfilter = () => {
  return (
    <div className='flex flex-col items-center justify-center w-[100%] h-[92vh]'>
    <div className='flex flex-col items-center justify-center w-[75%]'>
      <div className='text-center text-xl m-4'>
        <RedeemIcon className='mr-2' />
        gift finder
      </div>
      <div className='text-center m-4'>
        <h1 className='text-2xl mb-4'>Gift Details</h1>
        <div className='text-start ml-4'>
            <label for="rel">Relationship</label><br></br>
            <input type="text"  id="rel" className='h-[45px] w-[500px] border-2 rounded mb-4 mt-2 p-2 border-gray-500 bg-pink-200'/>
        </div>
        <div className='text-start ml-4'>
            <label for="age">Age</label><br></br>
            <input type="number" id="age" className='h-[45px] w-[500px] border-2 rounded mb-4 mt-2 p-2 border-gray-500 bg-pink-200'/>
        </div>
        <div className='text-start ml-4'>
            <label for="occasion">Occasion</label><br></br>
            <input type="text"  id="occasion" className='h-[45px] w-[500px] border-2 rounded mb-4 mt-2 p-2 border-gray-500 bg-pink-200'/>
        </div>
        <div className='text-start ml-4'>
            <label for="interest">Interests</label><br></br>
            <input type="text"  id="interest" className='h-[45px] w-[500px] border-2 rounded mb-4 mt-2 p-2 border-gray-500 bg-pink-200'/>
        </div>
        <div className='text-start ml-4'>
            <label for="budget">Budget</label><br></br>
            <input type="number"  id="budget" className='h-[45px] w-[500px] border-2 rounded mb-4 mt-2 p-2 border-gray-500 bg-pink-200'/>
        </div>
        <div className='border-2 border-gray-500 w-[500px] ml-4'></div>
        <div className='ml-4'>
        <button className='border-2 border-gray-800 h-[45px] w-[500px] rounded text-center bg-black text-gray-300 text-xm hover:bg-pink-300 hover:text-black mt-4'>
            <Link to="/men">Get Gift Suggestions</Link>
        </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Searchfilter
