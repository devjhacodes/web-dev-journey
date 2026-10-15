const todoArray = [{ name: 'wash', dueDate: '2022-12-22' }, { name: 'clotes', dueDate: '2022-12-23' }];




function renderTodoList() {
    let todoArrayHTML = '';
    todoArray.forEach(function (todoObject, index) {
        const { name, dueDate } = todoObject;
        const html = `
        <div>
        ${name} 
        </div>
        <div>${dueDate}</div>
        <button class='delete-btn'onclick="
          todoArray.splice(${index},1);
          renderTodoList()
        ">Delete</button>`;
        todoArrayHTML += html;
    });

    document.querySelector('.js-todo-list').innerHTML = todoArrayHTML;
}


function todo() {
    const inputElement = document.querySelector('.js-todo-name');

    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-date-input');

    const dueDate = dateInputElement.value;

    todoArray.push({ name, dueDate });

    inputElement.value = '';

    renderTodoList();

}