

const billyTheCat = {

name : "Billy" ,
color : "roux" ,
favouriteFoods : ["thon", "croquettes"] ,
isHungry : true ,

meow : function () {
    console.log(Miaaaou);
}
}


console.log(billyTheCat.favouriteFoods[1]);


const choice = "color";

console.log(billyTheCat[choice]);

billyTheCat.color = "noir";

console.log(billyTheCat);



const animals = [
  { name: "Billy", species: "chat", sound: "Miaou" },
  { name: "Rex", species: "chien", sound: "Wouf" },
  { name: "Coco", species: "perroquet", sound: "Coco !" },
];


for (let i = 0; i < animals.length; i++){

console.log(`${animals[i].name} dit ${animals[i].sound} `) ;

}


billyTheCat.feed = function () {
 if(this.isHungry){
  this.isHungry = false;
    return console.log(`${this.name} mange`);
}

else {

 this.isHungry = false;
   
    return console.log(`${this.name} n'a pas faim`);
}
}

billyTheCat.feed();


// livrable


const  foodTruck = {

    address : {city : "Tours"},

    menu : ['tacos', 'quesadilla', 'burrito' ],

    open : function (){
       
          if (this.menu.length > 2)
   {
     return console.log("Tocos loco est dejà ouvert");
   }

    
        return console.log("Tacos Loco ouvre, 2 plats au menu !");
    } ,
    

addDish: function (plats)
{
    return console.log(this.menu.push(plats))
}

}



console.log(foodTruck.address.city);
// Tours
foodTruck.open();
// Tacos Loco ouvre, 2 plats au menu !
foodTruck.addDish("burrito");
foodTruck.open();
// Tacos Loco est déjà ouvert.
console.log(foodTruck.menu);
// [ 'tacos', 'quesadilla', 'burrito' ]


