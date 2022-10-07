const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');
const toDoContainer = document. getElementById("todo-container");



const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(e){
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);   
    const username = loginInput.value; 
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    
}

function paintGreetings(username){ 
    const time = new Date();
    if(time.getHours() >= 18){
        greeting.innerText = `Good evening, ${username}`;
    } else if(time.getHours() <=12){
        greeting.innerText = `Good morning, ${username}`;
    } else {
        greeting.innerText = `Good afternoon, ${username}`;
    }
    greeting.classList.remove(HIDDEN_CLASSNAME);
    toDoContainer.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
    toDoContainer.classList.add(HIDDEN_CLASSNAME);    
} else {
    //greeting
    paintGreetings(savedUsername);    
    
}