document.addEventListener("click", function(){
    setTimeout(() => {
    
    let words = document.body.innerText;
    words.replace(".", " ");
    words.replace("?", " ");
    words.replace("!", " ");
    words.replace(",", " ");
    words.replace(";", " ");
    words = words.split(" ").length;
    document.getElementById("no-words").innerHTML = "Total number of words in body are: " + words;

    }, 100);
    
    //console.log(words); 
});



