var containerElement;
var selectedCar;


var CarLot = (function (oldCarLot) {

	oldCarLot.activateEvents = function () {

		containerElement = document.getElementsByClassName("car-container");

		for (var i=0; i < containerElement.length; i++) {
			containerElement[i].addEventListener("click", function(event){
				if (event.target.className === "child") {
					selectedCar = event.target.parentNode;
					selectedCar.classList.add("thicker-border");
					inputField.focus();
				} else if (event.target.className === "grandchild") {
					selectedCar = event.target.parentNode.parentNode;
					selectedCar.classList.add("thicker-border");
					inputField.focus();
				}
			});
		}
	}

	return oldCarLot;

})(CarLot || {});
