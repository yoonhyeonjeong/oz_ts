// 제네릭

let numbers: Array<number> = [1, 2, 3, 4, 5];
let strings: Array<string> = ["1", "2", "3", "4", "5"];

let div = document.querySelector<HTMLDivElement>("#myDiv1");
let button = document.querySelector<HTMLButtonElement>("#myButton");

button?.click();

// function getFirstElement(arr: number[]) {
//     if (!arr.length) {
//         return undefined;
//     }
//     return arr[0];
// }

function getFirstStringElement(arr: string[]) {
    if (!arr.length) {
        return undefined;
    }
    return arr[0];
}

// generics 적용
function getFirstElement<T>(arr: T[]): T | undefined {
    if (!arr.length) {
        return undefined;
    }
    return arr[0];
}
const firstNumber = getFirstElement(numbers);
const firstString = getFirstElement(strings);

// interface
interface strDict {
    [key: string]: string;
}

// let strObj: strDict = {
//     name: "Elliot",
// };

interface numDict {
    [key: string]: number;
}
// generic
interface Dict<T> {
    [key: string]: T;
}

let strObj: Dict<string> = {
    name: "Elliot",
};
let numObj: Dict<number> = {
    age: 30,
};

interface Entry<K, V> {
    key: K;
    value: V;
}

let entry: Entry<string, number> = {
    key: "Age",
    value: 30,
};

let entry2: Entry<number, string[]> = {
    key: 1,
    value: ["red", "green"],
};
