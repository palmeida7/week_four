//using dom_exercises.html

const heading = document.getElementById('heading');
const listItems = document.getElementsByTagName('li');
const listItemsByClass = document.querySelectorAll('.nav-link');

const headingText = heading.innerText;
const listItemsLength = listItemsByClass.length

//Now updating the heading variable
//may call as: const heading = document.querySelector.('#heading');
heading.innerText = 'Links';

//Make other edits
heading.style.color = "rgb(255,0,0)";

//Create some new elements. This will create a new list
const headerElement = document.createElement('h1');
const listElement = document.createElement('ul');

const listItemOne = document.createElement('li');
const listItemTwo = document.createElement('li');
const listItemThree = document.createElement('li');

//select root div to place newly created list inside it
const root = document.querySelector('#root');
root.append(headerElement); //adds the new h1 element
root.append(listElement); //adds the new unordered list
listElement.append(listItemOne, listItemTwo, listItemThree); //adds listed items to ul

//now add text for each listed item
headerElement.innerText = "Navigation"; //list title of ul
listItemOne.innerText = "Home"; //first ul item bullet point
listItemTwo.innerText = "Store";
listItemThree.innerText = "Contact";

//add attributes such as id or classname
headerElement.id = "heading";
listElement.id = "nav-list";

//use forEach to iterate through a list and make changes
listElement.childNodes.forEach(item => { //goes through all bullet points of a list
    item.className = "nav-link" //makes changes at each one
});

//small exercises
const headingFood = document.getElementById("heading-food");
headingFood.innerText = "Toppings"; //changed the h1 text

const burgerItem = document.getElementById("burger");
burgerItem.className = "list-item"; //added a class name to a list item

const listItemFood = document.createElement('li'); //creating new li for Food list
listItemFood.innerText = "Ketchup";
listItemFood.id = "ketchup";
listItemFood.className = "list-item";
list.append(listItemFood); //adding the li and its attributes to the ul intended

