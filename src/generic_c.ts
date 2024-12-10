// 제네릭 클래스 (큐 방식으로 동작하는 클래스)
// 큐 : 선형 자료구조, FIFO (first-in-first-out)

class GenericQueue<T> {
    private items: T[] = [];

    // enqueue method(큐를 데이터에 추가)
    enaueue(item: T): void {
        this.items.push(item);
    }
    // dequeue method(큐의 맨처음 데이터를 꺼낸다)
    dequeue(): T | undefined {
        return this.items.shift();
    }
    // peek method(큐의 맨처음 데이터를 확인)
    peek(): T | undefined {
        return this.items[0];
    }
    // size method(현재 큐의 사이즈 반환)
    size(): number {
        return this.items.length;
    }
}

const stringQ = new GenericQueue<string>();
stringQ.enaueue("hello");
console.log(stringQ.peek());
stringQ.dequeue();
stringQ.enaueue("typescript");
console.log(stringQ.size());
console.log(stringQ.peek());
