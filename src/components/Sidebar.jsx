import React from 'react'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import Person3Icon from '@mui/icons-material/Person3';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='flex flex-col items-center w-[60px] h-[92vh] border-2 border-black rounded-xl bg-[#1d1d1d] ml-4'>
      <div className='flex flex-col rounded-xl w-[50px] h-[45px] items-center justify-center mt-3 text-[#f9698d] hover:bg-[#3e3f42]'>
        <CardGiftcardIcon fontSize='large'/>
      </div>
      <div className='flex flex-col text-center items-center justify-center mt-5 text-[#fad0d1]'>
        <div className='flex flex-col rounded-xl w-[50px] h-[45px] items-center justify-center mt-3 text-[#fad0d1] hover:bg-[#3e3f42] tooltip p-1'>
          <span className="tooltiptext">Home</span>
          <Link to="/">
            <HomeIcon fontSize='large' />
          </Link>
        </div>
        <div className='flex flex-col rounded-xl w-[50px] h-[45px] items-center justify-center mt-3 text-[#fad0d1] hover:bg-[#3e3f42] tooltip p-1'><span className="tooltiptext">Male</span><Link to="/men"><PersonIcon fontSize='large' /></Link></div>
        <div className='flex flex-col rounded-xl w-[50px] h-[45px] items-center justify-center mt-3 text-[#fad0d1] hover:bg-[#3e3f42] tooltip2 p-1'><span className="tooltiptext2">Female</span><Person3Icon fontSize='large' /></div>
        <div className='flex flex-col rounded-xl w-[50px] h-[45px] items-center justify-center mt-3 text-[#fad0d1] hover:bg-[#3e3f42] tooltip3 p-1'><span className="tooltiptext3">Baby</span><ChildCareIcon fontSize='large' /></div>
        <div className='border-y-2 border-[#fad0d1] w-12 mt-10'></div>
        <div className='flex flex-col rounded-xl w-[50px] h-[45px] items-center justify-center mt-3 text-[#fad0d1] hover:bg-[#3e3f42] tooltip3 p-1'><span className="tooltiptext3">All</span><SelectAllIcon fontSize='large' /></div>
      </div>
    </div>
  )
}

export default Sidebar
