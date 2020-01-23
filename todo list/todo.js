let todoItems = [];

function addToDO(text) {
    const Todo = {
        text,
        checked: false,
        id: Date.now(),
    };
    todoItems.push(Todo);
    console.log(todoItems);
    const list = document.querySelector('.js-todo-list');
    list.addEventListener('click', event => {
        if (event.target.classList.contains('js-tick')) {
            const itemKey = event.target.parentElement.dataset.key;
            toggleDone(itemKey);
        }
        if (event.target.classList.contains('js-delete-todo')) {
            const itemKey = event.target.parentElement.dataset.key;
            deleteTodo(itemKey);
        }
    });
    list.insertAdjacentHTML('beforeend',
        '<li class="todo-item" data-key=' + Todo.id + '> ' +
        '<input id = ' + Todo.id + ' type="checkbox"/>' +
        '<label for=' + Todo.id + ' class="tick js-tick"></label>' +
        '<span>' + Todo.text + '</span>' +
        '<button class="delete-todo js-delete-todo">' +
        '<svg><use href="#delete-icon"></use></svg>' +
        '</button>' +
        '</li>'
    );
}
function toggleDone(key) {
    const index = todoItems.findIndex(item => item.id === Number(key));
    todoItems[index].checked = !todoItems[index].checked;

    const item = document.querySelector(`[data-key='${key}']`);
    if (todoItems[index].checked) {
        item.classList.add('done');
        console.log("is done");
    } else {
        item.classList.remove('done');
        console.log("remove done");
    }
}
function deleteTodo(key) {
    todoItems = todoItems.filter(item => item.id !== Number(key));
    const item = document.querySelector(`[data-key='${key}']`);
    item.remove();
}
function initiate() {
    const form = document.querySelector('.js-form');

    form.addEventListener('submit', event => {
        event.preventDefault();
        const input = document.querySelector('.js-todo-input');
        const text = input.value.trim();
        if (text !== '') {
            addToDO(text);
            input.value = '';
            input.focus();
        }
    });
}
addEventListener('load', initiate);