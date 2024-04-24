import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  logoutUser,
  getUserById,
  getUserProfile,
  getUsers,
  updateUser,
  updateUserProfile,
  deleteUser,
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.post('/logout', logoutUser)
router.post('/login', authUser)
router.get('/profile', protect, getUserProfile)
router.put('/profile', protect,admin, updateUserProfile)
router.delete('/:id',protect,admin, deleteUser)
router.get('/:id', protect, admin, getUserById)
router.put('/:id', protect, admin, updateUser)
router.get('/', protect, admin, getUsers)
router.post('/', registerUser)

export default router
