import express from 'express'
import dotenv from 'dotenv'
import { route } from './routes'
import { DatabaseConnection } from './database'
import cors from 'cors'

dotenv.config()

const app = express()
const port = process.env.PORT
const url = process.env.URL!
DatabaseConnection(url)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(route)

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
