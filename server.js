var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, function () {
    console.log("port is runing")
})
//stex kapum em klassery
var Grass = require('./module/Grass.js');
var GrassEater = require('./module/GrassEater.js');
var Gishatich = require('./module/Gishatich.js');
var Hhbuys = require('./module/HHbuys.js')
var Hhkendani = require('./module/HHkendani.js');
var Joker = require('./module/Joker.js');


GrassArr = [];
GrassEaterArr = [];
GishatichArr = [];
XotpashtpanArr = [];
Xotpashtpaneat = [];
KendanineripashtpanArr = [];
JokerArr = [];
JokerEaterArr = [];
JokerMoveArr = [];





var w = 50;
var h = 60;
function genMatrix(w, h) {
    var matrix = [];
    for (var y = 0; y < h; y++) {
        matrix[y] = [];
        for (var x = 0; x < w; x++) {
            var r = Math.floor(Math.random() * 200);
            if (r < 20) r = 0;
            else if (r < 40) r = 1;
            else if (r < 42) r = 2;
            else if (r < 75) r = 3;
            else if (r < 100) r = 4;
            else if (r < 140) r = 5;
            else if (r < 200) r = 6;
            matrix[y][x] = r;
        }
    }
    return matrix;
}
matrix = genMatrix(w, h);




for (var y = 0; y < matrix.length; ++y) {
    for (var x = 0; x < matrix[y].length; ++x) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            GrassArr.push(gr);
        }
        else if (matrix[y][x] == 2) {
            var grassEater = new GrassEater(x, y, 2);
            GrassEaterArr.push(grassEater);
        }
        else if (matrix[y][x] == 3) {
            var gish = new Gishatich(x, y, 3);
            GishatichArr.push(gish);
        }
        else if (matrix[y][x] == 4) {
            var xpasht = new Hhbuys(x, y, 4);
            XotpashtpanArr.push(xpasht);
        }
        else if (matrix[y][x] == 5) {
            var kpasht = new Hhkendani(x, y, 5);
            KendanineripashtpanArr.push(kpasht);
        }
        else if (matrix[y][x] == 6) {
            var jokerr = new Joker(x, y, 6);
            JokerArr.push(jokerr);
        }
    }
}

function drewserver() {
    for (var i in GrassArr) {
        GrassArr[i].mul();
    }
    for (var i in GrassEaterArr) {
        GrassEaterArr[i].move();
        GrassEaterArr[i].eat();
        GrassEaterArr[i].mul();
        GrassEaterArr[i].die();
    }
    for (var i in GishatichArr) {
        GishatichArr[i].move();
        GishatichArr[i].eat();
        GishatichArr[i].mul();
        GishatichArr[i].die();
    }
    for (var i in XotpashtpanArr) {
        XotpashtpanArr[i].move();
        XotpashtpanArr[i].eatxotaker();
        XotpashtpanArr[i].die();

    }
    for (var i in KendanineripashtpanArr) {
        KendanineripashtpanArr[i].move();
        KendanineripashtpanArr[i].eathhbuys();
        KendanineripashtpanArr[i].die();
    }
    for (var i in JokerArr) {
        JokerArr[i].move();
        JokerArr[i].eat();
        JokerArr[i].die();
    }
    io.sockets.emit("matrix", matrix);
}
setInterval(drewserver, 1000);
Random = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}