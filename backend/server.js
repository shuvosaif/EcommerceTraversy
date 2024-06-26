import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
const port = process.env.PORT || 5000

connectDB()
const app = express()
app.use(cors())

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Cookie Parser middleware
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('API Is Running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.get('/api/config/paypal',(req,res)=> res.send({clientId: process.env.PAYPAL_CLIENT_ID}))

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port} `))
