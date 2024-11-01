// import { Request, Response } from "express"
// import User from "../models/user"

// class UserController {
//   async createUser(req: Request, res: Response) {
//     try {
//       const newUser = User.create(req.body)
//       return res.status(201).json(newUser)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   async getUsers(req: Request, res: Response) {
//     try {
//       const users = await User.find()
//       return res.status(200).json(users)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   async deleteUser(req: Request, res: Response) {
//     try {
//       const user = await User.findByIdAndDelete(req.params.id)
//       return res.status(200).json(user)
//     } catch (error) {
//       return res.status(400).json({ error: "User not found" })
//     }
//   }
//   async updateUser(req: Request, res: Response) {
//     try {
//       const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//       })
//       return res.status(200).json(user)
//     } catch (error) {
//       return res.status(400).json({ error: "User not found" })
//     }
//   }
//   async getUser(req: Request, res: Response) {}
// }

// export const userController = new UserController()

import { Request, Response } from "express"
import { userService } from "../services/user"

const {
  getUser,
  getUsers,
  getUserByMail,
  createUser,
  loginUser,
  editUser,
  deleteUser,
  changeRole,
} = userService

class UserController {
  async getUsers(req: Request, res: Response) {
    const email = req.query.email as string
    if (email) {
      try {
        const user = await getUserByMail(email)
        return res.status(200).json(user)
      } catch (error) {
        return res.status(400).json({ error: (error as Error).message })
      }
    } else {
      try {
        const users = await getUsers()
        return res.status(200).json(users)
      } catch (error) {
        return res.status(400).json({ error: (error as Error).message })
      }
    }
  }

  async getUser(req: Request, res: Response) {
    const id = req.params.id
    try {
      const user = await getUser(id)
      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message })
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const user = await createUser(req.body)
      return res.status(201).json(user)
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message })
    }
  }

  async loginUser(req: Request, res: Response) {
    try {
      const { token, userPayload } = await loginUser(req.body)

      return res.status(200).json(userPayload)
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message })
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const user = await deleteUser(req.params.id)
      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message })
    }
  }

  async editUser(req: Request, res: Response) {
    const userId = req.params.id
    try {
      const user = await editUser(userId, req.body)
      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message })
    }
  }

  async changeRole(req: Request, res: Response) {
    const userId = req.params.id
    const { role } = req.body
    try {
      const user = await changeRole(userId, role)
      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message })
    }
  }
}

export const userController = new UserController()
