const {
  Game
} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let games = null
      const search = req.query.search
      if (search) {
        games = await Game.findAll({
          where: {
            $or: [
              'title', 'designer', 'artist', 'editor'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        games = await Game.findAll({
          limit: 20
        })
      }
      res.send(games)
    } catch (err) {
      res.status(500).send({
        error: 'Erreur en tentant de récupérer les infos des jeux.'
      })
    }
  },
  async show (req, res) {
    try {
      const game = await Game.findById(req.params.gameId)
      res.send(game)
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
  },
  async put (req, res) {
    try {
      await Game.update(req.body, {
        where: {
          id: req.params.gameId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'Erreur : impossible de mettre à jour la fiche jeu.'
      })
    }
  }
}
