const first = [1, 2, 3]
const second = [4, 5, 6]

// old way
const combined = first.concat(second)

// spread operator
// const combineSpread = [...first, ...second]
// we can add elements whenever
const combineSpread = ['g', ...first, 'a', ...second, 'b']
console.log(combineSpread);

// spread operator in objects
const firstObject = {name: 'Athos'}
const secondObject = {job: 'Instructor'}

const combinedObject = {...firstObject, ...secondObject, location: "Australia"}
console.log(combinedObject);

// clone an object
const clone = {...firstObject}
console.log(clone);