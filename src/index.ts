import express from "express"
import { config } from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import dbConnect from "./db/dbConnect"
import {
  authRouter,
  userRouter,
  adminRouter,
  productRouter,
  cartRouter,
  categoryRouter,
} from "./routes"

config()

const PORT = Number(process.env.PORT) || 8081

const app = express()

app.use(express.json())
app.use(cookieParser()),
app.use(cors({
  origin: [
    "http://localhost:3000"
    ]
  }
))

app.use("/user", userRouter)
app.use("/auth", authRouter)
app.use("/admin", adminRouter)
app.use("/product", productRouter)
app.use("/cart", cartRouter)
app.use("/category", categoryRouter)

dbConnect()

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
