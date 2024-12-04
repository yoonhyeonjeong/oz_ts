import {printName} from "./util";
printName("moka");

// string
const a: string = "";
const b: string = "";
const c: string = ``;

let myName: string = "Steve";
let message: string = `Hello, ${myName}`;

myName.toLocaleUpperCase();
// message = 123;

// number
let n: number = 100;
n = "100";
n.toUpperCase();

let count: number = 10;
let price: number = 9.99;
let temperature: number = 15;
let distance: number = 3.4e-5;

let total: number = count * price;
let average: number = total / 2;

let Infinity: number = Infinity;
let minusInfinity: number = -Infinity;
let iAmNotANumber: number = NaN;

// boolean
let isOpen: boolean = true;
let isCompleted: boolean = false;
if (isOpen) {
    console.log("hello we are open");
}
if (!isCompleted) {
    console.log("job not complete");
}

// && || !
let isAvailable: boolean = isOpen && !isCompleted;

// null
let user: string | null = null;
function login(userName: string) {
    user = userName;
}
function logOut() {
    user = null;
}
login("JOEY");
logOut();

// any type

let someValue: any;
someValue.toString();
someValue = false;
someValue.toFixed();
