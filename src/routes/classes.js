const express = require("express");
const ClassesController = require("../controller/ClassesController");

const router = express();

router.get("/classes", ClassesController.getAllClasses);
router.get("/classes/:id", ClassesController.getClassById);
router.post("/classes", ClassesController.createClass);
router.patch("/classes/:id", ClassesController.alterClassById)
router.delete("/classes/:id", ClassesController.deleteClassById);

module.exports = router;