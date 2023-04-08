class Polygon {
    constructor(arrayOfInts) {
        this.arrayOfInts = arrayOfInts;
    }

    get countSides() {
       return this.arrayOfInts.length;
    }

    get perimeter() {
        return this.arrayOfInts.reduce((total, current) => total + current);
    }
}

class Triangle extends Polygon {
    get isValid() {
        let [a, b, c] = this.arrayOfInts;
        if(this.countSides === 3) {
            if (a+b > c && a+c > b && b+c > a) {
                return true;
            }
        }
        return false;
    }
}

class Square extends Polygon {
    get isValid() {
        const allEqual = this.arrayOfInts.every(val => val === this.arrayOfInts[0])
        
        if (this.countSides === 4) {
            if (allEqual) {
                return true;
            }
        }
        return false;
    }

    get area() {
        if (this.isValid) {
        return Math.pow(this.arrayOfInts[0], 2);
        }

        return 'This is not a valid square'
    }

}