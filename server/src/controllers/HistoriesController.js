const {
  History,
  Game
} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const histories = await History.findAll({
        where: {
          UserId: userId
        },
        include: [{
          model: Game
        }]
      })
        .map(history => history.toJSON())
        .map(history => _.extend({},
          history.Game,
          history
        ))
      res.send(_.uniqBy(histories, history => history.GameId))
    } catch (err) {
      res.status(500).send({
        error: "Erreur en tentant de récupérer l'historique."
      })
    }
  },
  async post (req, res) {
    try {
      const userId = req.user.id
      const {
        gameId
      } = req.body
      const history = await History.create({
        GameId: gameId,
        UserId: userId
      })
      res.send(history)
    } catch (err) {
      res.status(500).send({
        error: 'Erreur en tentant de mettre à jour votre historique.'
      })
    }
  }
}
