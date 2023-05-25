// GetElementById()
// const title = document.getElementById('main-heading');

// console.log(title);

// GetElementByClassName() - return list of items with className

// const listItem = document.getElementsByClassName('list-items');

// console.log(listItem);

// getElementsByTagName() -  return list of items with same tagName

// const listItemByTagName = document.getElementsByTagName('li');

// console.log(listItemByTagName);

// querySelector() - selec first item which match the selector

// const container = document.querySelector('div');

// console.log(container);

// querySelectorAll - select all items which match the selector(return list of items)

// const containerAll = document.querySelector('div');

// console.log(containerAll);

// DOM MANIPULATION

// const title = document.querySelector('#main-heading');

// title.style.color = 'lightblue';

// const list = document.querySelectorAll('.list-items');

// applying style on one line for node list

// for (let i = 0; i < list.length; i++) {
//     list[i].style.color = 'brown';
// }

// Creating Elements

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// Adding elements

// ul.append(li);

// Modifying the text ;

// li.innerText = 'X-men';

// Modifyng attributes and classes

// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');

// li.classList.add('list-items');
// li.classList.remove('list-items');




// DOM Manipulation

// Traverse the DOM

// Parent node Traversal

// let ul = document.querySelector('ul');


// Child node Traversal

// const ul = document.querySelector('ul');

// console.log(ul.childNodes);

// ul.childNodes[1].style.backgroundColor = 'blue';

// Sibling node Traversal

// const ul = document.querySelector('ul');

// const div = document.querySelector('div');

// console.log(div.childNodes);


// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);
