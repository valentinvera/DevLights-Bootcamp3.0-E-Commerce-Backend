import express, { Request, Response } from "express"
import { userController } from "../controllers/userController"

const usersRouter = express.Router()

usersRouter.get("/getUsers", userController.getUsers)

usersRouter.post("/create-user", userController.createUser)

usersRouter.delete("/delete-user/:id", userController.deleteUser)

export default usersRouter
