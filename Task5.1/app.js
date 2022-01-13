let _num = parseInt(prompt(`Enter number`))
function Fact(n) {
    return n <= 1 ? 1 : n * Fact(n - 1)
}

alert(Fact(_num))