var CarLot = (function (oldCarLot) {

	var inputField = document.getElementById("input-text");
	var containerElement;
	var selectedCar;
	var editedDescription = "";
	var blackBorder = document.getElementsByClassName("black-border");
	containerElement = document.getElementsByClassName("car-container");

	oldCarLot.activateEvents = function () {

			for (var i=0; i < containerElement.length; i++) {
				containerElement[i].addEventListener("click", function (event) {
					if (event.target.className === "child") {
						selectedCar = event.target.parentNode;
						selectedCar.classList.add("thicker-border");
						selectedCar.classList.add("blue-bg");
						inputField.focus();
					} else if (event.target.className === "grandchild") {
						selectedCar = event.target.parentNode.parentNode;
						selectedCar.classList.add("thicker-border");
						selectedCar.classList.add("blue-bg");
						inputField.focus();
					}
				});
			}


		inputField.addEventListener("keypress", function(event){
			var dynamicDescription = selectedCar.lastChild.lastChild.previousSibling;

			if (event.keyCode !== 13) {
				dynamicDescription.innerHTML = "";
				editedDescription += event.key;
				dynamicDescription.innerHTML += editedDescription;
			} else {
				inputField.value = "";
			}
		});
	};

	return oldCarLot;

})(CarLot || {});
