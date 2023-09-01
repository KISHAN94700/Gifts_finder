import React, { useState } from 'react'

const Giftscategory = (props) => {
  const[isHover,setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
     setIsHover(false);
  };

  const {data} = props;

  return (
    <div>
      <div className='w-[90%] ml-4 mt-4'>
        <div className='flex flex-col w-[400px] h-[65vh]'>
          <div className='w-[400px]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img src={isHover?data.img2:data.img} alt="img" className="w-[400px] h-[54vh]"/>
          </div>
          <div className='flex-flex-col w-[400px] h-[11vh] bg-[#F9D1D1] p-2'>
          <h1 className='text-2xl'>{data.title}</h1>
          <a href="google.com" className='text-xl underline'>{data.dataPath}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Giftscategory
