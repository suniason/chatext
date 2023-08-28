import { createBrowserRouter } from 'react-router-dom'
import Landing from './pages/landing'
import Register from './pages/register'
import Login from './pages/login'
import Chatboard from './pages/chatboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: 'register',
    element: <Register />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'chats',
    element: <Chatboard />
  }
])
