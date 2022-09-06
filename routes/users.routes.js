const router = require("express").Router
const {createUser,updateUser,deleteUser, getUsers} = require("../controllers/users.controllers");
const { pathMiddleware } = require("../middlewares/pathMiddleware");

const userRouter = router();

userRouter.router("./").get(pathMiddleware, getUsers).post(createUser);
userRouter.router("./:userId").get(getUsers).patch(updateUser).delete(deleteUser);

module.exports = userRouter;