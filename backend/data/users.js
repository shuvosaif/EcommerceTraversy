import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('1234', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@email.com',
    password: bcrypt.hashSync('1234', 10),
    isAdmin: false,
  },
  {
    name: 'jane Doe',
    email: 'jane@email.com',
    password: bcrypt.hashSync('1234', 10),
    isAdmin: false,
  },
]

export default users
