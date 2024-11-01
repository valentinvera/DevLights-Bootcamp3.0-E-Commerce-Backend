import express from "express"
import orderController from "../controllers/orderController"

const orderRouter = express.Router()

orderRouter.get("/:id", orderController.getOrderById)
orderRouter.get("/ordersHistory/:id", orderController.getOrdersByUserId)
orderRouter.post("/confirmOrder", orderController.createOrder)

export default orderRouter
