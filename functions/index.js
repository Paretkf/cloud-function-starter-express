const functions = require('firebase-functions')
const { app } = require('./config')
const { getAllUser } = require('./core/user')

app.get('/user', getAllUser)

exports.api = functions.https.onRequest(app)

