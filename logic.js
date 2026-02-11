let nav = document.getElementById("nav_link");
let navLinks = document.getElementById("nav_links");

nav.addEventListener("click", function(){
    
    navLinks.classList.toggle("active");
});
