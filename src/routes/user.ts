import express from "express"
import { userController } from "../controllers/userController"
import { adminRoutes } from "../middlewares/adminRoutes"

const usersRouter = express.Router()

usersRouter.get("/getUsers", userController.getUsers)
usersRouter.get("/getUser/:id", userController.getUser)
usersRouter.post("/create-user", userController.createUser)
usersRouter.delete("/delete-user/:id", userController.deleteUser)
usersRouter.put("/edit-user/:id", userController.editUser)
usersRouter.put("/edit-user/:id", adminRoutes, userController.changeRole)

export default usersRouter
