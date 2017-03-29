var container = document.getElementById("container");
var inventory = [];
var inputField = document.getElementById("input-text");
var containerElement;
var selectedCar;
var editedDescription = "";


function populatePage (inventory) {

  // Loop over the inventory and populate the page
  for (counter = 0; counter < inventory.length; counter++) {
	
	var currentCar;
	var carString = "";
	currentCar = inventory[counter];

	carString += `<div class="row col-sm-6 col-md-4 thumbnail element-${counter} car-container" id="car-${counter}">`;
	carString += `<img src="${currentCar.image}" class="child">`;
	carString += `<div class="caption child">`;
	carString += `<h2 class="grandchild">${currentCar.make} ${currentCar.model}</h2>`;
	carString += `<h4 class="grandchild">${currentCar.year}</h4>`;
	carString += `<p class="grandchild">${currentCar.description}</p>`;
	carString += `<strong class="grandchild">$${currentCar.price}</strong>`;
	carString += `</div>`;
	container.innerHTML += carString;
	}

  
// Now that the DOM is loaded, establish all the event listeners needed
CarLot.activateEvents();
}


// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();


