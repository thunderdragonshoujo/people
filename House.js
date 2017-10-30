function houses() {
    const basic = {
    floorPlanName: "basic" ,
    squareFeet: 1300,
    price: 80000
    }
    const ranch = {
        floorPlanName: "ranch",
        squareFeet: 2500,
        price: 150000
    }
    const mansion = {
        floorPlanName: "mansion",
        squareFeet: 9000,
        price: 1000000
    }
    const whiteHouse = {
        floorPlanName: "white House",
        squareFeet: 20000,
        price: 2000000
    }
    return[basic,ranch,mansion,whiteHouse]
} 
//console.log(houses())
let homes = houses()
let tenThousand = homes.filter(home => home.squareFeet <= 10000 && home.squareFeet >=2500)  
let prices = tenThousand.map(home=>home.price)
let length = prices.length
let avarage = prices.reduce((sum,value) => sum + value/length,0)
console.log(avarage)


