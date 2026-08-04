class ComplexNumber {
    constructor(real, imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }

    add(other) {
        return new ComplexNumber(
            this.real + other.real,
            this.imaginary + other.imaginary
        );
    }

    display() {
        console.log(`${this.real} + ${this.imaginary}i`);
    }
}

// Creating two complex numbers
let c1 = new ComplexNumber(3, 4);
let c2 = new ComplexNumber(5, 6);

// Adding them
let result = c1.add(c2);

// Displaying the result
result.display();

// The add() method takes another ComplexNumber object as an argument, adds, the real parts and imaginary parts separately, and returns a new ComplexNumber object.