const { Game } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const games = await Game.findAll({
        limit: 10
      })
      res.send(games)
    } catch (err) {
      res.status(500).send({
        error: 'Erreur en tentant de récupérer les infos des jeux.'
      })
    }
  },
  async post (req, res) {
    try {
      const game = await Game.create(req.body)
      res.send(game)
    } catch (err) {
      res.status(500).send({
        error: 'Erreur : impossible de créer la fiche jeu.'
      })
    }
  }
}
