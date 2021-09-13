const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
  
    product_id: {
      type: DataTypes.INTEGER,
      // needed?? 
      allowNull: false,
          //  caps needed here?? 
          model: 'product',
          key: 'id',
          // needed ?
          unique: false
    },

    tag_id: {
      type: DataTypes.INTEGER,
      // needed ??
      allowNull: false,
          //  caps needed here?? 
          model: 'tag',
          key: 'id',
          // needed ??
          unique: false
    },
   
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
