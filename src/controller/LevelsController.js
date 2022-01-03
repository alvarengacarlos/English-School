const database = require("../models/index");

class LevelsController {
    
    static async getAllLevels(req, res) {
        
        try {
            const levels = await database.Levels.findAll();
            return res.status(200).json(levels);
        
        } catch (error) {
            return res.status(500).json(error);
        }        

    }

    static async getLevelById(req, res) {
        
        const levelId = req.params.id;
        
        try {
            const level = await database.Levels.findOne({
                    where: {id: Number(levelId)}
            });

            return res.status(200).json(level);

        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async createLevel(req, res) {
        
        const newLevel = req.body;

        try {
            const level = await database.Levels.create(newLevel);
            
            return res.status(200).json(level);
        
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async alterLevelById(req, res) {
        
        const levelId = req.params.id;
        const level = req.body;

        try {
            await database.Levels.update(level, {
                where: {id: Number(levelId)}
            });

            const newLevel = await database.Levels.findOne({
                where: {id: Number(levelId)}
            });

            return res.status(200).json(newLevel);
        
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async deleteById(req, res) {
        
        const levelId = req.params.id;

        try {
            await database.Levels.destroy({
                where: {id: Number(levelId)}
            });

            return res.status(200).json({message: `Deleted id ${levelId}`});
        
        } catch (error) {
            return res.status(500).json(error);
        }
    }

}

module.exports = LevelsController;