const Node = require("./node.js");

class LinkedList {
  constructor(head) {
    this.head = head || null;
  }

  append(value) {
    const tail = this.tail();
    if (tail) {
      tail.next = new Node(value);
    } else {
      this.head = new Node(value);
    }
  }

  prepend(value) {
    const newHeadNode = new Node(value);
    newHeadNode.next = this.head;
    this.head = newHeadNode;
  }

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  head() {
    return this.head;
  }

  tail() {
    let lastNode = this.head;
    if (!lastNode) {
      console.log("no nodes were added yet.");
      return false;
    }
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    return lastNode;
  }

  at(index) {
    if (index < 0 || index > this.size()) return null;
    let currentNode = this.head;
    let count = 0;
    while (currentNode && count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  pop() {
    if (!this.head) return null;
    let previousNode = null;
    let currentNode = this.head;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (previousNode) {
      previousNode.next = null;
    } else {
      this.head = null;
    }
    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) return currentNode;
      currentNode = currentNode.next;
    }
    return null;
  }

  toString() {
    let values = [];
    let currentNode = this.head;
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values.join(" -> ");
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size()) return null;
    if (index === 0) {
      this.prepend(value);
      return;
    }
    const newNode = new Node(value);
    const previousNode = this.at(index - 1);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
