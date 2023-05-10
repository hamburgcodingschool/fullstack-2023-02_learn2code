function setup() {
    createCanvas(400, 400);
}

function draw() {
    fill(255);
    background(220);
    rectMode(CENTER);
    let center = 200;
    rect(center, center, 150);
    circle(center + 20, center + 20, 25);
    circle(center - 20, center + 20, 25);
    circle(center + 20, center - 20, 40);
    // value could even be used as a color
    // hacky! not recommended! why?
    fill(center);
    circle(center - 20, center - 20, 30);
}