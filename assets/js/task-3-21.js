let was_pressed = 0;
var code = "";
var is_shown = 0;

var morse = {
    ".-" : "A",
    "-.." : "B",
    "-.-." : "C",
    "-.." : "D",
    "." : "E",
    "..-." : "F",
    "--." : "G",
    "...." : "H",
    ".." : "I",
    ".---" : "J",
    "-.-" : "K",
    ".-.." : "L",
    "--" : "M",
    "-." : "N",
    "---" : "O",
    ".--." : "P",
    "--.-" : "Q",
    ".-." : "R",
    "..." : "S",
    "-" : "T",
    "..-" : "U",
    "...-" : "V",
    ".--" : "W",
    "-..-" : "X",
    "-.--" : "Y",
    "--.." : "Z",
    ".----" : "1",
    "..---" : "2",
    "...--" : "3",
    "....." : "4",
    "....." : "5",
    "-...." : "6",
    "--..." : "7",
    "---.." : "8",
    "----." : "9",
    "-----" : "0"
}


var start_time;
var end_time;

document.addEventListener("click", function(e)
{
    if (e.target && e.target.id == 'go-morse-code')
    {
        was_pressed = 1;
        console.log("lmfao");
        main = document.getElementById('main-section');
        main.innerHTML =`<main class = 'main-div'>
        <p> Click on the area below to generate Morse Code</p>
        <textarea name="message" id = 'morseinput' class='add-input-desc' rows="20" cols="150" readonly></textarea>
        <input  value="Next letter" id='next-letter' class="submit-button">
        <p>Your message</p>
        <textarea name="message" id = 'morse-output' class='add-input-desc' rows="5" cols="150" readonly></textarea>
        <input  value="Delete last character" id='del-char' class="submit-button">
        <input  value="Empty the message" id='empty' class="submit-button">
        </main>`;
    }
});

document.addEventListener("mousedown", function(e)
{
    if(e.target && e.target.id == "morseinput")
    {
        was_pressed = 1;
        start_time = new Date().getTime();
    }
});

document.addEventListener("click", function(e)
{
    if(e.target && e.target.id == "del-char")
    {
        let str = document.getElementById("morse-output").value;
        str = str.substr(0, str.length - 1);
        document.getElementById("morse-output").value = str;
    }
});

document.addEventListener("click", function(e)
{
    if(e.target && e.target.id == "empty")
    {
        is_shown = 0;
        code = "";
        document.getElementById("morseinput").value = "";
        document.getElementById("morse-output").value = "";
    }
});


document.addEventListener("click", function(e)
{
    if(e.target && e.target.id == "next-letter")
    {
        is_shown = 0;
        code = "";
        document.getElementById("morseinput").value = code;
    }
});


document.addEventListener("mouseup", function(e)
{
    if(e.target && was_pressed == 1)
    {
        was_pressed = 0;
        end_time = new Date().getTime();
        console.log(end_time - start_time);
        if (end_time - start_time < 1000)
            code += ".";
        else if (end_time - start_time < 3000)
            code += "-";
        document.getElementById("morseinput").value = code;
        let st = document.getElementById("morse-output").value;
        if (is_shown == 0 && (code in morse))
        {
            is_shown = 1;
            st += morse[code];
        }
        else if (is_shown == 1 && (code in morse))
        {
            //console.log('kekkk');
            st = st.substr(0, st.length - 1) + morse[code];
        }
        document.getElementById("morse-output").value = st;
        
    }
})