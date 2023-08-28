import mongoose from 'mongoose'

const ThreadSchema = new mongoose.Schema({
  userids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }]
})

const Thread = mongoose.model('Thread', ThreadSchema)

export { Thread }
