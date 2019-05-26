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
    console.log("port is runing");
})
//stex kapum em klassery
Grass = require('./module/Grass.js');
GrassEater = require('./module/GrassEater.js');
Gishatich = require('./module/Gishatich.js');
Hhbuys = require('./module/HHbuys.js');
Hhkendani = require('./module/HHkendani.js');
Joker = require('./module/Joker.js');

Weather = "Summer";
Weatherinit = 1;
GrassArr = [];
GrassEaterArr = [];
GishatichArr = [];
XotpashtpanArr = [];
Xotpashtpaneat = [];
KendanineripashtpanArr = [];
JokerArr = [];
JokerEaterArr = [];
JokerMoveArr = [];

Grassinit = 0;
GrassEaterinit = 0;
Gishatichinit = 0;
Hhbuysinit = 0;
Hhkendaniinit = 0;
Jokerinit = 0;




var w = 40;
var h = 40;
function genMatrix(w, h) {
    var matrix = [];
    for (var y = 0; y < h; y++) {
        matrix[y] = [];
        for (var x = 0; x < w; x++) {
            var r = Math.floor(Math.random() * 200);
            if (r < 2) r = 0;
            else if (r < 40) r = 1;
            else if (r < 80) r = 2;
            else if (r < 90) r = 3;
            else if (r < 150) r = 4;
            else if (r < 190) r = 5;
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
            Grassinit++;
        }
        else if (matrix[y][x] == 2) {
            var grassEater = new GrassEater(x, y, 2);
            GrassEaterArr.push(grassEater);
            GrassEaterinit++;
        }
        else if (matrix[y][x] == 3) {
            var gish = new Gishatich(x, y, 3);
            GishatichArr.push(gish);
            Gishatichinit++;
        }
        else if (matrix[y][x] == 4) {
            var xpasht = new Hhbuys(x, y, 4);
            XotpashtpanArr.push(xpasht);
            Hhbuysinit++;
        }
        else if (matrix[y][x] == 5) {
            var kpasht = new Hhkendani(x, y, 5);
            KendanineripashtpanArr.push(kpasht);
            Hhkendaniinit++;
        }
        else if (matrix[y][x] == 6) {
            var jokerr = new Joker(x, y, 6);
            JokerArr.push(jokerr);
            Jokerinit++;
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

Random = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}
function draw_weater() {
    Weatherinit++;
    if (Weatherinit == 5) {
        Weatherinit = 1;
    }
    if (Weatherinit == 4) {
        Weather = "Spring";
    }
    if (Weatherinit == 3) {
        Weather = "Winter";

    }
    if (Weatherinit == 2) {
        Weather = "Autumn";
    }
    if (Weatherinit == 1) {
        Weather = "Summer";
    }

    io.sockets.emit("exanak", Weather);
}

io.on('connection', function (socket) {
    socket.on("Space", function () {


        GrassArr.length = 0;
        GrassEaterArr.length = 0;
        GishatichArr.length = 0;
        XotpashtpanArr.length = 0;
        KendanineripashtpanArr.length = 0;
        JokerArr.length = 0;
        for (var y = 0; y < matrix.length; ++y) {
            for (var x = 0; x < matrix[y].length; ++x) {
                matrix[y][x] = 7;

            }
        }



    });
    io.sockets.emit("matrix", matrix);
})

var obj = { "info": [] };
function main() {
    var file = "statistic.json";
    obj.info.push({ "Cnvac xoter qanak": Grassinit, "Cnvac xotakerneri qanak": GrassEaterinit, "Cnvac gishatichi qanak": Gishatichinit, "Cnvac hhbuys qanak": Hhbuysinit, "Cnvac hhkendani qanak": Hhkendaniinit, "Cnvac joker qanak": Jokerinit })
    fs.writeFileSync(file, JSON.stringify(obj, null, 2))
}
io.on('connection', function (socket) {
    socket.on("xrke", function (ar) {
        var x = ar[0];
        var y = ar[1];
        direction = [
            [x - 5, y - 5],
            [x + 5, y - 5],
            [x - 4, y - 4],
            [x + 4, y - 4],
            [x - 3, y - 3],
            [x + 3, y - 3],
            [x - 2, y - 2],
            [x + 2, y - 2],
            [x - 1, y - 1],
            [x + 1, y - 1],
            [x - 1, y + 1],
            [x + 1, y + 1],
            [x - 2, y + 2],
            [x + 2, y + 2],
            [x - 3, y + 3],
            [x + 3, y + 3],
            [x - 4, y + 4],
            [x + 4, y + 4],
            [x - 5, y + 5],
            [x + 5, y + 5]


        ];

        if (matrix[y][x] == 1) {

            for (var i in GrassArr) {
                if (x == GrassArr[i].x && y == GrassArr[i].y) {
                    GrassArr.splice(i, 1);
                    break;
                }
            }
        }
        else if (matrix[y][x] == 2) {

            for (var i in GrassEaterArr) {
                if (x == GrassEaterArr[i].x && y == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1);
                    break;
                }
            }
        }
        else if (matrix[y][x] == 3) {

            for (var i in GishatichArr) {
                if (x == GishatichArr[i].x && y == GishatichArr[i].y) {
                    GishatichArr.splice(i, 1);
                    break;
                }
            }
        }
        else if (matrix[y][x] == 4) {
            matrix[y][x] = 0
            for (var i in XotpashtpanArr) {
                if (x == XotpashtpanArr[i].x && y == XotpashtpanArr[i].y) {
                    XotpashtpanArr.splice(i, 1);
                    break;
                }
            }
        }
        else if (matrix[y][x] == 5) {

            for (var i in KendanineripashtpanArr) {
                if (x == KendanineripashtpanArr[i].x && y == KendanineripashtpanArr[i].y) {
                    KendanineripashtpanArr.splice(i, 1);
                    break;
                }
            }
        }
        else if (matrix[y][x] == 6) {

            for (var i in JokerArr) {
                if (x == JokerArr[i].x && y == JokerArr[i].y) {
                    JokerArr.splice(i, 1);
                    break;
                }
            }
        }
        matrix[y][x] = 0;
        for (var i in direction) {
            var harx = direction[i][0];
            var hary = direction[i][1];
            if (harx >= 0 && harx < matrix[0].length && hary >= 1 && hary < matrix[1].length) {
                if (matrix[hary][harx] == 1) {

                    for (var i in GrassArr) {
                        if (harx == GrassArr[i].x && hary == GrassArr[i].y) {
                            GrassArr.splice(i, 1);
                            break;
                        }
                    }
                }
                else if (matrix[hary][harx] == 2) {

                    for (var i in GrassEaterArr) {
                        if (harx == GrassEaterArr[i].x && hary == GrassEaterArr[i].y) {
                            GrassEaterArr.splice(i, 1);
                            break;
                        }
                    }
                }
                else if (matrix[hary][harx] == 3) {

                    for (var i in GishatichArr) {
                        if (harx == GishatichArr[i].x && hary == GishatichArr[i].y) {
                            GishatichArr.splice(i, 1);
                            break;
                        }
                    }
                }
                else if (matrix[hary][harx] == 4) {

                    for (var i in XotpashtpanArr) {
                        if (harx == XotpashtpanArr[i].x && hary == XotpashtpanArr[i].y) {
                            XotpashtpanArr.splice(i, 1);
                            break;
                        }
                    }
                }
                else if (matrix[hary][harx] == 5) {

                    for (var i in KendanineripashtpanArr) {
                        if (harx == KendanineripashtpanArr[i].x && hary == KendanineripashtpanArr[i].y) {
                            KendanineripashtpanArr.splice(i, 1);
                            break;
                        }
                    }
                }
                else if (matrix[hary][harx] == 6) {

                    for (var i in JokerArr) {
                        if (harx == JokerArr[i].x && hary == JokerArr[i].y) {
                            JokerArr.splice(i, 1);
                            break;
                        }
                    }
                }
                matrix[hary][harx] = 0;
            }
        }
    });
    io.sockets.emit("matrix", matrix);
})

setInterval(drewserver, 500);
setInterval(draw_weater, 4000);
setInterval(main, 3000);
