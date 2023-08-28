import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Register: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const registerClicked = () => {
    if (name && username && email && password && confirmPassword === password) {
      fetch('http://192.168.56.1:5000/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          username: username,
          email: email,
          password: password
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.log(error)
        })
    } else alert('There are still some errors')
  }

  return (
    <div className='flex justify-center items-center h-[100dvh]'>
      <div className='bg-[#571e5c] p-10 w-4/12'>
        <div className='text-center font-bold text-2xl text-white'>REGISTER</div>
        <div className='m-2'>
          <div className='text-sm text-white'>Name</div>
          <input
            type='text'
            value={name}
            className='w-full py-1 px-3 rounded-full outline-none'
            onChange={e => {
              setName(e.target.value)
            }}
          />
        </div>
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
          <div className='text-sm text-white'>E-mail</div>
          <input
            type='email'
            value={email}
            className='w-full py-1 px-3 rounded-full outline-none'
            onChange={e => {
              setEmail(e.target.value)
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
        <div className='m-2'>
          <div className='text-sm text-white'>Confirm Password</div>
          <input
            type='password'
            value={confirmPassword}
            className='w-full py-1 px-3 rounded-full outline-none'
            onChange={e => {
              setConfirmPassword(e.target.value)
            }}
          />
        </div>
        <div>
          {/* <Link to='/login'> */}
          <button
            className='w-full text-center py-1 my-3 rounded-full font-semibold bg-[#eabec1]'
            onClick={registerClicked}
          >
            Register
          </button>
          {/* </Link> */}
        </div>
        <div className='text-[#eabec1] text-sm'>
          Already have an account?{' '}
          <span className='hover:underline transition-all cursor-pointer font-semibold'>
            <Link to='/login'>Click Here</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Register
