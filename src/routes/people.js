const Router = require("express");
const peopleController = require("../controller/PeopleController");

const router = Router();
router.get("/people", peopleController.getAllPeople);
router.get("/people/:id", peopleController.getPeopleById);
router.post("/people", peopleController.createPeople);
router.patch("/people/:id", peopleController.alterPeopleById);
router.delete("/people/:id", peopleController.deletePeopleById);

module.exports = router;