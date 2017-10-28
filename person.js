function people() {
    const person1 = {
        firstName: "Clint",
        lastName: "McClure",
        wealth: 100
    }
    const person2 = {
        firstName: "Randall",
        lastName: "McClure",
        wealth: 200,
        age: 60
    }
    let arr = [person1, person2]

    return arr
}
let persons = people()

let myPeople = persons
    .filter(p => p.lastName === "McClure")
    .map(p => p.wealth)
    .reduce((sum, value) => sum + value, 0)
console.log(myPeople)