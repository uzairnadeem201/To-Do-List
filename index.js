let todoList = [];
function addToDo()
{
    let inputElement = document.querySelector('#todoInput');
    let dateElement = document.querySelector('#todoDate');
    let toDoItem = inputElement.value;
    let toDoDate = dateElement.value;
    todoList.push({item:toDoItem, dueDate: toDoDate});
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
}
function displayItems()
{
    let containerElement = document.querySelector('.todoContainer');
    
    let newHtml = '';
    for( let x = 0; x < todoList.length; x++)
    {  let item = todoList[x].item;
        let dueDate = todoList[x].dueDate;
        newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button id="btnDelete" onclick="todoList.splice(${x},1);
        displayItems();"> Delete </button>
        `;
    }
    containerElement.innerHTML = newHtml;

}