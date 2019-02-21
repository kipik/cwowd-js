const {
  Bookmark,
  Game
} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const {
        gameId
      } = req.query
      const where = {
        UserId: userId
      }
      if (gameId) {
        where.GameId = gameId
      }
      const bookmarks = await Bookmark.findAll({
        where: where,
        include: [{
          model: Game
        }]
      })
        .map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend({},
          bookmark.Game,
          bookmark
        ))
      res.send(bookmarks)
    } catch (err) {
      res.status(500).send({
        error: 'Erreur en tentant de récupérer les données.'
      })
    }
  },
  async post (req, res) {
    try {
      const userId = req.user.id
      const {
        gameId
      } = req.body
      const bookmark = await Bookmark.findOne({
        where: {
          GameId: gameId,
          UserId: userId
        }
      })
      if (bookmark) {
        return res.status(400).send({
          error: 'Ce jeu est déjà parmi vos favoris'
        })
      }
      const newBookmark = await Bookmark.create({
        GameId: gameId,
        UserId: userId
      })
      res.send(newBookmark)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: "Erreur en tentant d'ajouter ce jeu à vos préférés."
      })
    }
  },
  async remove (req, res) {
    try {
      const userId = req.user.id
      const {
        bookmarkId
      } = req.params
      const bookmark = await Bookmark.findOne({
        where: {
          id: bookmarkId,
          UserId: userId
        }
      })
      if (!bookmark) {
        return res.status(403).send({
          error: 'Erreur. Vous ne pouvez pas supprimer ce jeu de vos préférés'
        })
      }
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'Erreur en tentant de retirer ce jeu de vos préférés.'
      })
    }
  }
}
