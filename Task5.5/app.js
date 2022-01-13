let _num = parseInt(prompt(`Enter number `))

function f(n) {
    if (n == 0) return ''
    return '(' + f(n - 1) + ')'
}

console.log(f(_num));