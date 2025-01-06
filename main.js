// const phone1 = {
//     serial: 123,
//     color: "Red",
//     price: 500,
// };

// const phone2 = {
//     serial: 159,
//     color: "Black",
//     price: 500,
// };

// const phone3 = {
//     serial: 167,
//     color: "Silver",
//     price: 500,
// };
// function Phone(serial, color, price){
//     this.serial = serial;
//     this.color = color;
//     this.price = price;
// }
// let phone1 = new Phone(123, "Red", 500);
// console.log(phone1.serial);
// console.log(phone1.color);
// console.log(phone1.price);
// class Car{
//     brand;
//     color;
//     number;


// }
// p = new Car();
// p.brand = 'Dodge';
// p.color = 'Black';
// p.num = 'FC1998';
// printInfo()
// document.write('Brand: ' + p.brand + '<br>');
// document.write('Color: ' + p.color + '<br>');
// document.write('Number: ' + p.num + '<br>');



// class Car{
//     brand;
//     color;
//     number;
//     constructor(brand, color, number){
//         this.brand = brand;
//         this.color = color;
//         this.num = number;

//     }

//     printInfo () {

//         document.write('Brand: ' + this.brand + '<br>');
//     document.write('Color: ' + this.color + '<br>');
//     document.write('Number: ' + this.num + '<br>');


//     }
// }
// p = new Car('Dodge','Black','FC1998' );
// car2 = new Car('BMW', 'Blue', 'MDS1962');

// p.printInfo();
// car2.printInfo();
// class Cars {
//     constructor(name= 'unknown', color = 'unknown', years = 0){
//         this.name = name;
//         this.color = color;
//         this.years = years;
//     }
//     printInfo() {
//         document.write('Name:' + this.name + '<br>');
//         document.write('Color:' + this.color + '<br>');
//         document.write('Year:' + this.years + '<br>');

//     }
// }

//     car1 = new Cars();

//     car2 = new Cars('Dodge', 'Red' ,2016);

//     car1.printInfo();
//     car2.printInfo();
// let car = {
//     brand:'BMW',
//     color:'Blue',
//     model:'2020',
//     getmodel:function(){
//         return 'available';
//     },

// }
// car.price = 90000;
// for (let key in car){
//     console.log(`${key}:
//         ${car[key]}`)
        
// }
// Object.seal(car);
// car.color="red"
// console.log(car.color)

let car = {
    brand:'BMW',
    color:'Blue',
    model:'2020',
    getmodel:function(){
        return 'available';
    },

}
let p = {
    price : 90000,
}

Object.assign(p , car);
console.log(Object.entries(p));
console.log(Object.keys(p));
console.log(Object.values(p));



// let car = {
//     brand:'Dodge',
//     color:['Blue', 'Black, Red'], 
//     model:'2020',

//     hello:function(){
//         return 'hello';
//     }

// };
// console.log(car.model)
// let car = {
//     brand:'Dodge SRT',
//     color:'Red',
//     model:'2002', 
//     numbers:{
//         first:'FC1998',
//         second:'MDS1983',

//     },
//     address:{
//         Egypt:true,
//         UAE:true,
//         Jordan:false,
        
//     },
//     Available:function(){
//         if(car.address === true){
//             return 'Available';
        
//         }
//         else{
//             return 'Sorry its not Available'
//         }
//     },

//     getModel:function(){
//         if(car.model >= 2020)
//         {
//             return 'new car here';
//         }
//         else{
//             return 'We dont have old car';
//         }
//     },

// };
// console.log(car.getModel());
// let cars = {};
// cars.brand = 'Dodge Srt';
// cars.model = '2023';
// cars.color = 'black';
// console.log(cars.brand);
// let a1 = {
//     num1:1,
// }
// let a2 = {
//     num2:2,
// }
// let a3 = {
//     num3:3,
// }
// let a4 = Object.assign(a1,a2,a3,{
 
// });
// console.log(a4)
// const user = {
//     username:"decode",
//     memberSince: "2017",
// };
// Object.freeze(user);
// user.memberSince = "2018";
// user.active = true;
// delete user.username;
// console.log(user);



