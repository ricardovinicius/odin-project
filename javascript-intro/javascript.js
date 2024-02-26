let number = parseInt(prompt("Enter a number"));

for (let i = 1; i <= number; i++) {
    let message = "";
    if (i % 3 != 0 && i % 5 != 0) {
        message += i;
    }
    else {
        if (i % 3 == 0) {
            message += "Fizz";
        }
        if (i % 5 == 0) {
            message += "Buzz";
        }
    }

    console.log(message);
}