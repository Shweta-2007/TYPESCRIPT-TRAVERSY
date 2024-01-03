// Basic Types

let id: number = 4;
let company: string = 'Shweta Sinha';
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3, 4];

ids.push(5);

let arr: any[] = [1, 2, 3, 'a', 's', true];

// Tuple => number, string, boolean should be in exact order. Here we can not give [1, true, "a"]
let person: [number, string, boolean] = [1, 'a', true];

//Tuple Array
let employee: [number, string][];

employee = [
  [1, 'a'],
  [2, 'b'],
  [3, 'c'],
  [4, 'd'],
];

// Union
let pid: string | number;

pid = '22'; // or pid = 22 => You can use string or number

// Enum
enum Direction1 {
  up,
  down,
  left,
  right,
}

console.log(Direction1.up); // output: 0
console.log(Direction1.down); // output: 1

//By default first element is 0, next is 1 and so on.
// If we assign up = 1, then down will be 2 and so on.

enum Direction2 {
  up = 1,
  down,
  left,
  right,
}

console.log(Direction2.up); //output: 1
console.log(Direction2.right); //output: 4

enum Direction3 {
  up = 'UP',
  down = 'DOWN',
  left = 'LEFT',
  right = 'RIGHT',
}

console.log(Direction3.up); //output: UP

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'john',
};

// Interface
interface UserInterface {
  id: number;
  name: string;
  age?: number; // It will not throw an error if age is not present, but don't forget to use ?
}

const user1: UserInterface = {
  id: 1,
  name: 'john',
};

// user1.id = 5; If we write readonly infront of id then we can not change the value of id.

// a type can be used with primitives and it can be used with unions

type Point = number | string;
const p1: Point = 5; // This is okay

// interface Point2 = number | string  => This will throw an error

// Type Assertion => explicitly telling the complier that we want to treat an entity as different types.

let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 9)); // output: 10

// void => If our function does not return anything then use void type
function log(message: string | number): void {
  console.log(message);
}

log('yes');

// Interface with Function
interface Mathfunc {
  (x: number, y: number): number;
}

const add: Mathfunc = (x: number, y: number): number => {
  return x + y;
};

const sub: Mathfunc = (x: number, y: number): number => {
  return x - y;
};

// Classes
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const shweta = new Person(1, 'shweta sinha'); // Output: object

console.log(shweta);

// If we use private or protected word ahead of id like private id => then id will only be accessible within the class, from outside of the class, we can not modify the value of id.

console.log(shweta.register()); // Output: shweta sinha is now registered

// Interface to the class

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person2 implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

// Extending the class
// Employee class is knwown as SubClasses
class Employee extends Person2 {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp.name); // Output: Shawn
console.log(emp.register()); // Output: Shawn is now registered

// Even though resister() method is not in the Employee class, it is the Person2 class that was extended.

// Generics => used to make reusable components
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['a', 'b', 'c', 'd']);

strArray.push('hello');
