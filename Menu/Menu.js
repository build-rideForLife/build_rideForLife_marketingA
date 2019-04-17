// Reference to the ".menu" class
const menu = document.querySelector('.menu'); 
//console.log(menu); 

// Setting up my toggleMenu function to toggle the "menu--open" class on my menu reference. 
const toggleMenu = () => { 
    // menu.classList.toggle('menu'); 
    menu.classList.toggle('menu--open'); 
  }

  // Reference to the ".menu-button" class
   const menuButton = document.querySelector('.menu-button');
   //console.log(menuButton)
  
  // Adding event listener to menuButton to callback toggleMenu on click 
  menuButton.addEventListener('click', toggleMenu);
