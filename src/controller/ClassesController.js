const database = require("../models/index");

class ClassesController {

    static async getAllClasses(req, res) {
        
        try {
            const classes = await database.Classes.findAll();
            return res.status(200).json(classes);

        } catch (error) {
            return res.status(500).json(error);
        }

    }

    static async getClassById(req, res) {
        
        const classId = req.params.id;

        try {
            const classs = await database.Classes.findOne({
                where: {id: Number(classId)}
            });

            return res.status(200).json(classs);
        
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async createClass(req, res) {

        const newClass = req.body;

        try {
            const classs = await database.Classes.create(newClass);

            return res.status(200).json(classs);
        
        } catch (error) {
            return res.status(500).json(error);
        }

    }

    static async alterClassById(req, res) {

        const newClass = req.body;
        const classId = req.params.id;

        try {
            await database.Classes.update(newClass, {
                where: {id: Number(classId)}
            });

            const classs = await database.Classes.findOne({
                where: {id: Number(classId)}
            });

            return res.status(200).json(classs);
        
        } catch (error) {
            return res.status(500).json(error);
        }

    }

    static async deleteClassById(req, res) {
        
        const classId = req.params.id;

        try {
            await database.Classes.destroy({
                where: {id: Number(classId)}
            });

            return res.status(200).json({message: `Deleted id ${classId}`});
        
        } catch (error) {
            return res.status(500).json(error);
        }

    }

}

module.exports = ClassesController;