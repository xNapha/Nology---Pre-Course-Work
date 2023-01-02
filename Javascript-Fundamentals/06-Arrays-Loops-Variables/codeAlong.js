// 1. Create an array of Coaches
const coaches = ["Andy", "Sam", "Bex"]

// 2. Create an array of pets
const pets = ["Fido", "Rusty", "Jack"]

// 3. Create an array of numbers
const numbers = [123,123415, 1235863]

// 4. Create a nested array
const nested = [[[[1],2],3],4];

// 5. Create a sample loop
for (let index = 0; index < 5; index++){
    console.log(`The index on this loop is ${index}`)
}

// 6. Create a for loop
for (let i = 0; i< coaches.length; i++){
    console.log(coaches[i])
}

// Iterator Code Along forEach
let test = 0
pets.forEach((pet)=>{
    test++
    console.log(`this is pet ${test}`)
})

// Iterator Code Along map
console.log(numbers[0]%2)

let newNumbers = numbers.map((number)=>{
    if (!(number%2== 0)){
        return 1
    } else {
        return 2
    }
})
console.log(newNumbers)

// Iterator Code Along filter

const name = coaches.filter((coach)=>{
    if(coach.includes("e")){
        return true
    }
})
console.log(name)

const name1 = coaches.map((coach)=>{
    if(coach.includes("e")){
        return true
    }
})
console.log(name1)
