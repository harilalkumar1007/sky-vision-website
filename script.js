console.log ("JS Connected Successfully");
window .onload = function(){
    alert("welcome to sky vision consultancy");
}
window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.2)";
    }else{
        navbar.style.boxShadow = "none";
    }

});
const texts= [
    "Crafting Memorable Experiences",
  "Professional HR Consultancy",
  "Digital Marketing Solutions"
];

let current = 0;

setInterval(() => {
  current = (current + 1) % texts.length;
  document.getElementById("heading").innerHTML = texts[current];
}, 3000);