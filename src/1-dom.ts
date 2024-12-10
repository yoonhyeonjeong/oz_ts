const link1 = document.getElementById("myLink") as HTMLAnchorElement;
const link2 = document.querySelector("#myLink") as HTMLAnchorElement;

link1.href = "httf://naver.com";

const img = document.createElement("img");
img.src = "";

const anchor = document.createElement("a");
anchor.href = "";

const div = document.querySelector("div");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.click();
});

const myDiv = document.getElementById("myDiv");
myDiv?.addEventListener("click", (e: MouseEvent | KeyboardEvent) => {
    if (e instanceof MouseEvent) {
        const x = e.clientX;
        const y = e.clientY;
    }

    if (e instanceof KeyboardEvent) {
        console.log(e.code);
    }
});
