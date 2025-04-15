console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Bia', 'Carlos', 'Ana')
console.log(aprovados)

let aprovados2 = ['Lucas', 'Layanne', 'Julio Cesar']
console.log(aprovados2[0])
console.log(aprovados2[1])
console.log(aprovados2[2])
console.log(aprovados2[3])

aprovados2[3] = 'Paulo'
aprovados2.push('Nicole')
console.log(aprovados2.length)

aprovados2[9] = 'Rafael'
console.log(aprovados2.length)
console.log(aprovados2[8] === undefined)

console.log(aprovados2)
aprovados2.sort()
console.log(aprovados2)