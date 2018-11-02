
const admin = require('firebase-admin')
const express = require('express')
const CORS = require('cors')({origin: true})
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(CORS)
admin.initializeApp({
  credential: admin.credential.applicationDefault() 
})

const db = admin.firestore()

module.exports = {
  app,
  db
}
