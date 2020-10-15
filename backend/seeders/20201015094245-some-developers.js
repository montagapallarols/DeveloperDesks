"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("developers", [
      {
        fullName: "Michiel",
        email: "michiel@codaisseur.com",
        password: bcrypt.hashSync("123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Matias",
        email: "matias@codaisseur.com",
        password: bcrypt.hashSync("123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Hande & Joost",
        email: "hande+joost@codaisseur.com",
        password: bcrypt.hashSync("123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Maria",
        email: "maria@codaisseur.com",
        password: bcrypt.hashSync("123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Alex",
        email: "alexandra@codaisseur.com",
        password: bcrypt.hashSync("123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("developers");
  },
};
