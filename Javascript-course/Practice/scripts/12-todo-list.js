const todoArray = [{ name: 'wash', dueDate: '2022-12-22' }, { name: 'clotes', dueDate: '2022-12-23' }];


renderTodoList();

function renderTodoList() {
    let todoArrayHTML = '';
    todoArray.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
        <div>
        ${name} 
        </div>
        <div>${dueDate}</div>
        <button class='delete-btn js-delete-button'>Delete</button>`;
        todoArrayHTML += html;
    });

    document.querySelector('.js-todo-list').innerHTML = todoArrayHTML;

    document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoArray.splice(index, 1);
            renderTodoList();
        });
    });
}


document.querySelector('.js-add-button').addEventListener('click', () => {
    todo();
})


function todo() {
    const inputElement = document.querySelector('.js-todo-name');

    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-date-input');

    const dueDate = dateInputElement.value;

    todoArray.push({ name, dueDate });

    inputElement.value = '';

    renderTodoList();

}