const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{6,32}$'))
    }

    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Vous devez entrer une adresse email valide'
          })
          break
        case 'password':
          res.status(400).send({
            error: `Votre mot de passe doit respecter les règles suivantes :
            <br>
            1. Etre composé seulement de lettres (minuscules et/ou majuscules) et chiffres
            <br>
            2. Comprendre au moins 6 caractères.
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Informations incorrectes'
          })
      }
    } else {
      next()
    }
  }
}
