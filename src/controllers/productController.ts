// import { Request, Response } from "express"
// import Product from "../models/product"

// class ProductController {
//   async createProduct(req: Request, res: Response) {
//     try {
//       const newProduct = Product.create(req.body)
//       return res.status(201).json(newProduct)
//     } catch (err) {
//       console.error(err)
//     }
//   }

//   async getProducts(req: Request, res: Response) {
//     try {
//       const products = await Product.find()
//       return res.status(200).json(products)
//     } catch (err) {
//       console.error(err)
//     }
//   }

//   async deleteProduct(req: Request, res: Response) {
//     try {
//       const product = await Product.findByIdAndDelete(req.params.id)
//       return res.status(200).json(product)
//     } catch (err) {
//       return res.status(400).json({ error: "Product not found" })
//     }
//   }

//   async updateProduct(req: Request, res: Response) {
//     try {
//       const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//       })
//       return res.status(200).json(product)
//     } catch (error) {
//       return res.status(400).json({ error: "Product not found" })
//     }
//   }

//   async getProduct(req: Request, res: Response) {
//     try {
//       const product = await Product.findById(req.params.id)
//       if (!product) {
//         return res.status(404).json({ error: "Product not found" })
//       }
//       return res.status(200).json(product)
//     } catch (err) {
//       console.error(err)
//       return res.status(500).json({ error: "Internal Server Error" })
//     }
//   }
// }

// export const productController = new ProductController()

import { Request, Response } from "express"
import { productService } from "../services/product"
import { ISearchParams } from "../types"

const { getProduct, getProducts, createProduct, deleteProduct, editProduct } =
  productService

class ProductController {
  async createProduct(req: Request, res: Response) {
    try {
      const productData = req.body
      const newProduct = await createProduct(productData) 
      res.status(201).json(newProduct); 
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      } else {
        res.status(500).json({ msg: 'Internal server error' });
      }
    }
  }

  async getProducts(req: Request, res: Response) {
    const searchParams: ISearchParams = req.query

    try {
      const products = await getProducts(searchParams)
      return res.status(200).json(products)
    } catch (err) {
      return res.status(400).json({ err })
    }
  }

  async deleteProduct(req: Request, res: Response) {
    const { id } = req.params

    try {
      const deletedProduct = await deleteProduct(id)
      if (!deletedProduct) {
        return res.status(404).json({ msg: "Product not found" });
      }
      return res.status(200).json({ msg: "Product deleted", product: deletedProduct });
    } catch (err) {
      return res.status(400).json({ err })
    }
  }

  // async updateProduct(req: Request, res: Response) {
  //   try {
  //     const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
  //       new: true,
  //     })
  //     return res.status(200).json(product)
  //   } catch (error) {
  //     return res.status(400).json({ error: "Product not found" })
  //   }
  // }

  async editProduct(req: Request, res: Response) {
    const { id } = req.params
    const editedProductBody = req.body

    try {
      const editedProduct = await editProduct(id, editedProductBody)
      return res.status(200).json(editedProduct)
    } catch (error) {
      return res.status(400).json({ error })
    }
  }

  async getProduct(req: Request, res: Response) {
    const { id } = req.params

    try {
      const product = await getProduct(id)
      return res.status(200).json(product)
    } catch (err) {
      return res.status(400).json({ err })
    }
  }
}

export const productController = new ProductController()
