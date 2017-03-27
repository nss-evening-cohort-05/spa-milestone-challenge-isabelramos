var CarLot = (function (oldCarLot) {
	
	var inventory = [];

	return {
		loadInventory: function (callback) {
			var inventoryLoader = new XMLHttpRequest();

			inventoryLoader.addEventListener("load", function () {
				var carXhrData = JSON.parse(this.responseText);
				inventory = carXhrData.cars;
				populatePage(inventory);
			});

			inventoryLoader.addEventListener("error", executeThisCodeAfterFileFail);
			inventoryLoader.open("GET", "inventory.json");
			inventoryLoader.send();

			oldCarLot.getXhr = function () {
				return inventory;
				console.log(inventory);
			}
		}
	};


	function executeThisCodeAfterFileFail () {
		console.log("failureeee!");
	}


	return oldCarLot;

})(CarLot || {});

