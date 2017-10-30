function Cars() {
const car1 ={
    name: "ferria",
    price: 2000000,
    mfg: "ferria"
}
const car2 = {
    name: "lambo",
    price: 2000000,
    mfg:"lambo"
}
const car3 = {
    name: "gtr",
    price: 100000,
    mfg: "nissan"
}
const car4 = {
    name: "mercadies",
    price: 100000,
    mfg: "mercadies"
}
return [car1,car2,car3,car4]

}
let cars = Cars()
let prices = cars.map(c => c.price)
let len = prices.length
 let avragePrice = prices.reduce((sum, value) => sum + value /len,0)
console.log(avragePrice)