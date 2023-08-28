import { Request, Response } from 'express'
import { Message } from '../schema/message'
import { getThread } from './thread'

export const addMessage = async (req: Request, res: Response) => {
  try {
    const { message, sender, receiver } = req.body

    const newMessage = new Message({
      message: message,
      sender: sender,
      receiver: receiver
    })

    await newMessage.save()

    return res.status(200).json({ newMessage, success: true })
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while sending message.' })
  }
}

export const addMessageThread = async (req: Request, res: Response) => {
  try {
    const { message, sender, receiver } = req.body

    const threadid = await getThread(req, res, [sender, receiver])

    const newMessage = new Message({
      threadid: threadid,
      message: message,
      sender: sender,
      receiver: receiver
    })

    await newMessage.save()

    return res.status(200).json({ newMessage, success: true })
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while sending message.' })
  }
}

export const getAllMessage = async (req: Request, res: Response) => {
  try {
    const allMessages = await Message.find({})

    return res.status(200).json(allMessages)
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while sending message.' })
  }
}
