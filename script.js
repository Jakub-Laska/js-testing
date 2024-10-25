const container = document.querySelector('#container');

const para = document.createElement('p');
para.textContent = 'Hey I\'m red!';
para.style.color = 'red';

container.appendChild(para);

const hThree = document.createElement('h3');
hThree.textContent = 'Hey I\'m blue!';
hThree.style.color = 'blue';

container.appendChild(hThree);

const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

container.appendChild(div);

const hOne = document.createElement('h1');
hOne.textContent = 'I\m in a div';

div.appendChild(hOne);

const paraTwo = document.createElement('p');
paraTwo.textContent = 'ME TOO!';

div.appendChild(paraTwo);