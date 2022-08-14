let count=0

class ANode {
	constructor(public data: number, public left?: ANode, public right?: ANode) {}
}

class BST {
	constructor(public parent?: ANode | undefined) {}
	add(node: ANode | number): void {
		node = typeof node === "number" ? new ANode(node) : node;
		let tempNode: ANode | undefined = this.parent;

		// if no parent asign the new node as a parent
		if (!tempNode) {
			this.parent = node;
		}

		// loop till the node in fitted in the right place
		while (tempNode) {
			if (node.data > tempNode.data) {
				if (tempNode.right) {
					tempNode = tempNode.right;
				} else {
					tempNode.right = node;
					break;
				}
			} else if (node.data < tempNode.data) {
				if (tempNode.left) {
					tempNode = tempNode.left;
				} else {
					tempNode.left = node;
					break;
				}
			} else {
				return;
			}
		}
	}

	findWithRecusion(element: ANode | number): ANode | undefined {
		const data = typeof element === "number" ? element : element.data;
		function findNode(node: ANode | undefined): ANode | undefined {
			if (node !== undefined) {
				if (data === node.data) {
					return node;
				} else if (data > node.data) {
					return findNode(node.right);
				} else if (data < node.data) {
					return findNode(node.left);
				}
			} else {
				return undefined;
			}
		}

		return findNode(this.parent);
	}

	find(element: ANode | number): ANode | undefined {
		const data = typeof element === "number" ? element : element.data;
		let tempNode = this.parent;
		while (tempNode) {
			if (data > tempNode.data) {
				tempNode = tempNode.right;
			} else if (data < tempNode.data) {
				tempNode = tempNode.left;
			} else {
				return tempNode;
			}
		}
		return undefined;
	}

	findmin(): ANode {
		let tempNode: ANode | undefined = this.parent;
		if (!tempNode) throw "this BST has no nodes";
		while (tempNode.left) {
			tempNode = tempNode.left;
		}
		return tempNode;
	}

	findMax(): ANode {
		let tempNode: ANode | undefined = this.parent;
		if (!tempNode) throw "this BST has no nodes";
		while (tempNode.right) {
			tempNode = tempNode.right;
		}
		return tempNode;
	}


	sort() {
		const arr: ANode[] = []
		this.pushToArray(this.parent, arr)
		return arr
	}

/* 

*/
	private pushToArray(node: ANode | undefined, arr: ANode[]): void {
		count++
		if(!node) return 
		if (node.left === undefined) {
			arr.push(node)
			this.pushToArray(node.right, arr)
			return
		}

		this.pushToArray(node.left, arr)
		arr.push(node)
		this.pushToArray(node.right, arr)
		return
	}

	
}

const myBts = new BST(new ANode(50));
const myBts2 = new BST();

myBts2.add(10);
myBts2.add(15);
myBts2.add(5);

console.log(myBts2.findWithRecusion(10));

myBts.add(30);
myBts.add(70);
myBts.add(35);
myBts.add(40);
myBts.add(10);
myBts.add(5);
myBts.add(100);
myBts.add(21);
myBts.add(170);
myBts.add(60);


console.log(myBts.sort().map(node => node.data))
console.log(count)
