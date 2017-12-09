var nameVar ='Andrew';
nameVar='Mike'
console.log('nameVar',nameVar);

let nameLet ='Jen';
nameLet='Julie';
console.log('nameLet',nameLet);

const nameConst ='Frank'
console.log('nameConst',nameConst);

const fullName='Andrew Mead';
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0]
    console.log(firstName);
}

console.log(firstName)

//babel src/playground/es6-let-const.js  --out-file=public/scripts/app.js --presets=env,react --watch