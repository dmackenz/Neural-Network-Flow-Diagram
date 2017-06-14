function Connection(a, b) {
    this.a = a;
    this.b = b;
    this.weight = random(1);
}

Connection.prototype.show = function() {
    stroke(255);
    fill(255);
    strokeWeight(map(this.weight, 0, 1, 0, 5));
    line(this.a.pos.x, this.a.pos.y, this.b.pos.x, this.b.pos.y);
};