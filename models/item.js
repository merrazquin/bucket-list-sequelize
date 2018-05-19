module.exports = function (sequelize, DataTypes) {
  return sequelize.define('item', {
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
}
