const fruits = ["Kiwi", "Apple", "Pineapple", "Kiwi"];
console.log(fruits.includes("Banana"));
console.log(fruits.indexOf("Kiwi"));
console.log(fruits.indexOf("Banana"));



const guests = ["Camille", "Sofia", "Malik", "Nour"]; 

if(guests.includes("Camille")){
    console.log(guests);
}


console.log(guests.indexOf("Malik"));

console.log(guests.includes("Bob"));

console.log(guests.indexOf("Bob"));

console.log(guests.join(","));

console.log("G_R_E_T_A".split());



const podium2 = ["Camille", "Sofia", "Malik", "Nour"];
const removed = podium2.splice(1, 2);
console.log(removed);
console.log(podium2);


const podium = ["Camille", "Sofia", "Malik", "Nour"];
const excerpt = podium.slice(1, 3);
console.log(excerpt);
console.log(podium);


const smoothie = ["Apple"].concat(["Banana", "Kiwi"]);   // ["Apple", "Banana", "Kiwi"]
const scores = [1, 2, 3];
scores.reverse();
console.log(scores);   // [3, 2, 1]   ← l'original a changé



const weddingGuests = ["Camille", "Sofia", "Malik", "Nour", "Bob", "Léa"];

const honorTable = weddingGuests.slice(0, 1, 2);
 console.log(honorTable);

weddingGuests.splice(2, 3);
console.log(weddingGuests);

weddingGuests.splice(1 , "Ines");
console.log(weddingGuests);


const grades = [12, 5, 20, 8, 15]; 

grades.sort((a, b) => a - b);
console.log(grades);


const result = [12, 5, 20, 8, 15];

const resultcopie = result.slice();

resultcopie.sort((a, b) => b - a);

resultcopie.splice(3, 4);
console.log(resultcopie);



// livrable

const mysteriousString = "iu@zfiz)!uzqzf!snoi??alutargnocze&gfuzyafzygfzmgfu%f";
console.log("step 0 : ", mysteriousString);

// step 1 : découpe-la en tableau, une lettre par élément

const step1 = mysteriousString.split("");

console.log("step 1 : ", step1);

// step 2 : garde de l'index 15 inclus à l'index 31 exclu
const step2 = step1.slice(15, 30);
console.log("step 2 : ", step2);
// step 3 : à partir de l'index 4, remplace 2 éléments par la seule lettre "t"
const step3 = step2.slice();

step3[4] = "t";

step3[6] = "t";
   
console.log("step 3 : ", step3);
// step 4 : inverse l'ordre
const step4 = step3.reverse();
console.log("step 4 : ", step4);
// step 5 : recolle tout en une chaîne, sans séparateur
const step5 = step4.join("");
console.log("step 5 : ", step5);





