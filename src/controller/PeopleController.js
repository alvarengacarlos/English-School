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
}

module.exports = PeopleController;