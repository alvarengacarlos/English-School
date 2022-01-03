'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Classes', [
			{
				startDate: "2020-02-01",
				teacherId: 6,
				levelId: 1,			
				createdAt: new Date(),
				updatedAt: new Date()				 
			},
			{
				startDate: "2020-02-01",
				teacherId: 5,
				levelId: 2,				
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				startDate: "2020-02-01",
				teacherId: 6,
				levelId: 3,				
				createdAt: new Date(),
				updatedAt: new Date()			
				},
			{
				startDate: "2020-07-01",
				teacherId: 6,
				levelId: 3,				
				createdAt: new Date(),
				updatedAt: new Date()			
			}
		], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Classes', null, {});
  }
};
