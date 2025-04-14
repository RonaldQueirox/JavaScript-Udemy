function Piramide(a, b, c) {
    if (a == b && b == c && c == a) {
        console.log("Equilatero")
    } else if (a == b || b == c || a == c) {
        console.log("Isoceles")
    } else if (a != b && b != c && c != a) {
        console.log("Escaleno")
    }
}
Piramide(2, 4, 8)