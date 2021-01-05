// Examine the document object //
//  console.dir(document)
//  
// nsole.log(document.images);

// GETELEMENTBYID //
//const headerTitle = document.getElementById('header-title')
//
//console.log(headerTitle.textContent)
//headerTitle.innerHTML = '<h3>Hello</h3>';
//
//const header = document.getElementById('main-header');
//
//header.style.borderBottom = 'solid 3px #000' 
//// GETELEMENTSBYCLASSNAME //
// const items = document.getElementsByClassName('list-group-item');
// console.log(items[1])
// items[1].textContent = 'hello'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'yellow'
// for(let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = "#f4f4f4"
 
// GETELEMENTSBYTAGNAME // 

// const items = document.getElementsByTagName('li');
// console.log(li)
// console.log(li[1])
// items[1].textContent = 'hello'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'yellow'
// for(let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = "#f4f4f4"
// }

// QUERYSELECTOR //
// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc'
// 
// const input = document.querySelector('input');
// input.value = 'Hello World'
// 
// const submit = document.querySelector('input[type="submit"]')
// submit.value = "Send"
// 
// const item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// 
// const lastItem = docuemnt.querySelector

// QUERYSELECTORALL //
// const titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';
// titles[1].textContent = 'goodbye';

// const odd = document.querySelectorAll('li:nth-child(odd)');
// const even = document.querySelectorAll('li:nth-child(even)');

// for(let i = 0; i < odd.length; i++) {
    // even[i].style.backgroundColor = 'green';
    // odd[i].style.backgroundColor = 'red';
// }

// TRAVERSING THE DOM //
 const itemList = document.querySelector('#items')
// // parentNode
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
 // childNodes
 // console.log(itemList.childNodes)
// childNodes
// console.log(itemList.childNodes);
// itemList.childNodes[5].style.background = "blue"

// // firstChild 
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "hello"
 // nextSibling
 // console.log(itemList.nextSibling);
 // // nextElementSibling
 // console.log(itemList.nextElementSibling)
 // itemList.nextElementSibling.textContent = "hello"
 
 // previousSibling
 // console.log(itemList.previousSibling)
 // console.log(itemList.previousElementSibling)
 // itemList.previousElementSibling.textContent = "hello"

 // // createElement
// const newDiv = document.createElement('div');

// console.log(newDiv);
// newDiv.className = 'hello'
// newDiv.id = 'hello1'
// newDiv.setAttribute('title', 'hellp div')
// const newDivText = document.createTextNode('hello world')

// newDiv.appendChild(newDivText);

// const container = document.querySelector('header .container');
// const h1 = document.querySelector('header h1')

// container.insertBefore(newDiv, h1)

// newDiv.style.fontSize = "50px"

// Events //
// const button = document.getElementById('button').addEventListener('click', buttonClick);
// 
// function buttonClick(e){
//     console.log(e.offsetX);
//     console.log(e.offsetX);
//     console.log(e.altKey);
//     console.log(e.ctrlKey);
//     console.log(e.shiftKey);
// }
//   

// const button = document.getElementById('button')
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// 
// function runEvent(e){
//     console.log('EVENT TYPE:  '+e.type);
//     
//  
// 
// }
// 
const button = document.getElementById('button');
const box = document.getElementById('box');
// button.addEventListener('click', runEvent)
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);
// box.addEventListener('mousemove', runEvent);
const itemInput = document.querySelector('input[type="text"]');
const form = document.querySelector('form');
const select = document.querySelector('select');
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('focus', runEvent);
form.addEventListener('submit', runEvent);
select.addEventListener('change', runEvent);
// itemInput.addEventListener('input', runEvent);
function runEvent(e){
    e.preventDefault();
    console.log('EVENT TYPE: '+e.type);

//     console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
   // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';
   //box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40";
}