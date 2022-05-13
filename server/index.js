const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require("mysql2");
const bodyParser = require('body-parser');

const db = mysql.createPool({
  host: "localhost",
  user: "user-x",
  password: "123456",
  database: "bincom_db"
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/pollUnits', (req, res)=>{
  const sqlSelect = `SELECT polling_unit_name 
    FROM bincom_db.polling_unit 
      JOIN announced_pu_results ON announced_pu_results.polling_unit_uniqueid = polling_unit.uniqueid 
     WHERE polling_unit_id <> 0
    ORDER BY polling_unit_name ASC;`
  db.query(sqlSelect, (err, result)=>{
    res.send(result)
  })
});
app.get('/api/pollResults', (req, res)=>{
  const sqlResult = `SELECT  polling_unit_name, party_abbreviation, result_id, party_score 
  FROM polling_unit 
  JOIN announced_pu_results 
  ON announced_pu_results.polling_unit_uniqueid = polling_unit.uniqueid 
  ORDER BY polling_unit_name ASC;`;
  db.query(sqlResult, (err, result)=>{
   //console.log(result) 
    res.send(result)
  })
});
app.get('/api/lga', (req, res)=>{
  const sqlResult = `SELECT lga_id, lga_name FROM bincom_db.lga;`
  db.query(sqlResult, (err, result)=>{
   console.log(result) 
    res.send(result)
  })
});

app.get('/api/partySum', (req, res)=>{
  const sqlResult = `SELECT  a.party_abbreviation, sum(a.party_score) as party_sum,  b.lga_id, c.lga_name 
FROM announced_pu_results a 
LEFT JOIN polling_unit b ON b.uniqueid  = a.polling_unit_uniqueid
LEFT JOIN lga c ON c.lga_id = b.lga_id
GROUP BY  a.party_abbreviation, b.lga_id, c.lga_name;`
  db.query(sqlResult, (err, result)=>{
   console.log(result) 
    res.send(result)
  })
});


app.post("/api/insert", (req, res)=> {
  //const pollName = req.body.pollName
});
//app.post('/helloPage', (req, res)=>{
  //const sqlInsert = "INSERT INTO movie_reviews (movieName, movie_Review) VALUES('inception', 'awesome movie');"
  //db.query(sqlInsert, (err, result)=>{
    //res.send('hello PEDRO')
//  })
//})

app.listen(3001, ()=> {
  console.log('...running on port 3001')
})
