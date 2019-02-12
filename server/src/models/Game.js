module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    title: DataTypes.STRING,
    designer: DataTypes.STRING,
    artist: DataTypes.STRING,
    editor: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    description: DataTypes.TEXT,
    plateforme: DataTypes.STRING,
    dateStartKS: DataTypes.STRING,
    dateEndKS: DataTypes.STRING,
    langue: DataTypes.STRING,
    lienKS: DataTypes.STRING
  })

  Game.associate = function (models) {}

  return Game
}
