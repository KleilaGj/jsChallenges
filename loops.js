//Activity 1
let favHolidayDestinations = [
    "Venice, Italy",
    "Paris, France",
    "Barcelona, Spain",
    "Lisbon, Portugal",
    "Berlin, Germany"
]
for (let i = 1; i < favHolidayDestinations.length; i++){
    console.log(favHolidayDestinations[i])
}
//Paris, France
//Barcelona, Spain
//Lisbon, Portugal
//Berlin, Germany

//Activity 2
let evenNumbers = []

for (let n = 20; n > 0; n--){
    if (n % 2 == 0) {
        (evenNumbers.push(n))
    }
}
console.log(`The even numbers between 0 and 20 are ${evenNumbers}`)
//The even numbers between 0 and 20 are 20,18,16,14,12,10,8,6,4,2

//Activity 3
let evenNumbers = []

for (let n = 20; n > 0; n--){
    if (n % 2 == 0) {
        (evenNumbers.push(n))
    }
}
console.log(`The even numbers between 0 and 20 are ${evenNumbers}`)
//The even numbers between 0 and 20 are 20,18,16,14,12,10,8,6,4,2

//Activity 4
let randomNumber = "2"
while(randomNumber != 0 ){
    console.log(randomNumber)
    randomNumber = Math.floor(Math.random()*6) + 1
}
console.log(randomNumber)

//Activity 5
let randomNumber = "2"
while(randomNumber != 0 ){
    console.log(randomNumber)
    randomNumber = Math.floor(Math.random()*6) + 1
}
console.log(randomNumber)

//Activity
let age = 17

while(age < 20){
    if (age < 18)
        console.log("You're a child!");
    else (age > 18)
    console.log("You're an adult!")

}
