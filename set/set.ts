class MySet<T = any> {
	private _collection: T[];
	// private _size :number
	constructor(...data: T[]) {
		// this.collection = data
		this._collection = [];
		data.forEach((value) => {
			this.add(value);
		});
	}
	has(value: T): boolean {
		return this._collection.find((item) => item === value) !== undefined;
	}

	add(value: T): boolean {
		if (this.has(value)) {
			return false;
		}
		this._collection.push(value);
		return true;
	}

	delete(value: T): boolean {
		const index = this._collection.findIndex((item) => item === value);
		if (index >= 0) {
			this._collection.splice(index, 1);
			return true;
		}
		return false;
	}

	union(anotherSet: MySet<T>) {
		const unionSet = new MySet<T>();
		this._collection.forEach((item) => {
			unionSet.add(item);
		});
		anotherSet.values.forEach((item) => {
			unionSet.add(item);
		});

		return unionSet;
	}

	intersection(anotherSet: MySet<T>) {
		const intersectionSet = new MySet<T>();
		this._collection.forEach((item) => {
			if (anotherSet.has(item)) {
				intersectionSet.add(item);
			}
		});
		return intersectionSet;
	}

	difference(anotehrSet: MySet<T>) {
		const differenceSet = new MySet();
		this._collection.forEach((item) => {
			if (!anotehrSet.has(item)) {
				differenceSet.add(item);
			}
		});
		return differenceSet;
	}

	subset(anotherSet: MySet<T>) {
		return this._collection.every((item) => anotherSet.has(item));
	}

	get values(): T[] {
		return this._collection;
	}

	get size(): number {
		return this._collection.length;
	}
}

const mySet = new MySet("a", "b", "c", "c");

console.log(mySet);

console.log(mySet.has("a"));
console.log(mySet.add("d"));
console.log(mySet.delete("x"));
console.log(mySet);
console.log(mySet.has("a"));

const anotherOne = mySet.union(new MySet<string>("a", "x", "l"));
console.log(anotherOne);

console.log(anotherOne.intersection(new MySet<string>("a", "c", "l")));
console.log(anotherOne.difference(new MySet<string>("a", "c", "l")));
console.log(mySet.subset(anotherOne))
