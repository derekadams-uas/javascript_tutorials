// Reference type
// Context vs scope. Context tells you where we are within an object.

this // Keyword that equals what is to the left of the dot (e.g. this.alert("hello")). Refers to what object it's inside of.

// Instantiation
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }

    play() {
        console.log(`Weeee I'm a ${this.type}`);
    }
}
const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');
