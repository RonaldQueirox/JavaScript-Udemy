function Calculadora(x, operation, y) {
    opera = operation
    switch(opera) {
        case "+":
            return x + y     
        case "-":
            return x - y
        case "/":
            return  x / y
            
        case "*":
            return x * y
        default:
            console.log("operações inválidas. ")    
    }
}
console.log(Calculadora(2, "*", 4))