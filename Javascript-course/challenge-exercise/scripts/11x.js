const todoArray = JSON.parse(localStorage.getItem('todoArray'))|| [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList(){
    let todoArrayHTML = '';
    for (let i = 0; i < todoArray.length; i++){
        const todoObject = todoArray[i];
        const {name,dueDate} = todoObject;

        const html =`
        <div>
        ${name} 
        </div>
        <div>${dueDate}</div>
        <button class='delete-btn'onclick="
          todoArray.splice(${i},1);
          renderTodoList();
          saveToStorage();
        ">Delete</button>`;
        todoArrayHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoArrayHTML;

}


function todo(){
    const inputElement = document.querySelector('.js-todo-name');

    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-date-input');

    const dueDate = dateInputElement.value;

    todoArray.push({name, dueDate });

    inputElement.value = '';

    renderTodoList();

    saveToStorage();

}

function saveToStorage() {
  localStorage.setItem('todoArray', JSON.stringify(todoArray));
}