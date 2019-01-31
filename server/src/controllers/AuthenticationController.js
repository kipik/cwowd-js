const { User } = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send(userJson)
    } catch (err) {
      res.status(400).send({
        error: 'Un compte utilisant cet email existe déjà.'
      })
    }
  }
}
