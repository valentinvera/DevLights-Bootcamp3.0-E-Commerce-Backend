import express from "express"
import { categoryController } from "../controllers/categoryController"
import { adminRoutes } from "../middlewares/adminRoutes"

const categoryRouter = express.Router()
categoryRouter.use(adminRoutes)

categoryRouter.get("/", categoryController.getCategories)
categoryRouter.post("/addCategory", categoryController.createCategory)
categoryRouter.put("/updateCategory/:id", categoryController.updateCategory)
categoryRouter.delete("/deleteCategory/:id", categoryController.deleteCategory)

export default categoryRouter
