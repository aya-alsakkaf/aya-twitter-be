// imports
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./database");
const notFoundHandler = require("./middleware/notFoundHandler");
const errorHandler = require("./middleware/errorHandler");
const postRouter = require("./apis/posts/posts.routes");
const path = require("path");

// init
dotenv.config();
const app = express();
connectDB();
const PORT = process.env.PORT;

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/posts", postRouter);
app.use("/media", express.static(path.join(__dirname, "media")));
//not found handler
app.use(notFoundHandler);
// error handler
app.use(errorHandler);

// starting
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
