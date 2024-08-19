// Accessing Element using getElementById() Selector
let elementWithId = document.getElementById("first-div");
// Check if we were able to get the right element
console.log("Element accessed using ID:", elementWithId);

// Accessing Elements using getElementsbyClassName() Slector
let elementsWithClass = document.getElementsByClassName("sample-div");
console.log("Elements accessed using class:", elementsWithClass);
// Modify elements .textContent property using index
elementsWithClass[1].textContent = "Div 2"

// Accessing Elements using getElementsByTagName() Selector
let listItems = document.getElementsByTagName("li");
console.log("Elements accessed using tag name:", listItems);
// Modify element using .backgroundColor property using index
listItems[1].style.backgroundColor = 'lightgreen';

// Accessing Elements using .querySelector() Selector
// We can select ID's, classnames, tagnames, but it will return the first value only
let orderedListItem = document.querySelector(".ordered-list");
console.log("Ordered List Items:", orderedListItem);
// Modify element using .backgroundColor property
orderedListItem.style.backgroundColor = 'crimson';

// Accessing Elements using .querySelectorAll() Selector
let heading3 = document.querySelectorAll("h3");
console.log("Heading Tags:", heading3);
// Modify elements using .backgroundColor property with index
heading3[0].style.backgroundColor = 'aqua';

// Update Element Attributes
let dayNightIcon = document.getElementById("day-night-icon");
dayNightIcon.setAttribute(
    "src",
    "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
);

// Appending New Elements
let parentElement = document.getElementById("parent-element");
let createdElement = document.createElement("div");
createdElement.textContent = "Child Element";
parentElement.appendChild(createdElement);

// Remove Elements
let elementToBeRemoved = document.getElementById('element-to-be-removed');
elementToBeRemoved.remove();

// Adding Event Listeners and Manipulating Element Styles
let darkModeBtn = document.getElementById("dark-mode-btn");
darkModeBtn.addEventListener("click", function(){
    let pageContainer = document.getElementById("page-container");
    pageContainer.style.backgroundColor = "black";
    pageContainer.style.color = "white";
    let pageModeText = document.getElementById('page-mode-text');
    pageModeText.textContent = "Dark Mode";
});
