import { cartService } from "../services/cart"
import { Request, Response } from "express"

const { addCart, getCarts } = cartService

class CartController {
  async getCarts(req: Request, res: Response) {
    try {
      const carts = await getCarts()
      return res.status(200).json(carts)
    } catch (err) {
      return res.status(500).json({ err })
    }
  }

  async getCart(req: Request, res: Response) {}

  async addCart(req: Request, res: Response) {
    const { id, cart } = req.body
    try {
      const newCart = await addCart(id, cart)
      return res.status(200).json(newCart)
    } catch (err) {
      return res.status(500).json({ err })
    }
  }

  async updateCart(req: Request, res: Response) {}
  async deleteCart(req: Request, res: Response) {}

  async confirmCart(req: Request, res: Response) {
    try {
      const cart = req.body
      return res.status(200).json(cart)
    } catch (err) {
      return res.status(500).json({ err })
    }
  }
}

export const cartController = new CartController()
