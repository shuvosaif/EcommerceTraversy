import jwt from 'jsonwebtoken'
import asyncHandler from './asyncHandler.js'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
  let token
  //Read the JWT from the cookie
  token = req.cookies?.jwt
  console.log(token)
  if (token) {
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET)
      console.log(decode)
      req.user = await User.findById(decode.userId).select('-password')
      return next()
    } catch (error) {
      res.status(401)
      throw new Error('Not Authorized , Token Failed')
    }
  } else {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    console.log("Hi")
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as admin')
  }
}

export { protect, admin }
