// This file is basically a script file for the dom.html file which handles what should happen on a particular event and how the DOM should be manipulated 
// We could have done this within html file but it is a good practice to keep the script in a separate file and thats why we study DOM and there's more to it

//alert("connected");
// nobody likes this in a professional environement but for learning purposes it is fine

// EXAMPLE-1 : so basically i want to change the text but only on click of a button and that too that particular button so first of all i have to grab that element and then will have to see how we can implement this part 

// so what do we do first? grab the para or the event ? we will grab the event (the button) first because at the grabbing of the event  want to do some task

// we can use document.querySelector() and then inside it define the class or id of the element we want to grab like .className or #idName
// or document.querySelectorAll() to grab all the elements with that class or id or lets say if i write button inside it then it will grab all the button elements
// here as we have defined ids so we would use document.getElementById()

//let hold = document.getElementById("changeTextButton");
//console.log(hold);

// now we have to add an event listener to this button so that when we click it
// not giving any function name here because it won't be used anywhere else
document.getElementById("changeTextButton").addEventListener("click",function () {
    let para = document.getElementById("myParagraph");
    // console.log(para);
    para.textContent = "The paragraph is changed!";
});


// EXAMPLE-2 : aading highlight to the first item in list

document.getElementById("highlightFirstCity").addEventListener("click",function () {
    let cities = document.getElementById("citiesList");
    // console.log(cities);
    // console.log(cities.firstElementChild.classList);
    cities.firstElementChild.classList.add("highlight");
});


// EXAMPLE-3 : change the coffee order from latte to espresso

document.getElementById("changeOrder").addEventListener("click",function () {
    let coffeeOrder = document.getElementById("coffeeType");
    console.log(coffeeOrder);
    coffeeOrder.textContent = "Espresso";
    coffeeOrder.style.color = "brown";
    coffeeOrder.style.fontSize = "20px";
    // adding the css through style property
});


// EXAMPLE-4 : adding a new item to the list on every click of the button 

document.getElementById("addNewItem").addEventListener("click",function () {
    let newItem = document.createElement("li"); // create a new list item
    newItem.textContent = "Eggs";
    document.getElementById("shoppingList").appendChild(newItem); // append the new item to the shopping list
    // every time when i will click on the button then eggs will be added again and again to the list 
    // appendChild() method accepts node as an argument which shows that in dom the element is treated as a node and appends it to the end of the list
    // if we want to add it at the beginning then we can use insertBefore() method
});


// EXAMPLE -5: removing an element from the list (the last item)

document.getElementById("removeLastTask").addEventListener("click",function () {
    let task = document.getElementById("taskList");
    // task.remove(); //removes the whole list
    task.lastElementChild.remove(); // removes the last item in the list on every click of the button
});


// EXAMPLE -6: event handling in dom

document.getElementById("clickMeButton").addEventListener("mouseover", function () {
    alert("Button hovered!");
});


// EXAMPLE -7: event delegation - i want to select a tea on click but all list items have a common class and it will select all teas then which we do not want and we can't change the html also , so lets see what we can do

// As here we will click on any tea so that's why our event listener is added on the parent list element
document.getElementById("teaList").addEventListener("click", function (event) {
    //console.log(event); // this will give the event object which contains information, methods and properties about the event that occurred 
    //console.log(event.target); // this will give the element that was clicked in the console

    if(event.target && event.target.matches(".teaItem")) {
        alert("You selected: " + event.target.textContent);
    }
    // matches() is just an extra check to ensure that the clicked element has the class "teaItem"
    // event can be written as "e" also
});


// EXAMPLE -8: form handling

document.getElementById("feedbackForm").addEventListener("submit", function (event) {
  event.preventDefault(); // prevents the default form submission behavior because a form's normal behaviour is to submit data to a server and refresh the page and we want to do something else with the data

  let feedback = document.getElementById("feedbackInput").value;
  // ".value" gives us the value we entered in the input field without it we get only input element - HTML object
  console.log(feedback.value);
  // Here we can do something with the feedback like sending it to a server or displaying it on the page
  let feedbackOutput = document.getElementById("feedbackDisplay");
  feedbackOutput.textContent = `Feedback received: ${feedback}`;
  feedbackOutput.style.backgroundColor = "green";
  feedbackOutput.style.fontSize = "18px";


  // explore how we can grab the label element when both the input id and label for have same names and change its text content to "Thank you for your feedback!" after the form is submitted
  let feedbackLabel = document.querySelector("label[for='feedbackInput']");
  // here for is treated as a normal HTML attribute for the selector and queryselector works by matching the attribute value
  feedbackLabel.textContent = "Thank you for your feedback!";

  // hiding the input field after submission
  document.getElementById("feedbackInput").style.display = "none";

  // hiding the submit button after submission
  document.getElementById("submitFeedback").style.display = "none";
});



// EXAMPLE -9: DOM content load 
// there are some common activities that we want to do when dom is loaded maybe querying the database or loading up cdn files

// here we are directly using event listener on the whole document
// so we can use the DOMContentLoaded event to ensure that the DOM is fully loaded before we run our script
// this event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("domStatus").textContent = "DOM fully loaded and parsed";
    // Here we can do any initial setup or data fetching that we want to do when the DOM is ready
    // For example, we can fetch some data from an API and display it on the page
});



// EXAMPLE -10: change text color and also toggle the highlight

document.getElementById("toggleHighlight").addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
});
// instead of add and then comparing and matching the classname we can use toggle() method which will add the class if it is not present and remove it if it is already present - used in light and dark mode behavior