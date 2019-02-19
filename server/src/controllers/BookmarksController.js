const {
  Bookmark
} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {
        gameId,
        userId
      } = req.query

      const bookmark = await Bookmark.findOne({
        where: {
          GameId: gameId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'Erreur en tentant de récupérer les données.'
      })
    }
  },
  async post (req, res) {
    try {
      const {
        gameId,
        userId
      } = req.body

      const bookmark = await Bookmark.findOne({
        where: {
          SongId: gameId,
          UserId: userId
        }
      })
      if (bookmark) {
        return res.statut(400).send({
          error: 'Ce jeu est déjà parmi vos favoris'
        })
      }
      const newBookmark = await Bookmark.create({
        GameId: gameId,
        UserId: userId
      })
      res.send(newBookmark)
    } catch (err) {
      res.status(500).send({
        error: "Erreur en tentant d'ajouter ce jeu à vos préférés."
      })
    }
  },
  async delete (req, res) {
    try {
      const {
        bookmarkId
      } = req.params
      const bookmark = await Bookmark.findById(bookmarkId)
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'Erreur en tentant de retirer ce jeu de vos préférés.'
      })
    }
  }
}
