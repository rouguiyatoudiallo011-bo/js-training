const newCat = document.createElement("img");
newCat.src = "https://placecats.com/300/202";
newCat.alt = "Un chat noir";
newCat.class =  "card-img";


const secondCard = document.querySelector(".second-card");
secondCard.appendChild(newCat); 


const divtreeCat = document.createElement("div");
    divtreeCat.class = "third-card";

    const h2treeCat = document.createElement("h2");
    h2treeCat.textContent = "Troisième chat";

const imgtreeCat = document.createElement("img");

imgtreeCat.src = "https://placecats.com/300/203";

divtreeCat.appendChild(h2treeCat);

divtreeCat.appendChild(imgtreeCat);

const body = document.querySelector("body");

body.appendChild(divtreeCat);









