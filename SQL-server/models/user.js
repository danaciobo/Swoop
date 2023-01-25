const  sequelize  = require("./index");
const DataTypes = require('sequelize')


const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull : false
    },
    
    firstName:{
        type: DataTypes.STRING,
        allowNull : false

    },
    lastName:{
        type: DataTypes.STRING,
        allowNull : false
    },
    avatar: {
        type: DataTypes.STRING,
        
    },
    phoneNumber: {
        type: DataTypes.BIGINT,
        allowNull : false
    },
   
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      }
      
})

// User.sync({ alter: true })

module.exports = User