class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }
}

// Create a rectangle
const rectangle = new Rectangle(4, 5);

// Calculate the area
console.log(rectangle.area);