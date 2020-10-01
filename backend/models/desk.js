"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class desk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      desk.belongsTo(models.developer);
    }
  }
  desk.init(
    {
      imageUrl: DataTypes.STRING,
      developerId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      lat: DataTypes.STRING,
      lng: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "desk",
    }
  );
  return desk;
};
