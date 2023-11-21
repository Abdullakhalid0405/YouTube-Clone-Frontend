var meanuicon = document.querySelector(".user-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

meanuicon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
} 
