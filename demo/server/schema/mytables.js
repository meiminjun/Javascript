/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mytables', {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sex: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    tableName: 'mytables',
    timestamps: false
  });
};
