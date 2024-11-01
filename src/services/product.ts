import { IProduct, ISearchParams } from "../types"
import { productDao } from "../daos/product"

const {
  getAllProducts,
  getProductById,
  createProduct,
  editProduct,
  deleteProduct,
} = productDao

class ProductService {
  async getProduct(id: string) {
    try {
      const product = await getProductById(id)
      return product
    } catch (error) {
      throw Error((error as Error).message)
    }
  }

  async getProducts(searchParams: ISearchParams) {
    const {
      categoryId,
      salersId,
      filterByPrice,
      priceRange,
      page = "1",
      limit = "10",
      keyword,
    } = searchParams
    let priceStart: number | undefined
    let priceEnd: number | undefined
    let sort: -1 | 1 | undefined
    if (filterByPrice) {
      sort = filterByPrice === "lower" ? 1 : -1
    }
    if (priceRange) {
      const [start, end] = priceRange.split(",")
      priceStart = Number(start)
      priceEnd = Number(end)
    }
    try {
      const products = await getAllProducts(
        categoryId,
        salersId,
        priceStart,
        priceEnd,
        sort,
        page,
        limit,
        keyword,
      )

      return products
    } catch (error) {
      throw Error((error as Error).message)
    }
  }

  async createProduct(product: IProduct) {
    try {
      const newProduct = await createProduct(product)
      return newProduct
    } catch (error) {
      throw Error((error as Error).message)
    }
  }

  async editProduct(id: string, product: IProduct) {
    try {
      const updatedProduct = await editProduct(id, product)
      return updatedProduct
    } catch (error) {
      throw Error((error as Error).message)
    }
  }

  async deleteProduct(_id: string) {
    try {
      const deletedProduct = await deleteProduct(_id)
      return deletedProduct
    } catch (error) {
      throw Error((error as Error).message)
    }
  }
}

export const productService = new ProductService()
