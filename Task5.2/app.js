
let num1 = parseInt(prompt(`Enter number `))
let num2 = parseInt(prompt(`Enter number `))

function PrintUsual(num1, num2) {


    for (let i = num1; i < num2; i++) {
        console.log(i);

    }

}

PrintUsual(num1, num2)


function PrintRevers(num1, num2) {
    for (let i = num2 - 1; i > num1 - 1; i--) {
        console.log(i);

    }

}

PrintRevers(num1, num2)