const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toDoList = document.querySelector('.toDoList');

btn.addEventListener('click', () => {
    const item = document.createElement('li');
    item.innerText = inputField.value;
    item.classList.add('toDoAdded');
    toDoList.appendChild(item);
    inputField.value = '';

    item.addEventListener('click', () => {
        item.classList.add('toDoCompleted');
    })

    item.addEventListener('dblclick', () => {
        toDoList.removeChild(item);
    })
})