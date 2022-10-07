const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");


let toDos =[];

const TODOS_KEY = "todos";


function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}


function deleteToDo(e){
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo );
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value=  "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
    
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item){
//     console.log("this is turn of itme", item );
// }

const savedTodos = localStorage.getItem(TODOS_KEY);

console.log(savedTodos);

if(savedTodos !== null){
    const parsedToDOs = JSON.parse(savedTodos)
    toDos = parsedToDOs;
    parsedToDOs.forEach(paintToDo);
}



