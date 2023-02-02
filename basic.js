// let temp= Math.floor(Math.random()*30)-5;
// console.log(temp);
// if (temp<11){
//     console.log("The weather is Cold")
// }
// else {
//     console.log("the weather is Moderate")
// }
// let random= Math.floor(Math.random()*7);
// let favoriteFoods=["pizza", "hamburger", "ice cream" , "chocolate"];
// console.log(favoriteFoods[random]);

// function crystalGrazer(){
//     let child=prompt("please ,enter your number of children");
//     let name= prompt("give your lastname");
//     let geol=prompt("provide your location");
//     let jobtittles=prompt("your jobtittle");
//     return `you will be a ${jobtittles} in ${geol} and married to ${name} with ${child} children`;
// }
// document.write(crystalGrazer());

// function ageCalculator(){
//     let birth = prompt("insert your year of birth");
//     let current = new Date().getFullYear();
//     return `${current - birth}`;
// }

// console.log(ageCalculator());

// function convertor (){
//     let degrees = prompt("Enter the degree");
//     let formula = (Math.PI/180);
//     return `your ${degrees} degrees ammount ${degrees * formula} radians`
// }

// document.write(convertor());

// function calculation (){

//     let width = prompt("Width of the item?");
//     let height = prompt("Height of the item?");
//     let depth = prompt ("Depth of the item?");

//     return `your area is ${width * height} and the volume is ${width *height*depth}. `;

// }
// document.write(calculation());

//Time convert//

function timeconverter(){
    let inputnumber = prompt("Insert the desired minutes to convert");
    if (inputnumber>60){
        var hours = inputnumber / 60 ;
        var hoursnatural= Math.floor(hours);
        var resulting = inputnumber - (hoursnatural *60);
        return ` your ${inputnumber} transformed into: ${hoursnatural} hours and ${resulting} minutes.`
    }
    

}

console.log(timeconverter())