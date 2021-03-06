'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Project.init({
    name: DataTypes.STRING,
    thumbnailUrl: DataTypes.STRING,
    thumbnailCdnId: DataTypes.STRING,
    show: DataTypes.BOOLEAN,
    order: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    internalUrl: DataTypes.STRING,
    url: DataTypes.STRING,
    description: DataTypes.STRING,
    homeDescription: DataTypes.STRING,
    goal: DataTypes.STRING,
    myRole: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};