function myFunction(x) {
  let menu = document.getElementById("menu-list");
  x.classList.toggle("change");
  if ("change" == x.classList[1]) {
    menu.style.display = "flex";
  }
  else {
  	menu.style.display = "none";
  }
  
  
} 