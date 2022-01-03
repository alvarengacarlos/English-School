'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Enrollments', [
		{
			status: "confirmado",
			studentId: 1,
			classId: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			status: "confirmado",
			studentId: 2,
			classId: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			status: "confirmado",
			studentId: 3,
			classId: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			status: "confirmado",
			studentId: 4,
			classId: 3,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			status: "cancelado",
			studentId: 1,
			classId: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			status: "cancelado",
			studentId: 2,
			classId: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		}
		], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Enrollments', null, {})
  }
};
