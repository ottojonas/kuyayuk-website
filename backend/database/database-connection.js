const mongoose = require('mongoose')

const database = async () => {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(process.env.MONGO_URL) // connect mongoose db and add to .env
    console.log('database connected successfully')
  } catch (error) {
    console.log('database connection error')
  }
}

module.exports = { database }
