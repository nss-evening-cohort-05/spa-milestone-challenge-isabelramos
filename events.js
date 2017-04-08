var CarLot = (function (oldCarLot) {

	var inputField = document.getElementById("input-text");
	var containerElement;
	var selectedCar;
	var editedDescription = "";
	var blackBorder = document.getElementsByClassName("black-border");
	var dynamicDescription;
	containerElement = document.getElementsByClassName("car-container");

		oldCarLot.activateEvents = function () {
			for (var i=0; i < containerElement.length; i++) {
				containerElement[i].addEventListener("click", function (event) {
				oldCarLot.resetStyles();
					if (event.target.className === "child") {
						selectedCar = event.target.parentNode;
						dynamicDescription = selectedCar.lastChild.lastChild.previousSibling;
						selectedCar.classList.add("thicker-border");
						selectedCar.classList.add("blue-bg");
						inputField.focus();

						if (selectedCar.classList.contains("thicker-border")) {
							inputField.value = selectedCar.lastChild.lastChild.previousSibling.innerHTML;
							
							inputField.addEventListener("keyup", function (event) {
							dynamicDescription = selectedCar.lastChild.lastChild.previousSibling;

								if (event.keyCode !== 13) {
									dynamicDescription.innerHTML = inputField.value;
								} else {
									inputField.value = "";
									inputField.blur();
								}
							});
						}

					} else if (event.target.className === "grandchild") {
						selectedCar = event.target.parentNode.parentNode;
						selectedCar.classList.add("thicker-border");
						selectedCar.classList.add("blue-bg");
						inputField.focus();

						if (selectedCar.classList.contains("thicker-border")) {
							inputField.value = selectedCar.lastChild.lastChild.previousSibling.innerHTML;
							inputField.addEventListener("keyup", function (event) {
							dynamicDescription = selectedCar.lastChild.lastChild.previousSibling;

								if (event.keyCode !== 13) {
									dynamicDescription.innerHTML = inputField.value;
								} else {
									inputField.value = "";
									inputField.blur();
								}
							});
						}
					}
				});
				
			}
		}

		var dynamicDescription;

		oldCarLot.resetStyles = function () {
			for (var i=0; i < containerElement.length; i++) {
				containerElement[i].classList.remove("thicker-border");
				containerElement[i].classList.remove("blue-bg");
			}
		}

	return oldCarLot;

})(CarLot || {});
