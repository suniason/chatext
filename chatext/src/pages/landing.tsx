import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BiSolidMessageDetail } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Landing: React.FC = () => {
  return (
    <div className='flex h-[100dvh] flex-col'>
      <div className='grid grid-cols-2 w-full h-3/5 bg-[#eabec1] items-center'>
        <div className='flex flex-col h-full justify-start px-24 py-16 '>
          <div className='text-4xl font-bold leading-normal'>
            <span className='text-5xl '>Odit, Quas!</span> <br /> Lorem ipsum dolor sit, amet
            consectetur adipisicing elit.
          </div>
          <Link to='/register'>
            <div className='bg-[#571e5c] text-white text-lg font-semibold px-8 py-2 my-8 flex hover:shadow-[#571e5c] shadow-md transition-shadow group cursor-pointer justify-center w-4/6 rounded-full	'>
              GET STARTED
              <div className='flex items-center translate-x-1 group-hover:translate-x-2 transition-all'>
                <AiOutlineArrowRight />
              </div>
            </div>
          </Link>
        </div>
        <div className='flex flex-col items-center justify-center relative'>
          <Link to='/login' className='w-1/3 h-2/5  hover:scale-110 transition-all'>
            <BiSolidMessageDetail className='h-full w-full' color='#571e5c' />
          </Link>
          <BiSolidMessageDetail
            className=' absolute w-1/3 h-2/5 top-[15%] left-[5%]'
            color='#571e5c'
          />
          <BiSolidMessageDetail
            className=' absolute w-1/3 h-2/5 top-20 right-[10%]'
            color='#571e5c'
          />
          <BiSolidMessageDetail
            className=' absolute w-1/3 h-2/5 bottom-0 left-[12%]'
            color='#571e5c'
          />
          <BiSolidMessageDetail className=' absolute w-1/3 h-2/5 top-0 right-0' color='#571e5c' />
        </div>
      </div>
      <div className='bg-[#571e5c] h-full p-10 text-white'></div>
    </div>
  )
}

export default Landing
