// 고급타입

// 교차타입 (intersection type)

type A = {name: string};
type B = {age: number};

type Person = A & B;

const person: Person = {
    name: "john",
    age: 33,
};

type UserBase = {id: number};
type WithName = {name: string};
type WithEmail = {email: string};
type WithAge = {age: number};

type GuestUser = UserBase & WithName;
type User = UserBase & WithName & WithEmail & WithAge;

const guest: GuestUser = {
    id: 100,
    name: "Paul",
};

const user: User = {
    id: 123,
    name: "lee",
    age: 30,
    email: "test@email.com",
};

// 조건부 타입

type IsNumber<T> = T extends number ? "Yes" : "No";

type Result1 = IsNumber<number>;
type Result2 = IsNumber<string>;

type JsonOrText<T extends "json" | "text"> = T extends "json" ? object : string;

type JsonResponse = JsonOrText<"json">; //object
type TextResponse = JsonOrText<"text">; //string

// keyof 타입 연산자
type MyObject = {
    a: number;
    b: string;
    c: boolean;
};
// MyObject 키를 union 타입으로 추출
type Keys = keyof MyObject; // a | b | c

function getProp<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const obj = {x: 10, y: 20, z: 15};
const value = getProp(obj, "y"); // 20 반환

// mapped type
type OptionalType<T> = {
    [P in keyof T]?: T[P];
};

type ReadOnlyType<T> = {
    readonly [P in keyof T]: T[P];
};

type UserType = {
    id: number;
    name: string;
    age: number;
    email: string;
};

type OptionalUserType = OptionalType<UserType>;
type ReadonlyUserType = ReadOnlyType<UserType>;

// keyof T: 입력 타입 T의 속성 이름을 유니온 타입으로 반환합니다. 예를 들어, keyof UserType은 "id" | "name" | "age" | "email"입니다.
// [P in keyof T]: T의 모든 속성(keyof T)에 대해 반복(iterate)합니다.
// ?:: 각 속성을 선택적(optional)으로 만듭니다.
// T[P]: 속성의 타입을 그대로 유지합니다.
