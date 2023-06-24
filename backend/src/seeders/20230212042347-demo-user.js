'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const salt = await bcrypt.genSalt(10);
    const hashedAdmin = await bcrypt.hash('admin', salt);
    const hashedUser = await bcrypt.hash('tester', salt);

    await queryInterface.bulkInsert('Users', [
      {
        username: 'admin',
        fullname: 'adminname',
        email: 'admin@gmail.com',
        avatar: 'images/image-initAvatar.jpg',
        password: hashedAdmin
      },
      {
        username: 'user',
        fullname: 'username',
        email: 'user@gmail.com',
        avatar: 'images/image-initAvatar.jpg',
        password: hashedUser
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
