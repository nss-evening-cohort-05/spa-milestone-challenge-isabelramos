var CarLot = (function (oldCarLot) {

	function editDescription () {
		inputField.addEventListener("keypress", function (event){
			var selectedCar = CarLot.getSelectedCar();
			var dynamicDescription = selectedCar.lastChild.lastChild.previousSibling;

			if (event.keyCode !== 13) {
				dynamicDescription.innerHTML = "";
				editedDescription += event.key;
				dynamicDescription.innerHTML += editedDescription;
			} else {
				inputField.value = "";
			}
		});
	}

	oldCarLot.activateEvents = function () {
		editDescription();

	};

	return oldCarLot;

})(CarLot || {});

