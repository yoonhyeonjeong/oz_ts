// 에러 처리

function checkPositiveNumber(num: number) {
    if (num < 0) {
        throw new Error("number should be positive");
    }
    console.log(`${num} is a positive number`);
}

try {
    checkPositiveNumber(10);
    checkPositiveNumber(-10);
} catch (error: unknown) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}

class CustomError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "customerror";
    }
}

try {
    throw new CustomError("custom error");
} catch (error) {
    if (error instanceof CustomError) {
        console.error(error.message);
    }
}
