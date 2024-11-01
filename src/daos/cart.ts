import Cart from "../models/cart"
import { ICart } from "../types"

class CartDao {
  async getCart(id: string) {
    try {
      const cart = await Cart.findById(id)
      return cart
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }

  async getCarts() {
    try {
      const carts = await Cart.find()
      return carts
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }

  async addCart(id: string, cart: ICart) {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(id, cart, {
        new: true,
      })
      return updatedCart
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }

  async updateCart(id: string, cart: ICart) {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(id, cart, {
        new: true,
      })
      return updatedCart
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }

  async deleteCart(cart: ICart) {
    try {
      const deletedCart = await Cart.findByIdAndDelete(cart)
      return deletedCart
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }
}

export const cartDao = new CartDao()
