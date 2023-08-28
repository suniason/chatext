import React, { useRef, useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai'

interface AccordionProps {
  name: string
}

const Accordion: React.FC<AccordionProps> = ({ name }) => {
  const [active, setActive] = useState<boolean>(false)
  const iconRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const clicked = () => {
    if (iconRef.current) {
      iconRef.current.classList.toggle('rotate-90')
    }
    if (contentRef.current) {
      contentRef.current.classList.toggle('-translate-y-[100%]')
    }
  }

  return (
    <div>
      <div
        className='hover:bg-neutral-300 px-4 py-2 m-1 rounded-md grid grid-cols-[90%_10%] cursor-pointer'
        onClick={() => {
          setActive(!active)
          clicked()
        }}
      >
        <div className='font-semibold text-lg'>{name}</div>
        <div ref={iconRef} className='flex items-center justify-center transition-all '>
          <AiOutlineRight />
        </div>
      </div>
      <div className=' overflow-hidden'>
        <div ref={contentRef} className='transition-all -translate-y-[100%]'>
          <div className='hover:bg-neutral-300 px-4 py-2 m-1 rounded-md font-semibold text-md'>
            Preferences
          </div>
          <div className='hover:bg-neutral-300 px-4 py-2 m-1 rounded-md font-semibold text-md'>
            Logout
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
