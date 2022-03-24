const CardRoute = require("../controllers/cardController");

const router = require("express").Router();

router.post("/add", CardRoute.addCard);
router.get("/getAll", CardRoute.getCards);
router.get("/get/:id", CardRoute.getCardByOwnerId);
router.put("/update/:id", CardRoute.Cardupdate);
router.delete("/delete/:id", CardRoute.CardDelete);

module.exports = router;