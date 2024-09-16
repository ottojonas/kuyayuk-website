const sqlite3 = require('sqlite3').verbose()
const { OPEN_READWRITE } = require('sqlite3')

let productDatabaseTable = new sqlite3.Database(
  '../product-db.db',
  OPEN_READWRITE,
  err => {
    if (err) {
      return console.error(err.message)
    }
    console.log('connected to product-db.db')
  }
)

const products = ['Azufre', 'PaloSantos', 'Masks', 'Ashwaganda']

function insertData() {
  var insertQuery = productDatabaseTable.prepare()
  for (var i = 0; i < products.length; i++) {
    insertQuery.run(i, products[i])
    console.log('data inserted successfully')
  }
  insertQuery.finalize()
}
