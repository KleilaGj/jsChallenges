let stringLet = "let string";
var stringVar = "var string";

const newString = () => {
    let stringLet = "new let string";
    var stringVar = "new var string";

    console.log(`Inside function: ${stringLet}`)
    console.log(`Inside function: ${stringVar}`)
}

newString();

console.log(`Outside function: ${stringLet}`);
console.log(`Outside function: ${stringVar}`);
