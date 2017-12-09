// const square = function (x) {
//     return x * x;
// };

// const squareArrow= (x)=>{
//     return x*x;
// }

// const squareArrow = (x) => x * x;

// console.log(squareArrow(9));


const fullName='Andrew Mead';

const getFirstName= ()=>{
    return console.log(fullName.split(' ')[0])
}

getFirstName();


const getFirstNameShort=()=>console.log(fullName.split(' ')[0]);

getFirstNameShort();



//babel src/playground/es6-arrow-function.js  --out-file=public/scripts/app.js --presets=env,react --watch