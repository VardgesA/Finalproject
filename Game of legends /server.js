var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect(index.html);
});
server.listen(3000, function () {
    console.log("port is runing")
})
//stex kapum em klassery
var Grass = require('./module/Grass.js');
var GrassEater = require('./module/GrassEater.js');
var Gishatich = require('./module/Gishatich.js');
var HHbuys = require('./module/HHbuys.js')
var HHkendani = require('./module/HHkendani.js');
var Joker = require('./module/Joker.js');

matrix = [];
GrassArr = [];
GrassEaterArr = [];
GishatichArr = [];
XotpashtpanArr = [];
Xotpashtpaneat = [];
KendanineripashtpanArr = [];
JokerArr = [];
JokerEaterArr = [];
JokerMoveArr = [];




let rows = 100; // Տողերի քանակ
let columns = 100; // Սյուների քանակ

for (let y = 0; y < rows; y++) {
matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
for (let x = 0; x < columns; x++) {
let a = Math.floor(Math.random() * 100);
if (a >= 0 && a < 20) {
matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
}
if (a >= 20 && a < 40) {
matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
}
else if (a >= 40 && a < 50) {
matrix[y][x] = 2; // Մատրիցի 10 տոկոսը կլինի 2
}
else if (a >= 50 && a < 70) {
matrix[y][x] = 3; // Մատրիցի 20 տոկոսը կլինի 3
}
else if (a >= 70 && a < 90) {
matrix[y][x] = 4; // Մատրիցի 20 տոկոսը կլինի 4
}
else if (a >= 90 && a < 100) {
matrix[y][x] = 5; // Մատրիցի 10 տոկոսը կլինի 5
}
}
}
