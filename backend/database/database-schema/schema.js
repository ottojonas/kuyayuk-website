const { OPEN_READWRITE } = require('sqlite3')

const sqlite3 = require('sqlite3').verbose()

let productDatabase = new sqlite3.Database(
  '../product-db.db',
  OPEN_READWRITE,
  err => {
    if (err) {
      return console.error(err.message)
    }
    console.log('connected to product-db')
  }
)

productDatabase.serialize(function () {
  productDatabase.run('CREATE TABLE products (id, name, category)')
})

productDatabase.close()
