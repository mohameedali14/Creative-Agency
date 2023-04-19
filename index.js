var bug =document.querySelector(".bars");
var nav =document.querySelector(".nav");

     
    bug.onclick=function(){
        
         nav.classList.toggle("zero");
         if(nav=="zero"){
            nav.style.display="block";
          }
     }
    