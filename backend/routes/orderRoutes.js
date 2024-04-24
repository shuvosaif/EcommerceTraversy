import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.get('/mine', protect,getMyOrders)
router.get('/:id', protect,admin,getOrderById)
router.put('/:id/pay', protect, updateOrderToPaid)
router.get('/', protect, admin, getOrders)
router.post('/', protect, addOrderItems)
router.put('/:id/deliver', protect, admin, updateOrderToDelivered)


export default router
