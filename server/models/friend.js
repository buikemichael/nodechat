"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class friend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      //   this shows the user details when retriving friends
      models.friend.hasOne(models.user, {
        as: "friendInfo",
        foreignKey: "id",
        sourceKey: "friendUserId",
      });
      //   this shows the user details when sending friendrequest, it includes the inviter user details
      models.friend.hasOne(models.user, {
        as: "inviter",
        foreignKey: "id",
        sourceKey: "userId",
      });
      models.friend.hasMany(models.message, {
        foreignKey: "messageId",
        sourceKey: "messageId",
      });
    }
  }
  friend.init(
    {
      userId: DataTypes.INTEGER,
      friendUserId: DataTypes.INTEGER,
      nameOfUser: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      friendName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      messageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "friend",
    }
  );

  return friend;
};
