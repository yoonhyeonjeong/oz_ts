// utility type

// Patrial<T>

// type User = {
//     id: number;
//     name: string;
//     email: string;
// };

// type PatrialUser = Partial<User>;

// type Product = {
//     id: number;
//     price: number;
// };

// type PartialProduct = Partial<Product>;

// const product: PartialProduct = {};
// const product2: Product = {};

// Readonly<T>

// type User = {
//     id: number;
//     name: string;
// };

// const user: Readonly<User> = {
//     id: 1,
//     name: "john",
// };

// user.id = 10;
// user.name = "Amy";

// Pick<T,K>

// type User = {
//     id: number;
//     name: string;
//     email: string;
// };

// type UserWithNameOnly = Pick<User, "name">;

// const user3: UserWithNameOnly = {
//     name: "Lee",
// };

// Omit <T, K> 제외
// type Product = {
//     id: number;
//     name: string;
//     price: number;
//     uniquecode: number;
// };

// type ProductWithOmit = Omit<Product, "uniquecode" | "price" | "name">;

// Record<K, T>

type Country = "South Korea" | "United States" | "Canada";
type Capital = string;

type CountryCapitals = Record<Country, Capital>; // 키, 값

const capitals: CountryCapitals = {
    "South Korea": "Seoul",
    "United States": "Washington D.c",
    "Canada": "Ottawa",
};

type CountryInfo = {
    capital: string;
    population: number;
    continent: string;
};

type CountryInfoMap = Record<Country, CountryInfo>;

const countryInfo: CountryInfoMap = {
    "South Korea": {
        capital: "Seoul",
        population: 51_000_000,
        continent: "asia",
    },
    "United States": {
        capital: 'Washington D.C"',
        population: 331_000_000,
        continent: "North America",
    },
    "Canada": {
        capital: "Ottawa",
        population: 83_000_000,
        continent: "asia",
    },
};

// Parameters<T>
type SomeFunction = (id: number) => void;
type Param = Parameters<SomeFunction>;
function someFunction(...param: Param) {
    const [id] = param;
}
someFunction(100);

type SaveUser = (name: string, age: number) => void;

type Params = Parameters<SaveUser>;
function saveUser(...params: Params) {
    const [name, age] = params;
}

saveUser("David", 33);
