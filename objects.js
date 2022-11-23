class Pet {
    constructor(name, age, type, breed, colour, time) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.breed = breed
        this.colour = colour;
        this.lastFed = time;
        
    }
get petInfo () {
    return `${this.name} is a ${this.type}, ${this.age} year(s) old`;
}
set fullName (name) {
    const array = name.split(" ");
    this.firstName = array[0]
    this.surname = array[1];
}
    feedPet (time) {
        this.lastFed = time;
        return `Last feed updates to: ${this.lastFed} for ${this.name}`;

    }
}

// class PetMeds extends Pet {
//     constructor(name, age, type, breed, colour, time, mtime) {
//         super(name, age, type, breed, colour, time);
//         this.lastMeds = mtime;
//     }
//     giveMeds (time) {
//         this.lastMeds = time;
//         return `Last meds updated to: ${this.lastMeds} for ${this.name}`

//     }
// }

const bella = new Pet("Bella", 2, "Dog", "GS", "B&T", "08:00");
bella.fullName = "Bella Crompton"
console.log(bella)

//const barney = new PetMeds("Barney", 4, "Cat", "Dom-Short", "B&G", "10:00", "13:00");
//const betty = new Pet("Betty", 4, "Dog", "SH", "White", "10:00")


//console.log(betty)


//console.log(bella)
//console.log(bella.feedPet("15:00"))
//console.log(bella)
