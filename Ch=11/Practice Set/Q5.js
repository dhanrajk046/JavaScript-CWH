class ComplexNumber {
    constructor(real, imaginary) {
        this._real = real;
        this._imaginary = imaginary;
    }

    // Getter for real part
    get real() {
        return this._real;
    }

    // Setter for real part
    set real(value) {    
        this._real = value;
    }

    // Getter for imaginary part
    get imaginary() {
        return this._imaginary;
    }

    // Setter for imaginary part
    set imaginary(value) {
        this._imaginary = value;
    }

    display() {
        console.log(`${this.real} + ${this.imaginary}i`);
    }
}

// Creating an onject 
const c1 = new ComplexNumber(3,4);

// Getting values
console.log("Real Part:", c1.real);
console.log("Imaginary Part:", c1.imaginary);

// Setting new values
c1.real = 10;
c1.imaginary = 20;

// Displaying updated complex number
c1.display();


// Explanation

// get real() and get imaginary() return the real and imaginary parts.
// set real(value) and set imaginary(value) update those values.
// The underscore(_real,_imaginary) is a common convention to distinguish internal properties from the getter and setter names.