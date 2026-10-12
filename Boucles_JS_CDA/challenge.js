 const animals = ["😺", "🐶", "🐭", "🦊", "🐻", "🐼"];

for ( let i = 0 ; i < animals.length; i++) {
   
   if (i % 2 )
   {
     console.log(i);
   }
     else {
       i.delete;
     }
}

 
let j = 1

while (j < 11) {
    console.log(j); 
    j++;
}



const hiddenMessage = ["X","X","X","X","W","X","E","X","X","X","X","X","L","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","L","X","X","X","X","X","X","X","X","X"," ","X","X","X","X","X","X","X","X","D","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","O","X","X","X","X","X","X","N","X","X","X","X","E","X","X","X","X","X","X","X","X","X","X"," ","X","!","X"];


for (let i = 0 ; i < hiddenMessage.length ; i++) {
    if ( hiddenMessage[i]!== "X" ) {
       console.log(i);
    }

    else {
        i.delete;
    }

}

