//task 1 
let array = [-5, -4 , -3, -2, -1, 1, 2, 3, 4, 5,6];

let filteredArray = array.filter(members => members > 0);
// console.log(filteredArray);
  
const calculateSum = (filteredArray)=>{
    return filteredArray.reduce((total, current)=>{
        // console.log(total, current);
        return total + current
    },0)
}
console.log(calculateSum(filteredArray));  
// finish

//task 2

let secondArray = ['a','b','c','d','a','e','c','d']
console.log(secondArray);

const reduceMethod = (secondArray)=>{
    return secondArray.reduce()
} // not finish

//task 3
class Car {
    constructor(brand, model,){
        this.brand = brand;
        this.model = model;
        this.speed = 0;
        this.motion = "The car is not moving";
    }
    checkMotion() {
         if(this.speed > 0){
            return this.motion = 'car is moving'
         }else if (this.speed = 0){
            return this.motion = 'car is stopped'
         }

    }
    accelerate(speed) {
        this.speed = this.speed + speed;
        return this.speed
    }
    brake() {
        // this.speed

    }

    emergencyBrake() {
        this.speed = 0
    }
    status() {
        
    }
}
let car1 = new Car("ford" ,"G47")
console.log(car1);
console.log(car1.accelerate(80));
// not finish


// task 4

    let number1 = 10
    let number2 = 10
    let promise = new Promise((resolve, reject) => {
       
        if(number1 > number2 ){
            resolve(`${number1} > ${number2}`)
        } else if(number1 < number2){
            resolve(`${number1} < ${number2}`)
        }
        else{
            reject("error")
        }
    })
 
 promise.then((message) =>{
    console.log("this is " + message);
}).catch((message) => {
    console.log(('this is ' + message));
}) // finish