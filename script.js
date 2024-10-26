const input = document.querySelector('input');
const btn = document.querySelector('button');
const list = document.querySelector('ul');
input.focus();

btn.addEventListener('click', () => {
    let inputValue = input.value;
    input.value = '';
    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');

    listItem.appendChild(span);
    listItem.appendChild(deleteBtn);

    span.textContent = inputValue;
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });
        
    list.appendChild(listItem);

    input.focus();
});