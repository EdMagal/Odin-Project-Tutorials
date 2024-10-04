class HashMap {
  constructor(initialCapacity = 16) {
    this.buckets = new Array(initialCapacity).fill(null).map(() => []);
    this.size = 0;
    this.loadFactor = 0.75;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode % this.buckets.length;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [bucketKey] = bucket[i];
      if (bucketKey === key) {
        bucket[i] = [key, value];
        return;
      }
    }

    bucket.push([key, value]);
    this.size++;

    if (this.size / this.buckets.length > this.loadFactor) {
      this.grow();
    }
  }

  grow() {
    const newBuckets = new Array(this.buckets.length * 2)
      .fill(null)
      .map(() => []);
    this.buckets.forEach((bucket) => {
      bucket.forEach(([key, value]) => {
        const index = this.hash(key) % newBuckets.length;
        newBuckets[index].push([key, value]);
      });
    });
    this.buckets = newBuckets;
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [bucketKey, bucketValue] = bucket[i];
      if (bucketKey === key) {
        return bucketValue;
      }
    }
    return null;
  }

  has(key) {
    return this.get(key) !== null;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [bucketKey] = bucket[i];
      if (bucketKey === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.buckets.length).fill(null).map(() => []);
    this.size = 0;
  }

  keys() {
    const keysArray = [];
    this.buckets.forEach((bucket) => {
      bucket.forEach(([key]) => {
        keysArray.push(key);
      });
    });
    return keysArray;
  }

  values() {
    const valuesArray = [];
    this.buckets.forEach((bucket) => {
      bucket.forEach(([_, value]) => {
        valuesArray.push(value);
      });
    });
    return valuesArray;
  }

  entries() {
    const entriesArray = [];
    this.buckets.forEach((bucket) => {
      bucket.forEach(([key, value]) => {
        entriesArray.push([key, value]);
      });
    });
    return entriesArray;
  }
}

const test = new HashMap();
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
console.log(test.entries());
