import { Request, Response } from 'express'
import { Thread } from '../schema/thread'

export const getThreadMessage = async (req: Request, res: Response) => {
  try {
    return res.status(200)
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred.' })
  }
}

export const createNewThread = async (req: Request, res: Response, userids: string[]) => {
  try {
    const newThread = new Thread({
      userids: userids
    })

    await newThread.save()

    console.log(newThread.id)
    return newThread.id
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred.' })
  }
}

export const getThread = async (req: Request, res: Response, userids: string[]) => {
  try {
    let threadid

    threadid = await Thread.findOne({ userids: { $all: userids } }).select('threadid')

    if (!threadid) {
      threadid = await createNewThread(req, res, userids)
    }

    return threadid
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred.' })
  }
}
