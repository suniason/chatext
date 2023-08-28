import { Request, Response } from 'express'
import { User } from '../schema/user'
import bcrypt from 'bcrypt'

export const addNewUser = async (req: Request, res: Response) => {
  try {
    const { name, username, email, password } = req.body
    const saltRound = 10

    const hashedPassword = await bcrypt.hash(password, saltRound)

    const newUser = new User({
      name: name,
      username: username,
      email: email,
      password: hashedPassword
    })

    await newUser.save()

    return res.status(200).json({ newUser, message: 'User created successfully' })
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while adding new user.' })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body

    const user = await User.findOne({ username: username })

    if (user) {
      const passwordMatches = await bcrypt.compare(password, user.password)

      if (passwordMatches) {
        return res.status(200).json({ user, message: 'User found' })
      } else {
        return res.status(401).json({ message: 'Incorrect password' })
      }
    } else {
      return res.status(404).json({ message: 'User not found' })
    }
  } catch (error) {
    return res.status(500).json({ error: 'Invalid username/password' })
  }
}

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const user = await User.find({}).select('-password')

    return res.status(200).json({ user, message: 'User found' })
  } catch (error) {
    return res.status(500).json({ error: 'Invalid username/password' })
  }
}
