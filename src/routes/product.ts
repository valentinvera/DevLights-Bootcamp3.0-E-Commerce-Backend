import express from "express"
import { productController } from "../controllers/productController"

const productsRouter = express.Router()

productsRouter.get("/getProducts", productController.getProducts)
productsRouter.get("/getProduct/:id", productController.getProduct)
productsRouter.post("/create-product", productController.createProduct)
productsRouter.delete("/delete-product/:id", productController.deleteProduct)
productsRouter.put("/edit-product/:id", productController.editProduct)

export default productsRouter
