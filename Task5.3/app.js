let _num = parseInt(prompt(`Enter number`))

function Rez(n) {
    if (n < 10) {
        return n
    }
    let temp = n
    let digits = 0

    while (temp > 9) {
        temp = Math.floor(temp / 10)
        digits++
    }
    return (n % 10) * (10 ** digits) + Rez(Math.floor(n / 10))

}

console.log(Rez(_num));