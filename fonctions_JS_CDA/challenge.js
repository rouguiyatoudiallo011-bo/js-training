function introduce(firstNAme, city) {
  console.log(firstNAme  + "" + "vient de"
    + "" + city );
}

introduce("Camille", "Tours"); 

introduce("Malick", "Lyon");

introduce("Sofia", "Nantes");

function introduce(firstNAme, city = "Toulouse") {
  console.log(firstNAme  + "" + "vient de"
    + "" + city );
}


introduce("Camille");



function isAdult(age){
  
  if (age >= 18) {
    return true;
  }
  return false;
}

 console.log(isAdult(20));


 function formatFullName(firstName, lastName) {

  return firstName + lastName ; 

}
 
  console.log( formatFullName("Camille", "Dubois"));




const formatFullName1 = (firstName, lastName) => {
    
  return firstName + lastName; 

}

  console.log(formatFullName1("Camille", "Dubois"));




const formatFullName2 = (firstName, lastName) => {
    
  return `${firstName} , ${lastName}`; 

}

  console.log (formatFullName2("Camille", "Dubois"));






 function changeMessage(name, numbertacos, price, totalprice){
  
  let thechange = totalprice -  (numbertacos * price);

  if (thechange < 0)
{
  return `${name} paie ${totalprice}  pour ${numbertacos} tacos à ${price} , il manque  ${-1 * thechange} £ `;
} 

return  `${name} paie ${totalprice}  pour ${numbertacos} tacos à ${price} , on lui rend ${thechange} £ `;
} 


 


console.log(changeMessage("Camille", 3, 8, 25));

console.log(changeMessage("Malik", 2, 8, 20));

console.log(changeMessage("Sofia", 2, 8, 10));















