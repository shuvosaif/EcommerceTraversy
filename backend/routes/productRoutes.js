import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductsById,
} from '../controllers/productController.js'

router.get('/', getProducts)
router.get('/:id', getProductsById )

export default router
