const fs = require('fs');
require('dotenv').config(); // Load environment config

// Load in the SQL statements
const sql = fs.readFileSync(__dirname + '/countries.sql').toString();

// Get a link to the database
const db = require('./connect.js');

// Run the query
db.query(sql)
    .then(data => {
        db.end();
        console.log('Set up complete.');
    })
    .catch(error => console.log(error));