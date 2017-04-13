### Project Description:

Exercise Criteria:

Create an application where the description and availability of each car in the inventory can be updated while using the Bootstrap grid to lay out the HTML structure.

1. Create an array of cars in an `inventory.json` file. Put at least three cars in the array.
1. When the page first loads, use an XHR to load the contents of the JSON file, and parse them into a native JavaScript object.
1. Loop over the array of cars and build up an HTML string to build a card for each car. Also, use Bootstrap to create rows. Each row should contain 3 columns. Make sure to have a parent element with a class of `container`.
1. Put a standard Bootstrap navbar element at the top of your page.
1. Put a text input field in the navigation bar.
1. Make sure you display all properties of the car in the DOM.
1. Make sure that each car card element has a CSS class which adds a black border around it.
1. When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.
1. Also, on click of the car element, clear the value of the text input in the navbar, and put the cursor in the text input.
1. When one starts typing into the navbar's text input, the **description**, and only that property, of the currently selected car should be bound to what you are typing in and match it exactly.

### Technologies used:

HTML, CSS (Bootstrap), Javascript, JSON.

### How to run this project (Node must be installed on your machine):

```
git clone https://github.com/nss-evening-cohort-05/spa-milestone-challenge-isabelramos.git
cd spa-milestone-challenge-isabelramos
npm install http-server -g
http-server -p 8080
This will show in your browser at: http://localhost:8080
```

### Contributors:
[Isabel Ramos](https://github.com/isabelramos)