let add7 = (num) => alert(num + 7);

let multiply = (num1, num2) => alert(num1 * num2);

function capitalize(string) {
    if (!string) return "";
    let lowerCase = string.toLowerCase();
    let letter = lowerCase[0].toUpperCase();
    return letter + lowerCase.slice(1); 
}

let lastLetter = (string) => string[string.length - 1];

function fizzBuzzPrinter(num) {

    for (let i = 1; i <= num; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

function parseStringIntoWords(string) {

    let tempString = "";

    for (i = 0; i <= string.length; i++) {
        let letter = string[i];

        if (".,!?-:\"\'\`".includes(string[i])) {
            continue;
        } else if ((string[i] !== " ")) {
            tempString += letter;
        } else if (string[i] === " ") {
            tempString += "\n";
        }
    }

    return console.log(tempString);
}

