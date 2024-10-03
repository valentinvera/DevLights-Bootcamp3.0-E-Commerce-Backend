import express from "express"
import cors from "cors"
import { config } from "dotenv"

import dbConnect from "./db/dbConnect"
import { authRouter, userRouter, adminRouter, productRouter } from "./routes"

config()

const PORT = Number(process.env.PORT) || 8081

const app = express()

app.use(cors())
app.use(express.json())

app.use("/user", userRouter)
app.use("/auth", authRouter)
app.use("/admin", adminRouter)
app.use("/product", productRouter)

dbConnect()

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
