function multiMapper<T, R>(elements:T[], singleMapper: (value: T) => R): R[] {

    let returnArray: R[] = [];
    elements.forEach(element => {
        returnArray.push(singleMapper(element));
    });

    return returnArray;
}

const numbers: number[] = [0, 1, 2, 3, 4, 5];
console.log(numbers);
console.log(multiMapper(numbers, (n) => n*2));