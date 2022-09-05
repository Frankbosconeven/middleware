const router = require().Router
const {createUser,createUser,updateUser,deleteUser, getUsers} = require("../controllers/users.controllers");

const userRouter = router();

userRouter.router("./").get(getUsers).post(createUser);
userRouter.router("./:userId").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter