class BouncyShape {
    constructor(shape, x, y, size) {
        this.x = x;
        this.y = y;
        this.s = size;
        this.shape = shape;
        this.vx = random(1,5);
        this.vy = random(1,5);
        this.hue = random(0,100);
    }

    update() {
        this.draw();
        this.move();
    }

    draw() {
        colorMode(HSB, 100);
        fill(this.hue,100,100);
        this.hue++;
        if (this.hue > 100) {
            this.hue = 0;
        }
        noStroke();
        this.shape(this.x, this.y, this.s, this.s)
        colorMode(RGB,255)
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x >= width - this.s || this.x < 0) {
            this.vx *= -1;
        }
        if (this.y >= height - this.s || this.y < 0) {
            this.vy *= -1;
        }
    }
}