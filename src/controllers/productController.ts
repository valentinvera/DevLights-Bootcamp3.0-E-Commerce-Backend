import { Request, Response } from "express"
import Product from "../models/product"

class ProductController {
  async createProduct(req: Request, res: Response) {
    try {
      const newProduct = Product.create(req.body)
      return res.status(201).json(newProduct)
    } catch (err) {
      console.error(err)
    }
  }

  async getProducts(req: Request, res: Response) {
    try {
      const products = await Product.find()
      return res.status(200).json(products)
    } catch (err) {
      console.error(err)
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      const product = await Product.findByIdAndDelete(req.params.id)
      return res.status(200).json(product)
    } catch (err) {
      return res.status(400).json({ error: "Product not found" })
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      return res.status(200).json(product)
    } catch (error) {
      return res.status(400).json({ error: "Product not found" })
    }
  }

  async getProduct(req: Request, res: Response) {
    try {
      const product = await Product.findById(req.params.id)
      if (!product) {
        return res.status(404).json({ error: "Product not found" })
      }
      return res.status(200).json(product)
    } catch (err) {
      console.error(err)
      return res.status(500).json({ error: "Internal Server Error" })
    }
  }
}

export const productController = new ProductController()
