import Order from "../models/order"
import { IOrder } from "../types"

class OrderDao {
  async getOrdersByUserId(userId: string) {
    try {
      const orderHistory = await Order.find({ userId })
      return orderHistory
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }

  async createOrder(order: IOrder) {
    try {
      const newOrder = await Order.create(order)
      return newOrder
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }

  async getOrderById(id: string) {
    try {
      const order = await Order.findById(id)
      return order
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }
}

const orderDao = new OrderDao()

export default orderDao
