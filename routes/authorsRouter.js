const { Router } = require("express");

const authorsRouter = Router();

authorsRouter.get("/", (req, res) => res.send("All Authors"));
authorsRouter.get(":authorId", (req, res) => {
    const {authorId} = req.params;
    res.send(`Author ID: ${authorId}`);
})

module.exports = authorsRouter