var network = [];
var signals = [];

var connectionNum = 2;

function setup() {
    createCanvas(600, 600);

    // initialize nodes
    var a = new Perceptron(width * 1/5, height * 1/3, "A");
    var b = new Perceptron(width * 1/5, height * 2/3, "B");
    var c = new Perceptron(width * 2/5, height * 1/3, "C");
    var d = new Perceptron(width * 2/5, height * 2/3, "D");
    var e = new Perceptron(width * 3/5, height * 1/3, "E");
    var f = new Perceptron(width * 3/5, height * 2/3, "F");
    var g = new Perceptron(width * 4/5, height * 1.5/3, "G");

    // initialize connections
    a.connect(c);
    a.connect(d);
    b.connect(c);
    b.connect(d);
    c.connect(e);
    c.connect(f);
    d.connect(e);
    d.connect(f);
    e.connect(g);
    f.connect(g);

    // add nodes to network
    network.push(a);
    network.push(b);
    network.push(c);
    network.push(d);
    network.push(e);
    network.push(f);
    network.push(g);
}

function draw() {
    // clear background
    background(75);

    // draw network and connections
    for (var i = 0; i < network.length; i++) {
        network[i].show();

        for (var j = 0; j < network[i].connections.length; j++) {
            network[i].connections[j].show();
        }
    }

    // update signals engine
    for (var i = signals.length - 1; i >= 0; i--) {
        signals[i].show();
        signals[i].move();
        signals[i].update(i);
    }

    if (frameCount % 30 == 0) {
        newSignal(floor(random(2)));
    }
}

function newSignal(net) {
    var sum = 0;
    var s = null;


    if (network[net].connections.length > 1) {
        // sum weights of connections
        for (var i = 0; i < network[net].connections.length; i++) {
            sum += network[net].connections[i].weight;
        }

        // select probabilistic weight
        var highest = null;
        var lowest = null;
        if (network[net].connections[0].weight < network[net].connections[1].weight) {
            highest = 0;
            lowest = 1;
        } else {
            highest = 1;
            lowest = 0;
        }

        // assign signal to most probable connection
        var s = null;
        var p = random(sum);
        if (p < network[net].connections[highest].weight) {
            s = new Signal(network[net].connections[highest]);
        } else {
            s = new Signal(network[net].connections[lowest]);
        }
    } else {
        // select final signal
        s = new Signal(network[net].connections[0]);
    }

    // add signal
    signals.push(s);  
}
