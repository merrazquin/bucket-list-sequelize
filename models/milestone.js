module.exports = function (sequelize, DataTypes) {
    const Milestone = sequelize.define('milestone', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
            timestamps: false
        })

    Milestone.associate = (models) => {
        Milestone.hasMany(models.item)
    }

    return Milestone
}