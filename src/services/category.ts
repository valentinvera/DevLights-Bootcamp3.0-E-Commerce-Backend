import { categoryDao } from "../daos/category"

const { getCategories, createCategory, updateCategory, deleteCategory } =
  categoryDao

class CategoryService {
  async getCategories() {
    try {
      return await getCategories()
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }

  async createCategory(category: string) {
    try {
      return await createCategory(category)
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }

  async updateCategory(id: string, category: string) {
    try {
      return await updateCategory(id, category)
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }

  async deleteCategory(id: string) {
    try {
      return await deleteCategory(id)
    } catch (error) {
      throw Error((error as Error).message)
    }
  }
}

export const categoryService = new CategoryService()
