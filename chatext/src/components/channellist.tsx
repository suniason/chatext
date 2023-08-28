import React from 'react'
import Channel from './channel'

const ChannelList: React.FC = () => {
  return (
    <div>
      <Channel
        sender='Name1'
        content='This is content 1 and this will test if it will truncate'
        read={false}
      />
      <Channel sender='Name2' content='This is content 2' read={true} />
      <Channel
        sender='Name3'
        content='This is content 3 and this will have another test if it will truncate'
        read={true}
      />
    </div>
  )
}

export default ChannelList
