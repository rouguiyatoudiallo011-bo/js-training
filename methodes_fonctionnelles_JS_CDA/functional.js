const catalogue = [
  { name: "Tacos", price: 8.5, inStock: true },
  { name: "Poke bowl", price: 11, inStock: false },
  { name: "Tiramisu", price: 5, inStock: true },
];


const namePF = catalogue.filter((dish) => dish.name === "Poke bowl");

 const namePoFr = namePF.map((dish) => dish.name); 

console.log(namePoFr);



const namePlatRuptureF = catalogue.filter((dish) => dish.name && dish.inStock === false);


const namePlatRuptureFr =  namePlatRuptureF.map((dish) => dish.name)
console.log(namePlatRuptureFr);




const platSup = catalogue.filter((dish) => dish.price > 20 );

console.log(platSup);

console.log(catalogue);


const tomorrow = catalogue;
tomorrow.push({ name: "Café gourmand", price: 6, inStock: true });
console.log(catalogue.length);
console.log(catalogue);



const newCatalogue = catalogue.map((dish) => 
  dish.name === "Tacos"
    ? { ...dish, price: 99 }   // le Tacos : un plat neuf, avec le nouveau prix
    : dish  // les autres : le même plat, tel quel
);

  console.log(newCatalogue);
 console.log(catalogue);



 const newCatalogue2 = [...catalogue, {name: "Churros", price: 4, inStock: true }];

 console.log(newCatalogue2);
  

 const  newCatalogue3 = catalogue.map((dish) => 
  
  dish.name === 'Tiramisu' ? 
  { ...dish , price : 4} 
  : dish

);
console.log(catalogue);

console.log(newCatalogue3);



const { name, inStock} = catalogue[0];



