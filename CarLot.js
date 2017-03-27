var CarLot = (function (oldCarLot) {
	
	var inventory = [];
	var carXhrData;
	
	function executeThisCodeAfterFileLoadInventory () {
		var carXhrData = JSON.parse(this.responseText).cars;
		for (var i=0; i<carXhrData.length; i++) {
			CarLot.loadInventory(carXhrData[i]);
		}
		return carXhrData;
		console.log(carXhrData);
    }

	return {
		loadInventory: function (callback) {
			var inventoryLoader = new XMLHttpRequest();
			inventoryLoader.addEventListener("load", executeThisCodeAfterFileLoadInventory);
			inventoryLoader.addEventListener("error", executeThisCodeAfterFileFail);
			inventoryLoader.open("GET", "inventory.json");
			inventoryLoader.send();
		}
	};

	function executeThisCodeAfterFileFail () {
		console.log("failureeee!");
	}


	return oldCarLot;

})(CarLot || {});






