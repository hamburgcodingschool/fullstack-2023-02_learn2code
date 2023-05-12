function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    fill(7, 85, 153); // select blue as color
    rectMode(CORNER); // draw the rectangle from the corner
    // draw blue rectangle
    // draw rectangle with x, y position and width / height
    rect(0, height / 2, width, height / 2);
    line(width / 2, 0, width / 2, height);

    fill(255);

    rectMode(CENTER); // draw the rectangle from the center
    // change shape (cirlce or rectangle) dependet on ...
    // ...
    let isBelowWater = mouseY > height / 2;

    // goal: if right of line, shape should turn yellow
    // step1: find out if we are right of the line
    let isRightOfLine = mouseX > width / 2;

    // step2: compute whether it should be yellow

    if (isBelowWater && isRightOfLine) {
        fill(255, 255, 0)
        circle(mouseX, mouseY, 40);
    } else if (isBelowWater && !isRightOfLine) {
        fill(255, 255, 255)
        circle(mouseX, mouseY, 40);
    } // more "else if" possible

    else {
        //..
    }
}
