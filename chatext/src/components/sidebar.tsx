import React from 'react'
import SearchBar from './searchbar'
import ChannelList from './channellist'

const Sidebar: React.FC = () => {
  return (
    <div className='flex flex-col border-t border-neutral-400'>
      <SearchBar />
      <ChannelList />
    </div>
  )
}

export default Sidebar
