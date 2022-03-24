const accountRouter = require("../controllers/accountController");

const router = require("express").Router();

router.post("/add", accountRouter.addAccount);
router.get("/getAll", accountRouter.getAccounts);
router.get("/get/:id", accountRouter.getAccountById);
router.put("/update/:id", accountRouter.updateAccount);
router.delete("/delete/:id", accountRouter.deleteAccount);

module.exports = router;