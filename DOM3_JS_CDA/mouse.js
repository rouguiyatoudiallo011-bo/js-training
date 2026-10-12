const img = document.querySelector(".img-dog");

img.addEventListener("click", () =>{

img.src = "https://placedog.net/300/201"; 

img.alt = "Un autre chien"; 

})


const h1 = document.querySelector(".title");


h1.addEventListener("mouseenter", () => {
     
    h1.style.backgroundColor = "red";

}) 


h1.addEventListener("mouseleave", () => {
     
    h1.style.backgroundColor = "gold";

}) 




