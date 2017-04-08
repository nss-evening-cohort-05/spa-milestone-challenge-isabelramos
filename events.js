var CarLot = (function (oldCarLot) {

	var inputField = document.getElementById("input-text");
	var containerElement;
	var selectedCar;
	var editedDescription = "";
	var blackBorder = document.getElementsByClassName("black-border");
	var dynamicDescription;
	var inputDescription;
	containerElement = document.getElementsByClassName("car-container");

		oldCarLot.addStyles = function () {
			for (var i=0; i < containerElement.length; i++) {
				containerElement[i].addEventListener("click", function (event) {
					if (event.target.className === "child") {
						selectedCar = event.target.parentNode;
						dynamicDescription = selectedCar.lastChild.lastChild.previousSibling;
						inputDescription = dynamicDescription.innerText;
						selectedCar.classList.add("thicker-border");
						selectedCar.classList.add("blue-bg");
						inputField.focus();
						inputField.value = inputDescription;
					} else if (event.target.className === "grandchild") {
						selectedCar = event.target.parentNode.parentNode;
						selectedCar.classList.add("thicker-border");
						selectedCar.classList.add("blue-bg");
						inputField.focus();
						inputField.value = inputDescription;
					}
				});
				oldCarLot.resetStyles();

			}
		}


		oldCarLot.resetStyles = function () {
			// for (var i=0; i < containerElement.length; i++) {
			// 	containerElement[i].classList.remove("thicker-border");
			// 	containerElement[i].addEventListener("click", function (event) {
			// 		if (containerElement.classList.contains("thicker-border")) {
			// 			containerElement.classList.remove("thicker-border");
			// 			containerElement.classList.remove("blue-bg");
			// 		}
			// 	});
			// }
		}

	oldCarLot.getSelectedCar = function () {
		return selectedCar;
	}

	return oldCarLot;

})(CarLot || {});
