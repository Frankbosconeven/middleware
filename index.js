const express = require("express");
const userRouter = require("./routes/users.routes");
const {globalMiddleware} = require("./middlewares/globalMiddleware");

const app = express();

app.use(globalMiddleware);

app.get("./", (req, res)=> {
    res.status(200).send("server is ready to run")
});

app.listen(4000, (err) => {
    console.log("server start running https://localhost:4000");
});