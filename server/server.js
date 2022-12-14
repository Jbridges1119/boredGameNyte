require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const cookieSession = require("cookie-session");
const methodOverride = require("method-override");
const morgan = require("morgan");
const app = express();

//MIDDLEWARE
//Morgan - console.logs server connection info on request
//CookieSession - encrypted cookie
app.use(cors());
app.use(morgan("common"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2", "key3"],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

// ROUTES

const usersRoutes = require("./routes/users");
const gameNyteRoutes = require("./routes/gamenytes");
const gameCollectionRoutes = require("./routes/gamecollection");

app.use("/api/users", usersRoutes(db));
app.use("/api/gamenytes", gameNyteRoutes(db));
app.use("/api/gamecollection", gameCollectionRoutes(db));

//SERVER CONNECTION
const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server is running and listening to port ${port}`);
});
