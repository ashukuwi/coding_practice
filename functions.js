var solve = function (number, operation, number2) {
    if (operation == "+") {
        console.log(number + number2);
    }else if (operation == "-") {
        console.log(number - number2);
    }else if (operation == "*") {
        console.log(number * number2);
    }else if (operation == "/") {
        console.log(number / number2);
    };
};
solve(5, "+", 5);