class ComplexNumber {
    // Constructor
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    // Method to display the complex number
    display() {
        if (this.imaginary >= 0) {
            console.log(`${this.real} + ${this.imaginary}i`);
        } else {
            console.log(`${this.real} - ${Math.abs(this.imaginary)}i`);
        }
    }
}

// Creating Objects
const c1 = new ComplexNumber(4, 5);
const c2 = new ComplexNumber(7, -3);

// Displaying complex numbers
c1.display();
c2.display();

// This program demostrates:

// Creating a ComplexNumber class
// Using a constructor(real, imaginary) to initialize the real and imaginary parts.
// A display() method to prit the complex number in standard mathematical form.