const database  = require("../models/index");

class PeopleController {

    static async getAllPeople(req, res) {
        
        try {
            const allPeople = await database.People.findAll();
                        
            return res.status(200).json(allPeople);    

        } catch (error) {
            return res.status(500).json(error.message);
        }        
    }

    static async getPeopleById(req, res) {
        
        const peopleId = req.params.id;
        
        try {
            const people = await database.People.findOne({where: {id: Number(peopleId)}});
            return res.status(200).json(people);

        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async createPeople(req, res) {

        const people = req.body;

        try {
            const newPeople = await database.People.create(people);
            return res.status(201).json(newPeople);

        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async alterPeopleById(req, res) {

        const people = req.body;
        const peopleId = req.params.id;
        
        try {
            await database.People.update(people, {where: {id: Number(peopleId)}});
            
            const newPeople = await database.People.findOne({where: {id: Number(peopleId)}});
            
            return res.status(200).json(newPeople);
        
        } catch (error) {
            return res.status(500).json({message: error});
        }
    }

    static async deletePeopleById(req, res) {

        const peopleId = req.params.id;

        try {
            await database.People.destroy({where: {id: Number(peopleId)}});

            return res.status(200).json({message: `Deleted id ${peopleId}`});

        } catch (error) {
            return res.status(500).json(error);
        }
    }

    /**
     * Enrollments methods
     */

    static async getEnrollmentsByIdAndByStudentId(req, res) {

        const enrollmentId = req.params.id;
        const studentId = req.params.studentId;

        try {
            const enrollment = await database.Enrollments.findOne({
                where: {
                    id: Number(enrollmentId),
                    studentId: Number(studentId)
                }
            });
            
            return res.status(200).json(enrollment);

        } catch (error) {
            return res.status(500).json(error);
        }

    }

    static async createEnrollment(req, res) {

        const studentId = req.params.studentId;
        const enrollment = req.body;

        try {
            const newEnrollment = await database.Enrollments.create({...enrollment, studentId});
            
            return res.status(201).json(newEnrollment);

        } catch (error) {
            return res.status(500).json(error);
        }

    }

    static async alterEnrollmentByIdAndByStudentId(req, res) {

        const enrollment = req.body;        
        const enrollmentId = req.params.id;
        const studentId = req.params.studentId;

        try {
            await database.Enrollments.update({...enrollment, studentId}, {
                where: {
                    id: Number(enrollmentId),
                    studentId: Number(studentId)
                }
            });
            
            const newEnrollment = await database.Enrollments.findOne({
                where: {id: Number(enrollmentId)}
            });

            return res.status(200).json(newEnrollment);

        } catch (error) {
            return res.status(500).json(error);
        }

    }

    static async deleteEnrollmentByIdAndByStundentId(req, res) {

        const enrollmentId = req.params.id;
        const studentId = req.params.studentId;

        try {
            await database.Enrollments.destroy({
                where: {
                    id: Number(enrollmentId),
                    studentId: Number(studentId)
                }
            });

            return res.status(200).json({message: `Deleted id ${enrollmentId}`});

        } catch (error) {
            return res.status(500).json(error);
        }

    }
}

module.exports = PeopleController;