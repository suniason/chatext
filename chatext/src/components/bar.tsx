import React, { useState } from 'react'
import { MdLightMode, MdNightlight } from 'react-icons/md'

interface BarProps {
  name: string
}

const Bar: React.FC<BarProps> = ({ name }) => {
  const [isDark, setIsDark] = useState<boolean>(false)
  return (
    <div className='grid grid-cols-2 w-full bg-[#9c36a6] text-[#edf9ec] py-3 px-10 text-lg font-bold items-center'>
      <div className='flex justify-start'>{name}</div>
      <div className='flex justify-end'>
        {isDark ? (
          <div onClick={() => setIsDark(!isDark)}>
            <MdLightMode size={25} />
          </div>
        ) : (
          <div onClick={() => setIsDark(!isDark)}>
            <MdNightlight size={25} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Bar
