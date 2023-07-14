const express = require('express')
const connectDB = require('./config/db.js')
const travelRouter = require('./routes/travelRoutes.js')
require('dotenv').config()
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const cors = require('cors')
const authRouter = require('./routes/auth.js')
const authMiddleware = require('./middleware/authMiddleware.js')
const app = express() 

app.use(cors())
app.use(express.json())
app.use(cookieParser());
app.use(flash())
app.use(session({ secret: "Dima", resave: false,cookie: {maxAge: 60000}, saveUninitialized: false}));
app.use(express.urlencoded({extended: false}))
app.use('/api/travel', travelRouter)
app.use('/users', authRouter)

const PORT = process.env.PORT || 5000
// app.use(cors({
//   origin: 'http://127.0.0.1:3000',
// }))
connectDB()

app.get('/', (req, res) => {
  res.send("Hello")
})


app.listen(PORT, console.log(`Server is running on port ${PORT}...`))