import { cartDao } from "../daos/cart"
import { ICart } from "../types"

const { addCart, getCarts, updateCart } = cartDao

class CartService {
  async getCarts() {
    try {
      const carts = await getCarts()
      return carts
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }

  async addCart(id: string, cart: ICart) {
    try {
      const newCart = await addCart(id, cart)
      return newCart
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }

  async updateCart(id: string, cart: ICart) {
    try {
      const updatedCard = await updateCart(id, cart)
      return updatedCard
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }
}

export const cartService = new CartService()
