// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    // id column 
    id: {
      type: DataTypoes.INTEGER,
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true

    },
    // product_name column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false

    },
    // catergory_id column
    category_id: {
      type: DataTypes.INTEGER,
      refrences: {
        model:'category',
        key:'id'
      }
    },
    // price column
    price: {
      // 10 indicates the total number of digits that can be stored, and 2 indcated the number of digits after the decimal point. 
      type:DataTypes.DECEMIAL(10,2),
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    // stock coloumn
    stock: {
      type: DataTypes.INTEGER,
      allowNullL: false,
      // if no value is provided it automatically sets as 10
      defaultvalue: 10,
      validate: {
        isNumeric: true
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;