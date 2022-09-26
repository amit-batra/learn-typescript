async function sleepForMs(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function count(from, to) {
    const methodName = "count(" + from + ", " + to + ")";

    while (from <= to) {
        await sleepForMs(1000);
        console.log(methodName, " Number is: " + from++);
    }
}

count(1, 10).then(() => {
    console.log("Done with first");
});
count(10, 15).then(() => {
    console.log("Done with second");
});