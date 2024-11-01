export type UserRole = "admin" | "comprador" | "vendedor"

type filterByPrice = "lower" | "higher"

export interface IUser {
  _id: string | undefined
  firts_name: string
  last_name: string
  user_name: string
  email: string
  password: string
  role?: UserRole
  avatar: string | undefined
}

export interface IProduct {
  _id?: string
  name?: string
  description?: string
  price?: number
  stock?: number
  image?: string
}

export interface ICart {
  products: { product_id: string; quantity: number }[]
  totalPrice: number
}

export interface IOrderProduct {
  product_id: string
  quantity: number
}

export interface IOrder {
  _id?: string
  userId: string
  products: IOrderProduct[]
  totalPrice: number
  createdAt?: Date
  updatedAt?: Date
}

export interface ISearchParams {
  categoryId?: string
  salersId?: string
  filterByPrice?: filterByPrice
  priceRange?: string
  page?: string
  limit?: string
  keyword?: string
}

export interface IEditUserPayload {
  firts_name?: string
  last_name?: string
  user_name?: string
  email?: string
  avatar?: string
}
