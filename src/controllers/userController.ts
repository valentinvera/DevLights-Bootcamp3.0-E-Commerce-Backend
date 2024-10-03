import { Request, Response } from "express"
import User from "../models/user"

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const newUser = User.create(req.body)
      return res.status(201).json(newUser)
    } catch (error) {
      console.log(error)
    }
  }

  async getUsers(req: Request, res: Response) {
    try {
      const users = await User.find()
      return res.status(200).json(users)
    } catch (error) {
      console.log(error)
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const user = await User.findByIdAndDelete(req.params.id)
      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json({ error: "User not found" })
    }
  }
  async updateUser(req: Request, res: Response) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json({ error: "User not found" })
    }
  }
  async getUser(req: Request, res: Response) {}
}

export const userController = new UserController()
