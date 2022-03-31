const authRouter=require("../controllers/authController");

const router=require("express").Router();


router.post("/register",authRouter.Register);
router.post("/login",authRouter.Login);

module.exports=router;