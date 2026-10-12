let  bears = document.querySelectorAll("img");

const bearPictures = [
  "https://placebear.com/200/201",
  "https://placebear.com/200/202",
  "https://placebear.com/200/203",
  "https://placebear.com/200/204",
  "https://placebear.com/200/205",
];


for (let i = 0; i < bears.length; i++) {
   

    for(let j = 0 ; j < bearPictures.length; j++ )
    { 

        bears[i].src= bearPictures[j];
         
}

}