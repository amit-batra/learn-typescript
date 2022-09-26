function iterateOverArray(names: Array<string>) {
  names.forEach(name => {
    console.log("Hello, " + name);
  });
}

var people: Array<string> = [
  "Amit",
  "Sonia",
  "Aditya"
];

iterateOverArray(people);
