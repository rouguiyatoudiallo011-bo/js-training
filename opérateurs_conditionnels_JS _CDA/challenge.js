

/*let motPasse = prompt("Votre mot de passe s'il vous plait");

if (motPasse === "secret"){
     console.log("Welcome!");
}

else {
    console.log("Wrong password!");
}*/



/*
let age = prompt("Votre age s'il vous plait");

if (age < 18)
{
    console.log("mineur");
}

else if (age >= 18){
    console.log ("majeur");
}

else {
    cosole.log("je ne sais pas ");
}
 */


/*if (1) { console.log("A"); }
if (0) { console.log("B"); }*/





/* les ternaires

/* const animalName = ["Paul", "Bob"]; 
animalName === "Paul" || animalName === "Bob"? console.log("Welcome Paul!") :console.log("Wrong Cat detected!");*/





//Livrable 


const camilleRoll = 12 ; 

const sofiaRoll  = 14 ; 

const malikRoll = 12 ; 

if (camilleRoll === sofiaRoll === malikRoll)   
{
    console.log("Les trois joueurs ont fait le même score"); }

    else if (camilleRoll === sofiaRoll  || sofiaRoll === malikRoll ||  malikRoll ===  camilleRoll)

        {
            console.log ("Deux joueurs ont fait le même score");
        }
  else {
    console.log("Les trois joueurs ont des scores différents");
  }
