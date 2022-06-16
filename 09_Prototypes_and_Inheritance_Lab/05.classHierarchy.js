function classHierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() {
            return
        }

        changeUnits(newUnit) {
            this.units = newUnit;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
            this.mapper = {
                'cm': 1,
                "mm": 10,
                "m": 0.01
            };
        }
        get area() {
            return (this.radius * this.mapper[this.units]) ** 2 * Math.PI;
        }

        toString() {
            return (super.toString() + ` Area: ${this.area} - radius: ${this.radius* this.mapper[this.units]}`);
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.mapper = {
                'cm': 1,
                "mm": 10,
                "m": 0.01
            }
            this.width = width;
            this.height = height;
        }
        get area() {
            return this.width * this.mapper[this.units] * this.height * this.mapper[this.units];
        }

        toString() {
            return (super.toString() + ` Area: ${this.area} - width: ${this.width * this.mapper[this.units]}, height: ${this.height * this.mapper[this.units]}`);
        }
    }

    return { Figure, Circle, Rectangle };
}

let { Figure, Circle, Rectangle } = classHierarchy();

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
