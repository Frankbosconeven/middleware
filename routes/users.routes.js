const router = require("express").Router
const {pathMiddleware} = require("./middlewares/pathMiddleware");

const {getUser, createUser,updateUser,deleteUser, getUsers} = require("../controllers/users.controllers");

const userRouter = router();

userRouter.router("./").get(pathMiddleware, getUsers).post(createUser);
userRouter.router("./:userId").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter;