const express = require("express");
const app = express();
const booksRouter = require("./routes/booksRouter");
const authorsRouter = require("./routes/authorsRouter");
const indexRouter = require("./routes/indexRouter");

// app.get("/", (req, res) => res.send("Hello, World!"));

// app.post("/", (req, res) => res.send("Post /"));
app.use("/books", booksRouter);
app.use("/authors", authorsRouter);
app.use("/", indexRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`My first Express App - listening on Port: ${PORT}`));