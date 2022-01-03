const express = require("express");
const LevelsController = require("../controller/LevelsController");

const router = express();

router.get("/levels", LevelsController.getAllLevels);
router.get("/levels/:id", LevelsController.getLevelById);
router.post("/levels", LevelsController.createLevel);
router.patch("/levels/:id", LevelsController.alterLevelById);
router.delete("/levels/:id", LevelsController.deleteById);

module.exports = router;