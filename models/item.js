module.exports = function (sequelize, DataTypes) {
  const Item = sequelize.define('item', {
    item: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 140]
      }
    },
    accomplished: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })

  Item.associate = (models) => {
    Item.belongsTo(models.milestone)
  }

  return Item
}
