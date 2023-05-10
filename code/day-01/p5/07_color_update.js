function setup() {
    createCanvas(400, 400);
    // update every 2 seconds
    frameRate(0.5);
}

// the draw function is running in a loop
function draw() {
    background(220);
    noStroke();

    // this will change to RED in the second iteration
    circle(200, 200, 250);

    fill(255)
    rect(100, 175, 200, 50);

    // RED will be active in the second loop
    fill(255, 0, 0);
    circle(20, 20, 25);

    // you might need to reload the page to see it again
}