import React from 'react'
import Accordion from './accordion'

interface MenuProps {
  user: string
}

const Menu: React.FC<MenuProps> = ({ user }) => {
  return (
    <div className='border-t border-neutral-400 '>
      <div className='flex justify-center '>
        <div className='text-xl font-bold my-10 hover:underline transition-all cursor-pointer'>
          {user}
        </div>
      </div>
      <Accordion name='Options' />
    </div>
  )
}

export default Menu
