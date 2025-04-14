function Numbers(x, y) {
    const Soma = function() {
        return x + y;
    }
    const Sub = function() {
        return x - y;
    }
    const Divi = function() {
        return x / y;
    }
    const Mult = function() {
        return x * y;
    }

    console.log("Soma:", Soma());
    console.log("Subtração:", Sub());
    console.log("Divisão:", Divi());
    console.log("Multiplicação:", Mult());
}

Numbers(10, 5);