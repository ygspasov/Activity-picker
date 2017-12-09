
class Person {
    constructor(name='Anonymous', age=0){
        this.name=name;
        this.age=age;
    }
    getGreeting(){
        return `Hi, I am ${this.name}!`; 
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major=major;
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description +=` Their major is ${this.major}.`
        }

        return description
    }
}

class Traveler extends Person {
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation=homeLocation;
    }

    hasLocation(){
        return !!this.homeLocation
    }

    getHomeLocation(){
        let greeting =super.getGreeting();

        if(this.hasLocation()){
            greeting += ` I'm visiting from ${this.homeLocation}`
        }

        return greeting;
    }
}


const traveler = new Traveler('Ivan Ivanov',40,'Blagoevgrad');
console.log(traveler.getHomeLocation())

const traveler2 = new Traveler('Petar Petrov',23);
console.log(traveler2.getHomeLocation())


//babel src/playground/es6-classes-1.js  --out-file=public/scripts/app.js --presets=env,react --watch