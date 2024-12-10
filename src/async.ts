// 타입스크립트와 비동기

const sync = () => {
    console.log("동기 작업완료");
};
const asyncFn = () => {
    return new Promise(resolve => {
        resolve("비동기 작업 완료");
    });
};

function main() {
    sync();
    sync();
    sync();
    asyncFn().then(value => console.log(value));
    sync();
}
main();

interface MydataType {
    id: number;
    name: string;
}

type Config = Record<string, string>;
async function loadConfig(): Promise<Config> {
    const response = await fetch("/api/congif");
    const configData: Config = await response.json();

    return configData;
}

async function fetchData2<T>(url: string): Promise<T> {
    const response = await fetch(url);
    const data = await response.json();

    return data as Promise<T>;
}

const fetchData = (): Promise<MydataType> => {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            const data = {
                id: 1,
                name: "text",
            };
            resolve(data);
        } else {
            reject("something went wrong");
        }
    });
};

fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));

async function doFetch() {
    // 비동기 로직
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
doFetch();
