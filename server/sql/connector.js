var mysql      = require('mysql');
//var express    = require("express");

//var connection = mysql.createConnection({
//    host     : 'localhost',
//    user     : 'me',
//    password : 'secret',
//    database : 'my_db'
//});
//
//connection.connect();
//
//connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//    if (err) throw err;
//
//    console.log('The solution is: ', rows[0].solution);
//});
//
//connection.end();
//var mysql      = require('mysql');
//var connection = mysql.createConnection({
//    host     : 'example.org',
//    user     : 'bob',
//    password : 'secret'
//});
//
//connection.connect(function(err) {
//    if (err) {
//        console.error('error connecting: ' + err.stack);
//        return;
//    }
//
//    console.log('connected as id ' + connection.threadId);
//});


//    var mysql      = require('mysql');
//var connection = mysql.createConnection();
//
//connection.query('SELECT 1', function(err, rows) {
//    // connected! (unless `err` is set)
//});
//global.
// First you need to create a connection to the db
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "lono"
});

con.connect(function(err){
    if(err){
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection MySQL established');
});

//con.query('SELECT * FROM employees',function(err,rows){
//    if(err) throw err;
//
//    console.log('Data received from Db:\n');
//    console.log(rows);
//    for (var i = 0; i < rows.length; i++) {
//        console.log(rows[i].name);
//    }
//});
//
//var employee = { name: 'Winnie', location: 'Australia' };
////con.query('INSERT INTO employees SET ?', employee, function(err,res){
////    if(err) throw err;
////
////    console.log('Last insert ID:', res.insertId);
////});
//
//con.query(
//    'UPDATE employees SET location = ? Where ID = ?',
//    ["South Africa", 5],
//    function (err, result) {
//        if (err) throw err;
//
//        console.log('Changed ' + result.changedRows + ' rows');
//    }
//);
//
//con.query(
//    'DELETE FROM employees WHERE id = ?',
//    [5],
//    function (err, result) {
//        if (err) throw err;
//
//        console.log('Deleted ' + result.affectedRows + ' rows');
//    }
//);
////con.end(function(err) {
//    // The connection is terminated gracefully
//    // Ensures all previously enqueued queries are still
//    // before sending a COM_QUIT packet to the MySQL server.
////});
connector = function()
{
    console.log("\nSQL Connector\n");
};