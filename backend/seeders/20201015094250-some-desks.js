"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("desks", [
      {
        uri:
          "https://res.cloudinary.com/daxjf54p3/image/upload/v1601306412/hmvcvmdpj3dqgca4vtqk.jpg",
        developerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uri:
          "https://res.cloudinary.com/daxjf54p3/image/upload/v1601299132/pgzw8qoegk56qbnpatac.jpg",
        developerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uri:
          "https://res.cloudinary.com/daxjf54p3/image/upload/v1601299126/kdcdh6jtrw1qwwpjopjt.jpg",
        developerId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uri:
          "https://res.cloudinary.com/daxjf54p3/image/upload/v1601299119/dpsbdc0hq2qr9jebk5zh.jpg",
        developerId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uri:
          "https://res.cloudinary.com/daxjf54p3/image/upload/v1601298639/dmi3ccpbwbauyotcx5ui.jpg",
        developerId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("desks");
  },
};
