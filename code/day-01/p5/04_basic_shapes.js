function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);

    // explore the different possible numbers of parameters
    rect(10, 10, 50);
    rect(70, 10, 20, 70);
    rect(110, 30, 70, 20, 10);

    //different commands are possible
    ellipse(50, 120, 50);
    ellipse(150, 120, 50, 30);
    ellipse(250, 120, 50, 30, 100);

    triangle(30, 170, 50, 250, 200, 200);

    rect(160, 320, 80);
    triangle(160, 320, 240, 320, 200, 250);
}