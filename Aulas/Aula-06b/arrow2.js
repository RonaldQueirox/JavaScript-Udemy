let compareThis = function (param) {
    console.log(this === param)
}

compareThis(global)
const obj = {}
compareThis = compareThis.bind(obj)

// Não esta mais instanciando o Global
compareThis(global)
compareThis(obj)

let compareThisArrow = param => console.log(this === param)

compareThisArrow = compareThisArrow.bind(obj)
compareThisArrow(obj)