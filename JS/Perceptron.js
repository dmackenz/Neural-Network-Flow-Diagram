function Perceptron(x, y, label) {
    this.pos = createVector(x, y);
    this.label = label;

    this.connections = [];
}

Perceptron.prototype.show = function() {
    stroke(255);
    strokeWeight(1);
    fill(150, 200);
    ellipse(this.pos.x, this.pos.y, 30, 30);
    text(this.label, this.pos.x, this.pos.y - 45);
};

Perceptron.prototype.connect = function(other) {
    this.connections.push(new Connection(this, other));
};

function findPerceptronIndex(node) {
    for (var i = 0; i < network.length; i++) {
        if (node == network[i]) {
            return i;
        }
    }
}