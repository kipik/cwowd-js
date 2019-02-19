const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const GamesController = require('./controllers/GamesController')
const BookmarksController = require('./controllers/BookmarksController')

module.exports = app => {
  app.post(
    '/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )
  app.post('/login', AuthenticationController.login)

  app.get('/games', GamesController.index)
  app.get('/games/:gameId', GamesController.show)
  app.post('/games', GamesController.post)
  app.put('/games/:gameId', GamesController.put)

  app.get('/bookmarks', BookmarksController.index)
  app.post('/bookmarks', BookmarksController.post)
  app.delete('/bookmarks/:bookmarkId', BookmarksController.delete)
}
