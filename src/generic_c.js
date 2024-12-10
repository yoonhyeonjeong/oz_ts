// 제네릭 클래스 (큐 방식으로 동작하는 클래스)
// 큐 : 선형 자료구조, FIFO (first-in-first-out)
var GenericQueue = /** @class */ (function () {
    function GenericQueue() {
        this.items = [];
    }
    // enqueue method(큐를 데이터에 추가)
    GenericQueue.prototype.enaueue = function (item) {
        this.items.push(item);
    };
    // dequeue method(큐의 맨처음 데이터를 꺼낸다)
    GenericQueue.prototype.dequeue = function () {
        return this.items.shift();
    };
    // peek method(큐의 맨처음 데이터를 확인)
    GenericQueue.prototype.peek = function () {
        return this.items[0];
    };
    // size method(현재 큐의 사이즈 반환)
    GenericQueue.prototype.size = function () {
        return this.items.length;
    };
    return GenericQueue;
}());
var stringQ = new GenericQueue();
stringQ.enaueue("hello");
console.log(stringQ.peek());
stringQ.dequeue();
stringQ.enaueue("typescript");
console.log(stringQ.size());
console.log(stringQ.peek());
