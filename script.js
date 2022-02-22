function handleInputKeys (event) {
    console.log('Received the ' + event.type + " event!");
    console.log('"this" currently refers to', this.id);
    console.log('You changed the textbox!\n');
}


function handleBtnClick (event) {
    console.log('Received the ' + event.type + " event!");
    console.log('"this" currently refers to', this.id);
    console.log('You clicked the button!\n');
  }

  const NavMenu= document.getElementById('show-hide')
  function showContent() { 
    

let contentElement = document.querySelector('content')
if (contentElement.style.display === "none")
contentElement.style.display = "none";
  }  

  navMenu.addEventListener('keypress', handleInputKeys); // key presses


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


   