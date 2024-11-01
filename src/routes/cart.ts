import express from "express"
import { cartController } from "../controllers/cartController"
import { authRoutes } from "../middlewares/authRoutes"

const cartRouter = express.Router()
cartRouter.use(authRoutes)

cartRouter.get("/getCarts", cartController.getCarts)
//cartRouter.get("/getCart/:id", (req, res) => {});
cartRouter.post("/addCart", cartController.addCart)
//cartRouter.post("/confirmCart", (req, res) => {});
cartRouter.put("/updateCart/:id", (req, res) => {})
cartRouter.delete("/deleteCart/:id", (req, res) => {})

export default cartRouter
