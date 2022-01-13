let _num = parseInt(prompt(`Enter number `))

function SumNumbe(num) {
    if (Math.floor(num / 10) < 1) {
        return num
    }
    else {
        return SumNumbe(Math.floor(num / 10)) + num % 10
    }


}

console.log(SumNumbe(_num));