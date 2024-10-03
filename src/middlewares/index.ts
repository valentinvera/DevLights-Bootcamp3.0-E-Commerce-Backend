import { Request, Response } from "express"
import { verify } from "jsonwebtoken"

export const isAdmin = (req: Request, res: Response, next: Function) => {
  const token = req.headers
  try {
    const isTokenvalid = verify(
      token["auth-token"] as string,
      process.env.JWT_SECRET!,
    )
    if (isTokenvalid) {
      next()
    } else {
      res.status(401).send("Unauthorized User")
    }
  } catch (error) {
    return res.status(500).send(error)
  }
}
