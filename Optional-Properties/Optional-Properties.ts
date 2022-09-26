class Person1 {
    public firstName: string;
    public lastName: string;
}

const a: Person1 = {firstName: "Amit"}; // Gives compilation error, since lastName is mandatory
const b: Person1 = {firstName: "Amit", lastName: "Batra"};

class Person2 {
    public firstName: string;
    public lastName?: string;
}

const c: Person2 = {firstName: "Amit"}; // Works, since lastName is declared optional
const d: Person2 = {firstName: "Amit", lastName: "Batra"};
