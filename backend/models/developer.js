"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class developer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      developer.hasMany(models.desk);
      developer.hasMany(models.comment);
    }
  }
  developer.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      fullName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "developer",
    }
  );
  return developer;
};
