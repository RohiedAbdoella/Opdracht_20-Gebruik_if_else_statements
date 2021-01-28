const age = 18;
const isFemale = true;
const driverStatus = "bob";

if (age == 18) {
    console.log("je bent 18 jaar");
} else if(age > 18) {
    console.log("je mag naar binnen, je bent ouder dan 18 jaar");
} else {
    console.log("ga naar huis");
}

if (isFemale) {
    console.log("U mag naar binnen");
} else {
    console.log("U bent geen vrouw en mag niet naar binnen");
}

if (driverStatus) {
    console.log("U mag rijden");
} else {
    console.log("U heeft gedronken en mag naar niet rijden");
}