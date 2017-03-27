var inputField = document.getElementById("input-text");
var container = document.getElementById("car-container");
var inventory = [];
var editedDescription = "";

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();
console.log(CarLot.loadInventory());

function populatePage (inventory) {
 //  // Loop over the inventory and populate the page
 //  for (counter = 0; counter < inventory.length; counter++) {
	
	// var currentCar;
	// var carString = "";
	// currentCar = cars[counter];

	// carString += `<div class="row col-sm-6 col-md-4 thumbnail car-container" id="car-${counter}">`;
	// carString += `<img src="${currentCar.image}" class="child">`;
	// carString += `<div class="caption child">`;
	// carString += `<h2 class="grandchild">${currentCar.name}</h2>`;
	// carString += `<h4 class="grandchild">${currentCar.title}</h4>`;
	// carString += `<p class="grandchild">${currentCar.bio}</p>`;
	// carString += `<strong class="grandchild">${currentCar.lifespan.birth}</strong>`;
	// carString += `</div>`;
	// container.innerHTML += carString;
	// }
}
  
  // Now that the DOM is loaded, establish all the event listeners needed
//   CarLot.activateEvents();
// }


