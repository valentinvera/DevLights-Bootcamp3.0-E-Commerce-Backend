import { Request, Response } from "express"
import User from "../models/user"
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"

import { config } from "dotenv"
config()

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body
      const existingUser = await User.findOne({ email })
      if (!existingUser) {
        return res.status(400).json({ error: "User not found" })
      }
      const isPasswordValid = await compare(password, existingUser.password!)
      if (!isPasswordValid) {
        return res.status(400).json({ error: "Invalid password" })
      }

      const token = sign(
        {
          userId: existingUser._id,
          email: existingUser.email,
          isAdmin: existingUser.is_admin,
        },
        process.env.JWT_SECRET!,
        { expiresIn: "1h" },
      )

      return res
        .header("auth-token", token)
        .status(200)
        .json({ message: "Loggin Successful" })
    } catch (error) {}
  }

  async register(req: Request, res: Response) {
    try {
      const { email } = req.body
      const existingUser = await User.findOne({ email })
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" })
      }
      const user = await User.create(req.body)
      return res.status(201).json(user)
    } catch (error) {
      return res.status(400).json({ error: "Registration failed" })
    }
  }
}

export const authController = new AuthController()
