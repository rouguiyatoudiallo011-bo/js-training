const pets = ["😺", "🐶", "🐭", "🦊"];

console.log(pets); 

console.log(pets[1]);
console.log(pets.length - 1);

pets[0] = "🐰";

console.log(pets);

console.log(pets.pop("Banane"));


const animals = ["Lion", "Monkey", "Tiger"];

animals.push("Zebra");

console.log(animals);

animals.unshift("Panda");

console.log(animals);

animals.pop("Zebra");

animals.shift("Panda");

console.log(animals);


// livrable 


const fireSigns = ["♈", "♌"];
const earthSigns = ["♉", "♍", "♑", "♐"];
const airSigns = ["♓", "♊", "♎", "♒"];
const waterSigns = ["♏", "♓"];


fireSigns.push("♐");

earthSigns.pop("♐");

airSigns.shift("♓");

waterSigns.unshift("♋");



