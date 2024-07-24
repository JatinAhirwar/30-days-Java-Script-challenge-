// Activity 1:  selection and manipulating elements
// Task 1
const task1 = document.getElementById('task1');
task1.innerText = "heading changed";

// Task 2
const task2 = document.getElementsByClassName('task2')
task2[0].style.backgroundColor = "red";

// Activity 2: Creating and Appending Elements
// Task 3
var newDiv = document.createElement('div');
var divText = document.createTextNode("text in new div");
newDiv.appendChild(divText);
document.body.appendChild(newDiv);


// Task 4
var list = document.getElementsByTagName('ul')[0];
console.log(list);
var listItem = document.createElement('li');
var listContent = document.createTextNode("list item 3");
listItem.appendChild(listContent);
list.appendChild(listItem);
document.body.appendChild(list);

// Activity 3:  Removing elements
// Task 5
var removeElement= document.getElementById("removing-element");
removeElement.remove();


// Task 6
var remove_last_item = document.getElementById('remove-last');
remove_last_item.removeChild(remove_last_item.lastElementChild);

// Activity 4: modifying attributes and classes
// Task 7
var img = document.getElementById('change_src');
img.src = './img2.jpg'

// Task 8
// Select the element by its ID
var addClassInImg = document.getElementById('change_src');
// Add the 'highlight' class to the element
addClassInImg.classList.add('highlight');

//remove class
var addClassInImg = document.getElementById('change_src');
// Add the 'highlight' class to the element
addClassInImg.classList.remove('highlight');

// Activity 5: events handling 
// Task 9 
function changeText(){
    var para = document.getElementById('changeText');
    // para.innerHTML= "<strong> hello </strong>"
    para.textContent = "text changed ";
}

// Task 10
var divColor = document.getElementById('change-color');
divColor.addEventListener('mouseover', function (params) {
    divColor.style.borderColor = 'black'
} );
