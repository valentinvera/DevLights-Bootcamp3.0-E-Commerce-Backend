import Category from "../models/category"

class CategoryDao {
  async getCategories() {
    try {
      return await Category.find()
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }

  async createCategory(category: string) {
    try {
      const newCategory = await Category.create(category)
      return newCategory
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }

  async updateCategory(id: string, category: string) {
    try {
      const updatedCategory = await Category.findByIdAndUpdate(
        id,
        { category },
        { new: true },
      )
      return updatedCategory
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }

  async deleteCategory(id: string) {
    try {
      const deleteCategory = await Category.findByIdAndDelete(id)
      return deleteCategory
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }
}

export const categoryDao = new CategoryDao()
