// DAY 5 CLASS ASSIGNMENT: THE PROFILE CARD MODDER
// INSTRUCTIONS: Fill in the missing DOM selectors and style rules!


// TASK 1: Access the document body element and change its background color to '#0f172a'
// Your code here...
document.body.style.backgroundColor = "#0f172a";

// TASK 2: Use getElementById to select the element with the ID "main-heading"
// Change its innerText to your own full name.
// Your selecting of the element goes here ...

// Your innerText code here...
let heading = document.getElementById("main-heading");
heading.innerText=`Atiemo Rosemond`


// TASK 3: Use querySelector to grab the element with the class ".badge"
// Change its background color to "purple" and its text color to "white"
// Your selecting of the element goes here ...

// Your styling code here...
let badge =document.querySelector(".badge");
badge.style.backgroundColor = "purple";
badge.style.color = "white";


// TASK 4: Use getElementById to select "status-text"
// Use .innerHTML to change the text to show a glowing online status badge:
// Format string: "Status: <span style='color: #10b981; font-weight: bold;'>ONLINE</span>"
// Your selecting of the element goes here ...

// Your innerHTML code here...
let statusText = document.getElementById("status-text");

statusText.innerHTML = "Status: <span style='color: #10b981; font-weight: bold;'>ONLINE</span>";



// TASK 5: Use querySelector to select the entire ".card-container"
// Use .classList.add() to apply the pre-written CSS class: "dark-theme-card"
// Your selecting of the element goes here ... 

// Your classList code here...
let card = document.querySelector(".card-container");
card.classList.add("dark-theme-card");


// TASK 6: Select the first "span" tag using getElementsByTagName
// Use .parentElement to find the card container, and change its border radius to "30px"
// Your selecting of the element goes here ...

// Your parentElement code here...;
let firstSpan = document.getElementsByTagName("span")[0];

firstSpan.parentElement.style.borderRadius = "30px";
// Target the direct parent:
firstSpan.parentElement.style.borderRadius = "30px";

// OR if you need to reach .card-container from the span:
firstSpan.parentElement.parentElement.style.borderRadius = "30px";