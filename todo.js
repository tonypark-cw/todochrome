const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = [];

function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter((todo) => {
        return todo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDo();
}

function loadToDo(){
    const lodedToDos = localStorage.getItem(TODOS_LS);
    if(lodedToDos !== null){
        const parsedTD = JSON.parse(lodedToDos);
        parsedTD.forEach((td) => paintTodo(td.text));
    }
}

function saveToDo(){
    const data = JSON.stringify(toDos);
    localStorage.setItem(TODOS_LS, data);
}

function paintTodo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.addEventListener("click", deleteTodo);
    delBtn.innerHTML = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    const newId = toDos.length + 1;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.append(li);
    const toDoObj = {
        text : text,
        id:newId,
    }
    toDos.push(toDoObj);
    saveToDo();
}

function handleTDSubmit(event){
    event.preventDefault();
    const curval = toDoInput.value;
    paintTodo(curval);
    toDoInput.value = "";
}

function init(){
    loadToDo();
    toDoForm.addEventListener("submit", handleTDSubmit)
}   
init();