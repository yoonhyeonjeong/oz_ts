// generic 2
class Item<T> {
    #content: T | null;

    constructor() {
        this.#content = null;
    }

    setItem(value: T) {
        this.#content = value;
    }

    getItem(): T | null {
        return this.#content;
    }
}

const numberItem = new Item<number>();
numberItem.setItem(100);
numberItem.getItem(); // 100 반환

const stringItem = new Item<string>();
stringItem.setItem("hi");
stringItem.getItem(); // hello 반환

interface User {
    id: number;
    name: string;
}

interface Product {
    id: number;
    price: number;
    name: string;
}

interface Store<T> {
    fineById(id: number): T | undefined;
    save(item: T): void;
}

class UserRepository implements Store<User> {
    #users: User[] = [];

    fineById(id: number): User | undefined {
        return this.#users.find(user => user.id === id);
    }

    save(user: User): void {
        this.#users.push(user);
    }
}

const userRepo = new UserRepository();
userRepo.save({
    id: 1,
    name: "josh",
});

userRepo.save({
    id: 2,
    name: "Amy",
});

console.log(userRepo.fineById(1));

class ProductRepository implements Store<Product> {
    #products: Product[] = [];

    findById(id: number): Product | undefined {
        return this.#products.find(product => product.id === id);
    }

    save(product: Product): void {
        this.#products.push(product);
    }
}

const productRepo = new ProductRepository();

productRepo.save({
    id: 10,
    price: 100,
    name: "keyboard",
});

productRepo.save({
    id: 20,
    price: 200,
    name: "mouse",
});

console.log(productRepo.findById(20));
