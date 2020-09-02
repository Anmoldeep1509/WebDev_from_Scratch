const fs = require('fs')

people = []

people.push({
    name: 'Anmoldeep',
    age: 19,
    rno: 37
})


people.push({
    name: 'Tushar Dua',
    age: 21,
    rno: 51
})

console.log(people);
console.log(JSON.stringify(people));


fs.writeFileSync('firstJSON.json', JSON.stringify(people))

data = fs.readFileSync('firstJSON.json')

myObject = JSON.parse(data)

console.log(myObject);