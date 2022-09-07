const {DataTypes} = require('sequelize')

module.exports= (sequelize) => {
  sequelize.define("comment",{
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,

    },
    comment:{
      type: DataTypes.TEXT,
      allowNull: false,
    }
  })
}