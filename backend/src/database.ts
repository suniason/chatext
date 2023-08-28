import mongoose from 'mongoose'

const DatabaseConnection = (url: string) => {
  mongoose.connect(url, {}).then(() => {
    try {
      console.log('Connected to Database')
    } catch (error) {
      console.log(error)
    }
  })
}

export { DatabaseConnection }
