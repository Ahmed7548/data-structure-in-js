class Queue<T> {
	protected _collection: T[] = [];
	constructor() {}
	print(): void {
		console.log(this._collection);
	}
	enqueue(element: T): void {
		this._collection.push(element);
	}
	dequeue(): T | undefined {
		return this._collection.shift();
	}
	front(): T {
		return this._collection[0];
	}
	size(): number {
		return this._collection.length;
	}
	isEmpty(): boolean {
		return this._collection.length === 0;
	}
}

///////////////////////////////

class PriorityQueue<T> extends Queue<[T, number]> {
	// protected _arrange() {
	//   this._collection.sort((a,b)=>b[1]-a[1])
	// }
	enqueue(element: [T, number]): void {
		for (let i = 0; i < this._collection.length; i++) {
			if (element[1] > this._collection[i][1]) {
				this._collection.splice(i, 0, element);
				return;
			}
		}
		this._collection.push(element);
		return;
	}
}

const queue = new PriorityQueue<string>();

queue.enqueue(["a", 3]);
queue.enqueue(["b", 20]);
queue.enqueue(["g", 10]);
queue.enqueue(["3", 1]);
queue.enqueue(["l", 0]);

console.log(queue.front());

console.log(queue.dequeue());

console.log(queue.dequeue());

console.log(queue);
