import express from 'express'
import { addNewUser, getAllUser, login } from './controller/user'
import { addMessage, addMessageThread, getAllMessage } from './controller/message'
import { getThreadMessage } from './controller/thread'

const route = express()

route.get('/', (req, res) => {
  res.send('This is a new app')
})

route.get('/api/login', login)
route.get('/api/users', getAllUser)
route.post('/api/register', addNewUser)
route.get('/api/messages', getAllMessage)
route.get('/api/threadMessage/:id', getThreadMessage)
route.post('/api/message', addMessageThread)

export { route }
