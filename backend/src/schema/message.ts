import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema(
  {
    threadid: { type: mongoose.Schema.Types.ObjectId, ref: 'Thread', required: true },
    message: { type: String, required: true },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
)

const Message = mongoose.model('Message', MessageSchema)

export { Message }
