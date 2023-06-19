'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, {foreignKey: "ID_User"});
      User.hasMany(models.Comment, {foreignKey: "ID_User"});
    }
  }
  User.init({
    ID_User: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
    },
    ID_fb: DataTypes.INTEGER,
    fullname: DataTypes.STRING(45),
    username: DataTypes.STRING(45),
    email: DataTypes.STRING(45),
    bio: DataTypes.STRING(45),
    password: DataTypes.STRING(45),
    avatar: DataTypes.TEXT('medium'),
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};