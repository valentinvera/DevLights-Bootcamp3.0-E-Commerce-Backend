import mongoose from "mongoose"
import { config } from "dotenv"

config()

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) return
  try {
    const dbURI = process.env.DB_URI!

    await mongoose.connect(dbURI)
    console.log("Database connected")
  } catch (error) {
    console.error("Error connecting to the database")
  }
}

export default dbConnect
