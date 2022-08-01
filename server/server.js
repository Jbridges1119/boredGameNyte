require("dotenv").config()
const express = require("express")
const cors = require('cors')
const db = require('./db')
const cookieSession = require('cookie-session');
const methodOverride = require('method-override')
const morgan = require("morgan")
const app = express()

//MIDDLEWARE
//Morgan - console.logs server connection info on request
//CookieSession - encrypted cookie
app.use(cors())
app.use(morgan("dev"))
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
  name: 'session',
  keys: ["key1", "key2", "key3"],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

//app.use((req, res, next) => {
//   console.log("Custom middleware, you can put any action here instead of console.log")
// })

// ROUTES
const usersRoutes = require("./routes/users");  
app.use("/users", usersRoutes(db));

// app.get("/", (req,res) => {
//   db.query("SELECT * FROM users")
//   .then((data) =>{
//     console.log(data.rows)
//   })
// })



//SERVER CONNECTION
const port = process.env.PORT || 3005
app.listen(port, () => {
   console.log(`Server is running and listening to port ${port}`)
})