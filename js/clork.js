const clork = document.querySelector("h2#clork");

function getClork(){
    const date = new Date();    
    const hours = date.getHours()>12 ? date.getHours()-12 : date.getHours()
    const minutes = String(date.getMinutes()).padStart(2, "0");
    // const am_pm = date.getHours() >= 12 ? "PM" : "AM"
    // const seconds = String(date.getSeconds()).padStart(2, "0");


    clork.innerText = `${hours}:${minutes}`;
}

getClork();
setInterval(getClork, 1000);