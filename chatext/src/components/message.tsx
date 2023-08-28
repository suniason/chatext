import React from 'react'

interface MessageProps {
  sender: string
  content: string
  type: boolean
}

const Message: React.FC<MessageProps> = ({ sender, content, type }) => {
  return (
    <div>
      {type === true ? (
        <div className='flex justify-end m-3 '>
          <div className='max-w-[45%]'>
            <div className='text-neutral-400 text-xs m-1'>{sender}</div>
            <div className='bg-[#eabec1] text-[#071306] py-1 px-4 rounded-2xl'>{content}</div>
          </div>
        </div>
      ) : (
        <div className='flex justify-start m-3'>
          <div className='max-w-[45%]'>
            <div className='text-neutral-400 text-xs m-1'>{sender}</div>
            <div className=' bg-[#571e5c] text-[#edf9ec] py-1 px-4 rounded-2xl'>{content}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Message
