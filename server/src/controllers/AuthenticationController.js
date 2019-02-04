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
  },
  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(401).send({
          error: 'Aucun utilisateur connu avec cet email.'
        })
      }

      const isPasswordValid = password === user.password
      if (!isPasswordValid) {
        return res.status(401).send({
          error: 'Mot de passe incorrect.'
        })
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson
      })
    } catch (err) {
      res.status(500).send({
        error: 'Une erreur a empêché votre connexion.'
      })
    }
  }
}
