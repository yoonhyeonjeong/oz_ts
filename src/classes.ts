// classes

interface ContinentInterface {
    getContinentName(): string;
}
interface CountryInterface {
    capital: string;
    getInfo(): string;
}
class Continent implements ContinentInterface {
    protected continentName: string;

    constructor(name: string) {
        this.continentName = name;
    }

    getContinentName() {
        return this.continentName;
    }
}

class Country extends Continent implements CountryInterface {
    #name: string;
    capital: string;

    constructor(continentName: string, name: string, capital: string) {
        super(continentName);
        this.#name = name;
        this.capital = capital;
    }

    getInfo() {
        return `${this.#name}, ${this.capital}, ${this.getContinentName()}`;
    }
}

let country = new Country("Asia", "한국", "서울");

console.log(country.getInfo());

// 추상클래스 (인스턴스화 할수 없다)
abstract class AbstractCountry {
    name: string;
    capital: string;

    constructor(name: string, capital: string) {
        this.name = name;
        this.capital = capital;
    }

    setup(): void {
        console.log("set up complete");
    }
    abstract displayInfo(): void;
}

class MyCountry extends AbstractCountry {
    displayInfo(): void {
        console.log("display info called");
    }
}

const myCountry = new MyCountry("germany", "berlin");
myCountry.setup();
myCountry.displayInfo();
