const userRouter = require(`../controllers/userController`);

const router = require("express").Router();

router.post("/add", userRouter.addUser);
router.get("/getAll", userRouter.getUsers);
router.put("/update/:id", userRouter.updateUser);
router.delete("/delete/:id", userRouter.deleteUser);

module.exports = router;
