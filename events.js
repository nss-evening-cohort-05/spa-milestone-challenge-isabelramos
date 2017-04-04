var CarLot = (function (oldCarLot) {

	var inputField = document.getElementById("input-text");
	var containerElement;
	var selectedCar;
	var editedDescription = "";
	var blackBorder = document.getElementsByClassName("black-border");
	containerElement = document.getElementsByClassName("car-container");

		oldCarLot.addStyles = function () {
			for (var i=0; i < containerElement.length; i++) {
				containerElement[i].addEventListener("click", function (event) {
					if (event.target.className === "child") {
						selectedCar = event.target.parentNode;
						selectedCar.classList.toggle("thicker-border");
						selectedCar.classList.toggle("blue-bg");
						inputField.focus();
					} else if (event.target.className === "grandchild") {
						selectedCar = event.target.parentNode.parentNode;
						selectedCar.classList.toggle("thicker-border");
						selectedCar.classList.toggle("blue-bg");
						inputField.focus();
					}
				});
			}
		}


		oldCarLot.resetStyles = function () {
			carElement = document.getElementsByClassName("car-container");

			// containerElement.classList.remove("thicker-border");
			for (var i=0; i < carElement.length; i++) {
				console.log(carElement);
				carElement[i].classList.remove("thicker-border");
				// containerElement[i].addEventListener("click", function (event) {
				// 	console.log(containerElement.classList.contains("thicker-border"));
				// 	if (containerElement.classList.includes("thicker-border")) {
				// 		containerElement.classList.remove("thicker-border");
				// 		containerElement.classList.remove("blue-bg");
				// 	}
				// });
			}
		}

	oldCarLot.getSelectedCar = function () {
		return selectedCar;
	}

	return oldCarLot;

})(CarLot || {});
