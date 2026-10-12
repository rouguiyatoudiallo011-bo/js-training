// challenge.js
const cats = [
  { name: "Mimi", picture: "https://placecats.com/200/200" },
  { name: "Billy", picture: "https://placecats.com/200/201" },
  { name: "Tigrou", picture: "https://placecats.com/200/202" },
];

const sectionCat = document.querySelector(".gallery");

// Carte 1

const divCatOne = document.createElement("div");

const h2CatOne = document.createElement("h2");

const imgCatOne = document.createElement("img");

h2CatOne.textContent = cats[0].name
imgCatOne.src = cats[0].picture;

divCatOne.appendChild(imgCatOne);

divCatOne.appendChild(h2CatOne);

sectionCat.appendChild(divCatOne);


// Carte 2 


const divCatTwo = document.createElement("div");

const h2CatTwo = document.createElement("h2");

const imgCatTwo = document.createElement("img");

h2CatTwo.textContent = cats[1].name
imgCatTwo.src = cats[1].picture;

divCatTwo.appendChild(imgCatTwo);

divCatTwo.appendChild(h2CatTwo);

sectionCat.appendChild(divCatTwo);


// Carte 3`


const divCatTree = document.createElement("div");

const h2CatTree = document.createElement("h2");

const imgCatTree = document.createElement("img");

h2CatTree.textContent = cats[2].name
imgCatTree.src = cats[2].picture;

divCatTree.appendChild(imgCatTree);

divCatTree.appendChild(h2CatTree);

sectionCat.appendChild(divCatTree);










