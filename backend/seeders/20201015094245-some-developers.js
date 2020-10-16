"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("developers", [
      {
        name: "Michiel",
        email: "michiel@codaisseur.com",
        password: bcrypt.hashSync("123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Matias",
        email: "matias@codaisseur.com",
        password: bcrypt.hashSync("123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hande & Joost",
        email: "hande+joost@codaisseur.com",
        password: bcrypt.hashSync("123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Maria",
        email: "maria@codaisseur.com",
        password: bcrypt.hashSync("123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Alex",
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
