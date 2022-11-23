let btn = document.getElementById("navbtn");
let view = document.querySelector('nav ');

function togglenav(){
    if (view.style.display === "none"){
        view.setAttribute("class","show")

        view.style.display = 'block'
        
    
      }
      else{

        view.style.display = 'none'
    
      }     
}
btn.addEventListener("click",togglenav)
