const {
  sequelize,
  Game,
  User,
  Bookmark
} = require('../src/models')

const Promise = require('bluebird')
const users = require('./users.json')
const games = require('./games.json')
const bookmarks = require('./bookmarks.json')

sequelize.sync({
  force: true
})
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )
    await Promise.all(
      games.map(game => {
        Game.create(game)
      })
    )
    await Promise.all(
      bookmarks.map(bookmark => {
        Bookmark.create(bookmark)
      })
    )
  })
