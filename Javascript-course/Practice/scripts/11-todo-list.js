const todoArray = [];



function renderTodoList(){
    let todoArrayHTML = '';
    for (let i = 0; i < todoArray.length; i++){
        const todo = todoArray[i];
        const html =`<p>${todo}</p>`;
        todoArrayHTML += html;
    }

    console.log(todoArrayHTML);

    document.querySelector('.js-todo-list').innerHTML = todoArrayHTML;
}


function todo(){
    const inputElement = document.querySelector('.js-todo-name');

    const todoName = inputElement.value;

    todoArray.push(todoName);

    inputElement.value = '';

    renderTodoList();

}