class Human{
    constructor(name, age, sex){
        this._personname=name;
        this._personage=age;
        this.personsex=sex;
    }
    get name(){
        return this._personname;
    }
    get age(){
        return this._personage;
    }
    get sex(){
        return this._personsex;
    }

    set name(updatedName){
        this._personname=updatedName;
    }
    set age(updatedAge){
        this._personage=updatedAge;
    }
    set sex(updatedSex){
        this._personsex=updatedSex;
    }

    afterFive(){
        return this._personage+5;
    }

}

let human1=new Human("Rasel", 28, "Male");
let human2=new Human("Tanim", 70, "Female");
let human3=new Human("Zillu", 170, "Male");
console.log(human2.age);
console.log(human2.name);
console.log(human2.afterFive());



