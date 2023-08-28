import React from 'react'
import Bar from '../components/bar'
import Conversation from '../components/conversation'
import Sidebar from '../components/sidebar'
import Menu from '../components/menu'

const Chatboard: React.FC = () => {
  return (
    <div className='flex flex-col w-full h-screen'>
      <Bar name='ChaText' />
      <section className='grid grid-cols-[25%_50%_25%] h-full'>
        <Sidebar />
        <Conversation />
        <Menu user='Brett Josef C. Galvez' />
      </section>
    </div>
  )
}

export default Chatboard
