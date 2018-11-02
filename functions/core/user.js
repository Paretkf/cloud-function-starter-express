const { db } = require('../config')

const getAllUser = (request, response) => {
  let results = []
  db.collection('user').get().then(snapshot => {
    snapshot.forEach(doc => {
      results.push({
        id: doc.id,
        data: doc.data()
      })
    })
    response.status(200).send(results)
    throw snapshot
  }).catch (err => {
    return err
  })
}

module.exports = {
  getAllUser
}