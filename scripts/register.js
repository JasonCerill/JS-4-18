let petSalon = {
    name: "The Fashion Pet",
    address: {
        street:  "Wagalong st",
        zip:  "48484"
    },
    hours:{
        open:"9:00am",
        close: "8:00pm"
    },
    pets:[]
}

function Pet(name, age, gender, breed, service, oname, cphone){
    this.petName=name;
    this.petGender=gender;
    this.petBreed=breed;
    this.serviceRequested=service;
    this.ownerName=oname;
    this.contactPhone=cphone;

}

let pet1= new Pet("Louise", "female", "pitbull-mix", "full-groom", "Jason", "781-864-5555");
let pet2= new Pet("Coco","female", "Shepherd-Mix", "nail-clipping", "Jen", "647-563-46474");
let pet3= new Pet("Django","female", "Mutt", "Poofing", "Dion", "647-563-46474");

console.log(pet1,pet2,pet3);