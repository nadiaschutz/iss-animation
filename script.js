var lineX = 0;
var url = "http://api.open-notify.org/iss-now.json";
var issX = 0;
var issY = 0;

function setup() {
    createCanvas(600, 400);
    setInterval(askISS, 1000);

}

function askISS() {
    loadJSON(url, gotData, "jsonp");
}

function gotData(data) {
    var lat = data.iss_position.latitude;
    var long = data.iss_position.longitude;
    issX = map(lat, 20, 50, 0, width);
    issY = map(long, -70, 0, 0, height);
}

function draw() {
    background(51);

    fill(255);
    ellipse(issX, issY, 24, 24);

    stroke(255);
    line(lineX, 0, lineX, height);
    lineX = lineX + 5;
    if (lineX > width) {
        lineX = 0;
    }
}
