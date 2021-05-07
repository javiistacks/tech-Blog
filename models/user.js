const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

//establishes our USER MODEL
class User extends Model {

//THIS METHOD WILL CHECK THE PASSWORD FOR EACH USER
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

//HELPS DEFINE TABLE COLUMNS AND CONFIG
User.init(
    {
      //SPECIFY ID COLUMN
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },

          //SPECIFY USERNAME COLUMN
          username: {
            type: DataTypes.STRING,
            allowNull: false
          },
          twitter: {
              type: DataTypes.STRING,
              allowNull: true
          },
          github: {
              type: DataTypes.STRING,
              allowNull: true
          },

          // SPECIFY EMAIL COLUMN
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true
            }
          },

          // SPECIFY PASSWORD COLUMN
          password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [4]
            }
          }
        },
    {

        hooks: {

            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
          },

          sequelize,
          timestamps: false,
          freezeTableName: true,
          nderscored: true,
          modelName: 'user'
  }
);

module.exports = User;
