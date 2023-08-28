import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  return (
    <div className='flex justify-center items-center h-[100dvh]'>
      <div className='bg-[#571e5c] p-10 w-4/12'>
        <div className='text-center font-bold text-2xl text-white'>LOG IN</div>
        <div className='m-2'>
          <div className='text-sm text-white'>Username</div>
          <input
            type='text'
            value={username}
            className='w-full py-1 px-3 rounded-full outline-none'
            onChange={e => {
              setUsername(e.target.value)
            }}
          />
        </div>
        <div className='m-2'>
          <div className='text-sm text-white'>Password</div>
          <input
            type='password'
            value={password}
            className='w-full py-1 px-3 rounded-full outline-none'
            onChange={e => {
              setPassword(e.target.value)
            }}
          />
        </div>
        <Link to='/chats'>
          <button className='w-full text-center py-1 my-3 rounded-full font-semibold bg-[#eabec1]'>
            Login
          </button>
        </Link>
        <div className='text-[#eabec1] text-sm'>
          New Here?{' '}
          <span className='hover:underline transition-all cursor-pointer font-semibold'>
            <Link to='/register'>Register</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
