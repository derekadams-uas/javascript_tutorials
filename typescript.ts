// boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = 'brown';

// array
let pets: string[] = ['cat', 'dog', 'pig'];
let pets2: Array<string> = ['cat', 'dog', 'pig'];

// object
let wizard: object = {
    a: 'John'
};

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// tuple
let basket: [string, number];
basket = ['basketball', 5];

// enum (enumerable)
enum Size { Small = 1, Medium = 2, Large = 3 };
let SizeName: string = Size[2];

// any (not recommended to use)
let whatever: any = 'aghhhhhh';
whatever = 5;

// void (common when working with functions)
let sing = (): void => {
    console.log('lalalal');
};

// never (function never returns, variable under type guard is never true)
// doesn't have return type or reachable endpoint
let error = (): never => {
    throw Error('oops');
};

// interface (recommended vs. type)
interface RobotArmy {
    count: number,
    type: string,
    magic?: string
};

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('Fight!')
};

// type keyword (similar to interface)
// interfaces create a new name, type aliases don't create a new name
type RobotArmy2 = {
    count: number,
    type: string,
    magic: string
};

// type assertions allow you to override any type
interface CatArmy {
    count: number,
    type: string,
    magic: string
};

let dog = {} as CatArmy;
dog.count;

// function
let fightRobotArmy2 = (robots: RobotArmy): void => {
    console.log('Fight!');
};

let fightRobotArmy3 = (robots: RobotArmy): number => {
    console.log('Fight!');
    return 3;
};

// class
class Animal {
    sing: string = 'lalalala';
    constructor(sound: string) {
        this.sing = sound;
    }

    greet() {
        return `Hello, ${this.sing}`;
    }
}

let lion = new Animal('RAWR');
lion.greet();
