var shapes = [];

var slider = document.getElementById("mySlider");

function setup() {
    createCanvas(640,480);
    background(200)
}

function draw() {
    background(200);
    for (let shape of shapes) {
        shape.update();
    }
}

function addShape(shape) {
    shapes.push(new BouncyShape(shape,50,50,round(slider.value)))
}