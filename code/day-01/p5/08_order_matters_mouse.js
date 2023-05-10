function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);

    // notice how order is important in a program
    rect(mouseX - 150, 10, 50);
    rect(20, 20, 20, 70);
    rect(30, 30, 70, 20, 10);

    rect(120, 120, 20, 70);
    rect(mouseX - 50, 110, 50);
    rect(130, 130, 70, 20, 10);

    rect(230, 230, 70, 20, 10);
    rect(220, 220, 20, 70);
    rect(mouseX + 50, 210, 50);

    rect(mouseX + 150, 310, 50);
    rect(330, 330, 70, 20, 10);
    rect(320, 320, 20, 70);

}