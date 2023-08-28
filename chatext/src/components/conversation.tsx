import React, { useState } from 'react'
import { BiSolidSend } from 'react-icons/bi'
import Message from './message'

const Conversation: React.FC = () => {
  const [message, setMessage] = useState<string>('')
  return (
    <div className='bg-[#edf9ec] relative border-t border-x border-neutral-400'>
      <div>
        <Message
          sender='me'
          content='test asdddddddd asd a da d as da sd ad  ds as da sd as da sd adas ds ad sa'
          type={true}
        />
        <Message
          sender='other'
          content='tes a ds asd sa dsad sadas dsa sa da sdas das das da dasdad as d asd as dat'
          type={false}
        />
      </div>
      <div className='bottom-0 absolute p-3 w-full bg-[#edf9ec]'>
        <div className='flex justify-center'>
          <input
            type='text'
            placeholder='Aa'
            className='bg-neutral-300 px-4 rounded-full outline-none w-11/12 p-1 inline'
            value={message}
            onChange={e => {
              setMessage(e.target.value)
            }}
          />

          <div className='w-1/12 justify-center items-center flex   mx-1 '>
            <div className='hover:bg-neutral-300 rounded-full group'>
              <BiSolidSend
                size={30}
                color='#571e5c'
                className=' -translate-x-1 group-hover:translate-x-0 p-1 transition-all'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Conversation
