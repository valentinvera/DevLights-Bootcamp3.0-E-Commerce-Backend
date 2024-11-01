import Product from "../models/product"
import { IProduct } from "../types"

class ProductDao {
  async getAllProducts(
    categoryId: string | undefined,
    salersId: string | undefined,
    priceStart: number | undefined,
    priceEnd: number | undefined,
    sort: -1 | 1 | undefined,
    page: string,
    limit: string,
    keyword: string | undefined,
  ) {
    try {
      const skip = (Number(page) - 1) * Number(limit);
      const products = await Product.find({
        stock: { $gt: 0 },
        ...(categoryId ? { category_id: categoryId } : {}), 
        ...(salersId ? { salers_id: salersId } : {}),
        ...(priceStart && priceEnd
          ? { price: { $gte: priceStart, $lte: priceEnd } }
          : {}),
        ...(keyword ? { name: { $regex: keyword, $options: "i" } } : {}),
      })
        .sort(sort && { price: sort })
        .skip(skip)
        .limit(Number(limit));
      return products;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }

  async getProductById(productId: string) {
    try {
      const product = await Product.findById(productId)
      return product
    } catch (error) {
      throw Error((error as Error).message)
    }
  }

  async createProduct(product: IProduct) {
    console.log(product)
    try {
      const newProduct = await Product.create(product)
      console.log(newProduct)
      return newProduct
    } catch (error) {
      throw Error((error as Error).message)
    }
  }

  async editProduct(productId: string, product: IProduct) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        product,
        { new: true },
      )
      return updatedProduct
    } catch (error) {
      throw Error((error as Error).message)
    }
  }

  async deleteProduct(_id: string) {
    try {
      const deletedProduct = await Product.findByIdAndDelete(_id);
    if (!deletedProduct) {
      throw new Error("Product not found");
    }
    return deletedProduct;
    } catch (error) {
      throw Error((error as Error).message)
    }
  }
}

export const productDao = new ProductDao()
