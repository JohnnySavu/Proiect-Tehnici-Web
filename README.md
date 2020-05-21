# Proiect-Tehnici-Web

Cerinte:

Acceptanta:
[x] Single Page Application
[x] Codul pe Github
[x] Fara framework-uri

Frontend:

HTML si CSS
[x] Fisiere separate pentru HTML si CSS (0.5 puncte) (index.html, css/style.css)

4 taguri semantice : 
a) header
b) nav 
c) section
d) footer
e) main

layout - css grid - are 3 coloane

responsive :


@media only screen and (min-width: 769px) and (max-width: 1280px) {
    /* For tablets: */
    .main-section{
        color:#0f0f3d;
        height: 100%;
        display:grid;
        grid-template-columns: 80px 1fr 80px;
        grid-template-areas:". main-div .";
    }
    .main-div-search{
        grid-area:main-div;
        text-align:center;
        margin-top: 50px;
        margin-bottom:50px;
        background-color: rgb(241, 250, 238, 0.6);   
        display:grid;
        grid-template-columns: 1fr 1fr;
    }
    .book{
        margin:5px;
        display:grid;
        grid-template-rows: fit-content(35%)  1fr 60px;
        height:500px;
        background-color:rgb(241, 250, 238, 0.8);
    }


}

@media only screen and (max-width: 768px) {
    /* For mobile phones: */
    .add-poza-titlu{
        display:grid;
        grid-template-columns: 1fr;
        grid-template-rows:1fr 1fr;
    }
    .book{
        margin:5px;
        display:grid;
        grid-template-rows: fit-content(35%)  1fr 60px;
        height:600px;
        background-color:rgb(241, 250, 238, 0.8);
    }
    .main-section{
        color:#0f0f3d;
        height: 100%;
        display:grid;
        grid-template-columns: 50px 1fr 50px;
        grid-template-areas:". main-div .";
    }
    .main-div-search{
        grid-area:main-div;
        text-align:center;
        margin-top: 50px;
        margin-bottom:50px;
        background-color: rgb(241, 250, 238, 0.6);   
        display:grid;
        grid-template-columns: 1fr;
    }
}

manipulare DOM:
create

let div_id = document.createElement("div");

delete:

mainSection.removeChild(mainSection.firstChild);

edit:

document.getElementById("display-book").src = book.img;

evenimente : 

document.addEventListener('click',function(e)

AJAX:

function postbook(postObject)
{

    fetch('http://localhost:3000/books', {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(postObject)
    }).then(function () {
        localStorage.setItem("onSearch", "false");
        goSearchbooks();
    });

}

app.delete("/books/:id", (req, res) => {
    const dogsList = readJSONFile();
    const id = req.params.id;
    const newDogsList = dogsList.filter((dog) => dog.id != id)
  
    if (dogsList.length !== newDogsList.length) {
      res.status(200).send(`Dog ${id} was removed`);
      writeJSONFile(newDogsList);
    } else {
      res.status(404).send(`Dog ${id} was not found`);
    }
  });
  
fetch('http://localhost:3000/books')

fetch(`http://localhost:3000/books/${book.id}`, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },

local storage:

localStorage['user'] 



