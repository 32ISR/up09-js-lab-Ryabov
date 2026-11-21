console.log("привет, мир!")
console.log(2 + 2)
console.log(typeof "hello")

console.log(10 % 3)
console.log(2 ** 8)

console.log("text" * 2)
console.log(isNaN(("text" * 2)))

const price = 19.9876
console.log(price.toFixed(2)) 

Number("42")    
parseInt("42px")  
parseFloat("3.14abc") 

// String
const name = "Мария"
const age = 21
console.log(`Студентка ${name}, возраст: ${age}`)

console.log(`Сумма: ${10 + 20}`)   // Сумма: 30
console.log(`Это ${age >= 18 ? "совершеннолетний" : "несовершеннолетний"}`)

const str = "  Hello, World!  "
console.log(str.trim())                   // "Hello, World!"
console.log(str.trim().toLowerCase())     // "hello, world!"
console.log("ha".repeat(3))              // "hahaha"
console.log("7".padStart(3, "0"))        // "007"