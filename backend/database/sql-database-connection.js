const sqlite3 = require('sqlite3').verbose()

// connection to product-db database using sqlite3
let database = new sqlite3.Database('../database/product-db.db', err => {
  if (err) {
    return console.error(err.message)
  }
  console.log('conected to produect-db sqlite database')
})
