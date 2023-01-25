const  sequelize  = require("./index");
const DataTypes = require('sequelize')

const Item = sequelize.define("Item", {
    title: {
      type: DataTypes.STRING,
      allowNull : false
    },
    description: {
      type: DataTypes.STRING,
      allowNull : false
    },
    category: {
      type: DataTypes.STRING,
      allowNull : false
    },
    price: { 
        type: DataTypes.DECIMAL,
        allowNull : false},

    quantity: {
      type: DataTypes.INTEGER,
      allowNull : false
    },
    location: {
        type: DataTypes.STRING,
        allowNull : false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull : true,
    },
    date_added: {
        type: DataTypes.DATE,
        defaultValue: Date.now()
    },
    seller:{
        type: DataTypes.STRING,
        allowNull : true
    },
    sold: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    buyer: {
      type: DataTypes.STRING, 
      allowNull: true, 
    },
    stripeId: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  // Item.sync({ alter: true })

  module.exports = Item