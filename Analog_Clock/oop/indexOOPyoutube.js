const circle = {
    radius: 1,
    location : {
        x: 1,
        y: 4
    },
    draw: function () {
        console.log('i just built this');
    }
};

circle.draw()

//factory function//

function createTriangle(radius) {
    return {
        radius,
        draw: function() {
            console.log('SayHi radius');
        }
    };

};

const triangle = createTriangle(1);
triangle.draw(); 

// construction function //

function Parallelogram(radius) {
    this.rady = radius;
    this.draw = function() {
        console.log('This is a parallelogram')
    };
}

const anotherShape = new Parallelogram();
anotherShape.draw()

