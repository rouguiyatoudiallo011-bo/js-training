 const form = document.querySelector("#order-form");


form.addEventListener("click", () => {
  event.preventDefault();
   
  const inputQuantity = document.querySelector("#quantity");
    
  let quantity = inputQuantity.value;
  let totalPrice = document.querySelector("#total");

  let calcul = quantity * 8 ;

  totalPrice.textContent = "Total : " + calcul + "£"; 

  if ( quantity > 10 ) {
     
    totalPrice.style.color = "green"; 

  }
 
  const vider = document.querySelector("#reset");

  vider.addEventListener("click", () => {

    inputQuantity.value = null;

    calcul = 0; 

    totalPrice.textContent = "Total : " + calcul + "£";

  })

})

