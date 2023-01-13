class rectangle {
    constructor(width, height, breadth) {
       (this.width = width), (this.height = height), (this.breadth = breadth)
    }

    calcArea() {
        return this.width * this.height * this.breadth ;
    }
}
let rect = new rectangle(10, 20, 15);
calcArea() = 10 * 20 * 15;
let perimeter = (10 + 20 + 15)  /2;
console.log(rect.calcArea())
console.log(perimeter)




//let h = 20;
//let w = 10;
//let b = 15;

//let area = h * w * b;
//let perimeter = (h + w + b) * 2;
//console