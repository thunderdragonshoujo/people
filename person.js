function people() {
    const person1 = {
        firstName: "Clint",
        lastName: "McClure",
        wealth: 100,
        age: 21 
    }
    const person2 = {
        firstName: "Randall",
        lastName: "McClure",
        wealth: 200,
        age: 60
    }
    const person3 = {
        firstName: "Brett",
        lastName: "Compton",
        wealth: 80,
        age: 22
    }
    const person4 = {
        firstName: "Nate",
        lastName: "Lubitz",
        wealth: 400,
        age: 20
    }
    let arr = [person1, person2, person3,person4]

    return arr
}
let persons = people()

let myNames = persons
    .filter(p => p.lastName === "McClure" || p.lastName === "Compton" || p.lastName === "Lubitz")
let myPeople = myNames
let myWealth = myPeople    
    .map(p => p.wealth)
let x = myWealth.length
console.log("array size is" ,x)
let myAverage = myWealth
    .reduce((sum, value) => sum + value/x, 0)
console.log(myAverage)