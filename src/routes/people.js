const express = require("express");
const PeopleController = require("../controller/PeopleController");

const router = express();
router.get("/people", PeopleController.getAllPeople);
router.get("/people/:id", PeopleController.getPeopleById);
router.post("/people", PeopleController.createPeople);
router.patch("/people/:id", PeopleController.alterPeopleById);
router.delete("/people/:id", PeopleController.deletePeopleById);

//Enrollments
router.get("/people/:studentId/enrollments/:id", PeopleController.getEnrollmentsByIdAndByStudentId);
router.post("/people/:studentId/enrollments", PeopleController.createEnrollment);
router.patch("/people/:studentId/enrollments/:id", PeopleController.alterEnrollmentByIdAndByStudentId);
router.delete("/people/:studentId/enrollments/:id", PeopleController.deleteEnrollmentByIdAndByStundentId);

module.exports = router;