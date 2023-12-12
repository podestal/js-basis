const address = {
    street: '217 first st',
    city: 'Elizabeth',
    country: 'USA'
}

// Old way to get methods as vars
// const street = address.street
// const city = address.city
// const country = address.country

// Destructuring
const { street, city, country} = address
console.log(street)
console.log(city)
console.log(country)
// alias
const {street: st} = address
console.log(st);