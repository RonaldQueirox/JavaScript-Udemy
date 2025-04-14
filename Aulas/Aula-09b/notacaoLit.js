const a = 1
const b = 2
const c = 3

const obj2 = {a, b, c}
console.log(obj2)

const nomeAllr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAllr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAllr]: valorAttr}
console.log(obj4)

const obj5 = {
    function() {

    }
}