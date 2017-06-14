function Signal(conn) {
    this.connection = conn;

    this.pos = createVector(this.connection.a.pos.x, this.connection.a.pos.y);
    this.vel = createVector();
    this.acc = createVector();

    this.isMoving = false;
}

Signal.prototype.show = function() {
    stroke(255);
    fill(0);
    strokeWeight(1);
    ellipse(this.pos.x, this.pos.y, 16, 16);
};

Signal.prototype.applyForce = function(force) {
    this.acc.add(force);
};

Signal.prototype.update = function(i) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    // if reached destination node
    if ((this.pos.x >= this.connection.b.pos.x && this.pos.y >= this.connection.b.pos.y) || (this.pos.x >= this.connection.b.pos.x && this.pos.y <= this.connection.b.pos.y)) {
        // remove signal
        signals.splice(i, 1);

        // create a new signal
        if (this.connection.b != network[network.length - 1]) {
            var i = findPerceptronIndex(this.connection.b);
            newSignal(i);
        }
    }
};

Signal.prototype.move = function() {
    if (this.isMoving === false) {
        this.isMoving = true;

        var force = p5.Vector.sub(this.connection.b.pos, this.connection.a.pos);
        force.mult(0.01);
        this.applyForce(force);
    }
};
