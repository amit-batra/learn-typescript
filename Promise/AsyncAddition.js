async function add(a, b) {
    const methodName = "add(" + a + ", " + b + ")";

    console.log(methodName + " Started add operation");
    console.log(methodName + " Sleeping for 1 second");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(methodName + " After sleeping");
    console.log(methodName + " Calculating sum");
    let sum = a + b;
    console.log(methodName + " Sleeping for 1 second");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(methodName + " After sleeping");

    return sum;
}

console.log("Configuring callback for promise 1");
add(5, 10).then(result => {
    console.log("Sum 1 is: " + result);
});

console.log("Configuring callback for promise 2");
add(30, 20).then(result => {
    console.log("Sum 2 is: " + result);
});