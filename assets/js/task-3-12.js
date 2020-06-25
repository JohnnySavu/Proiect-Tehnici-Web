var event_log = [];
var is_pressed = 0;

document.getElementById("log-display-btn").addEventListener("click", function(){
    
    console.log(event_log);
    if(is_pressed == 0)
    {
        console.log("");
        is_pressed = 1;
        let interior = document.getElementById("log-display");
        for (let i = 0; i < event_log.length; i++)
        {
            interior.innerHTML += event_log[i] + "<br>";
        }

    }
    else
    {
        is_pressed = 0;
        let interior = document.getElementById("log-display");
        interior.innerHTML = "";
    }
});


document.addEventListener("keydown",function(logkey){
    event_log.push(getTime() + " keydown, tasta " + logkey.key);
    if (is_pressed == 1)
    {
        document.getElementById("log-display");
        interior.innerHTML += event_log[event_log.length - 1] + "<br>";
    }
    //console.log(getTime() + " keydown, tasta " + logkey.key);
});

document.addEventListener("dblclick",function(Mouse)
{
    event_log.push(getTime() + " dbclick, coord " + Mouse.clientX + ", " + Mouse.clientY);
    if (is_pressed == 1)
    {
        interior = document.getElementById("log-display");
        interior.innerHTML += event_log[event_log.length - 1] + "<br>";
    }
    //console.log(getTime() + " dbclick, coord " + Mouse.clientX + ", " + Mouse.clientY);
});

document.addEventListener("click", function(Mouse){
    event_log.push(getTime() + " click, coord " + Mouse.clientX + ", " + Mouse.clientY);
    if (is_pressed == 1)
    {
        document.getElementById("log-display");
        interior.innerHTML += event_log[event_log.length - 1] + "<br>";
    }
    //console.log(getTime() + " click, coord " + Mouse.clientX + ", " + Mouse.clientY);
});

document.addEventListener("copy", function (Copy){
    event_log.push(getTime() + " s-au copiat elemente de pe pagina");
    if (is_pressed == 1)
    {
        document.getElementById("log-display");
        interior.innerHTML += event_log[event_log.length - 1] + "<br>";
    }
})



function getTime(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDay();
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) hours = '0' + hours;
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    
    return year + "/" + month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;




}