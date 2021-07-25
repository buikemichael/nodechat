"use strict";
const { image } = require("faker");
const faker = require("faker");

const users = [...Array(10)].map((user) => ({
  name: faker.name.firstName() + " " + faker.name.lastName(),
  email: faker.internet.exampleEmail(),
  password: faker.datatype.number({
    min: 10000,
    max: 99999,
  }),
  profileImg: image.avatar(),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    console.log(users.length);
    users.forEach(user=>{
        await models.user.create({
            user
        })
    })
    // await queryInterface.bulkInsert("users", users, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
