# Neural Network Flow Diagram
#### Dylan MacKenzie

This sketch outlines the nature of movement of signals throughout a feed-forward neural network. Each neuron is connected to another via a weighted input. Each perceptron's activation function is determined probabilistically between connections based on weight. This activation function determines the next path that the signal will follow. In the diagram the connection weight is shown via mapping its stroke weight. i.e. A line with a high thickness will be chosen as the path more often than a line with less thicknes.

Each refresh of the HTML page creates new weighted connections and thus a new probabilistic path. Weights are currently chosen randomly for drawing purposes and do not outline a gradient descent machine learning algorithm.

Open index.html in browser.

Signals are fed forward via Newton's law F = ma.
```javascript
// steering behaviour
var start = network[current].connection.start;
var end = network[current].connection.end;
var force = p5.Vector.sub(end, start);
this.applyForce(force);

// apply a force
Signal.prototype.applyForce = function(force) {
    this.acc.add(force);
};

// main physics engine
Signal.prototype.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
}
```
![alt text](https://github.com/dmackenz/neural-network-flow-diagram/blob/master/example.png?raw=true)
