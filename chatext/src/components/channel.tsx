import React from 'react'

interface ChannelProps {
  sender: string
  content: string
  read: boolean
}

const Channel: React.FC<ChannelProps> = ({ sender, content, read }) => {
  return (
    <div className='hover:bg-neutral-300 transition-all px-4 p-2 m-1 rounded-md'>
      <div className='text-base font-bold truncate'>{sender}</div>
      <div className='text-sm truncate'>{read ? content : <b>{content}</b>}</div>
    </div>
  )
}

export default Channel
