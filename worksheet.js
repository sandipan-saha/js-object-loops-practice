const person = {
  id: 2662,
  name: "Jon",
  age: 27,
  role: "Developer",
};

// Object.keys give an array of the keys from an object
const keys = Object.keys(person);
console.log(keys);
for (let i of Object.keys(person)) {
  console.log("key -> ", i); // Looping over the new array of keys to display them
}

// Object.values give an array of the values from an object
const values = Object.values(person);
console.log(values);
for (let i of Object.values(person)) {
  console.log("value ->", i); // Looping over the new array of values to display them
}

// Object.entries give an array of the values from an object
const entries = Object.entries(person); // This gives us double dimensional array where the secondary level array items are the keys and respective values
console.table(entries);
console.log("flat -> ", entries.flat(1)); // Flattening the array by 1 level gives a single dimensional array where if 1 item is the key, the next items is the respective value

// To display key-value pairs from entries directly:
for (let i of entries) {
  console.table(i);
}
