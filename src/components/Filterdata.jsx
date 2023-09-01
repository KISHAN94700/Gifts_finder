import React from 'react'
import ReactStars from "react-stars";

const Filterdata = (props) => {
  const filtervalue = props;

  return (
    <div>
      <div className='w-[95%] ml-2 mt-4 text-xl'>
        <div className='flex flex-col w-[400px] h-[90vh]'>
          <div>
              <img src={filtervalue.filtervalue.image} alt="img" className='sm:w-[400px] w-[400px] h-[60vh]'/>
          </div>
          <div className='flex-flex-col w-auto h-[30vh] bg-[#F9D1D1] p-2 '>
          <h1 ><span className='font-bold'>{filtervalue.filtervalue.title}</span></h1>
          <h1 >Price: <span className='font-bold'>{filtervalue.filtervalue.price}</span></h1>
          <h1 >Prev price: <span className='font-bold line-through'>112.80</span></h1>
          <h1 >Category: <span className='font-bold'>{filtervalue.filtervalue.category}</span></h1>
          <h1 className='flex items-center'>
            <span className='mr-2'>Rating: </span>
            <ReactStars size={24} half={true} value={2.5} edit={true} className='bg-black' />
          </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filterdata
