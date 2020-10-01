"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      comment.belongsTo(models.developer);
      comment.belongsTo(models.desk);
    }
  }
  comment.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      deskId: DataTypes.INTEGER,
      developerId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "comment",
    }
  );
  return comment;
};
