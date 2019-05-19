var side = 10;
socket = io();
var weatherclient = "Summer";
socket.on("exanak", function (w) {
    weatherclient = w;
})
function setup() {

    createCanvas(40 * side, 40 * side);
    background('#acacac');

}
function drawWeather(w) {
    p = document.getElementById('seasons')
    var weather = w;
    if (weather == "Summer") {
        p.innerText = "Summer";
    }
    else if (weather == "Winter") {
        p.innerText = "Winter";
    }
    else if (weather == "Autumn") {
        p.innerText = "Autumn";
    }
    else if (weather == "Spring") {
        p.innerText = "Spring";
    }
}
socket.on("exanak", drawWeather);
function draw() {




}
function drawMatrix(matrix) {
    background('#33FFFF')
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                if (weatherclient == "Summer") {
                    fill("green");
                }
                if (weatherclient == "Autumn") {
                    fill(198, 121, 0);
                }
                if (weatherclient == "Winter") {
                    fill(164, 232, 255);
                }
                if (weatherclient == "Spring") {
                    fill(207, 255, 164);
                }

            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                if (weatherclient == "Summer") {
                    fill("yellow");
                }
                if (weatherclient == "Autumn") {
                    fill("yellow");
                }
                if (weatherclient == "Winter") {
                    fill(0, 79, 179);
                }
                if (weatherclient == "Spring") {
                    fill("yellow");
                }
            }
            else if (matrix[y][x] == 3) {
                if (weatherclient == "Summer") {
                    fill("red");
                }
                if (weatherclient == "Autumn") {
                    fill(136, 4, 4);
                }
                if (weatherclient == "Winter") {
                    fill(18, 4, 136);
                }
                if (weatherclient == "Spring") {
                    fill(255, 115, 115);
                }

            }
            else if (matrix[y][x] == 4) {
                if (weatherclient == "Summer") {
                    fill("white")
                }
                if (weatherclient == "Autumn") {
                    fill("white");
                }
                if (weatherclient == "Winter") {
                    fill(174, 218, 255);
                }
                if (weatherclient == "Spring") {
                    fill("white");
                }

            }
            else if (matrix[y][x] == 5) {
                fill("blue");
            }
            else if (matrix[y][x] == 6) {
                fill("black")

            }
            rect(x * side, y * side, side, side);
        }
    }
}
socket.on("matrix", drawMatrix);
function mouseClicked() {
    // if (weatherclient == "Summer") {
    //     weatherclient = "Spring";
    //     p.innerText = "Spring";
    // }
    // else if (weatherclient == "Autumn") {
    //     weatherclient = "Spring";
    //     p.innerText = "Spring";
    // }
    // else if (weatherclient == "Winter") {
    //     weatherclient = "Spring";
    //     p.innerText = "Spring";
    // }
    for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                 if (matrix[y][x] == 1) {
                    fill("red");
                }
                else if (matrix[y][x] ==2) {
                    fill("red");
                }
                else if (matrix[y][x] == 3) {
                    fill("red");
                }
                else if (matrix[y][x] == 4) {
                    fill("red");
                }
                else if (matrix[y][x] == 5) {
                    fill("red");
                }
                else if (matrix[y][x] == 6) {
                    fill("red");
                }
                rect(x * side, y * side, side, side);
            }
        }
}
function keyPressed() {
    // for (var y = 0; y < matrix.length; y++) {
    //     for (var x = 0; x < matrix[y].length; x++) {
    //          if (matrix[y][x] == 1) {
    //             fill("red");
    //         }
    //         else if (matrix[y][x] ==2) {
    //             fill("red");
    //         }
    //         else if (matrix[y][x] == 3) {
    //             fill("red");
    //         }
    //         else if (matrix[y][x] == 4) {
    //             fill("red");
    //         }
    //         else if (matrix[y][x] == 5) {
    //             fill("red");
    //         }
    //         else if (matrix[y][x] == 6) {
    //             fill("red");
    //         }
    //     }
    // }
}


