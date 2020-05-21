document.getElementById("home-btn").addEventListener("click", goHome);
document.getElementById("log-in-btn").addEventListener("click", goLogIn);
document.getElementById("search-books-btn").addEventListener("click", goSearchbooks);

localStorage.setItem("onSearch", "false");
btn = document.getElementById("modify-list-btn");
localStorage.setItem("admin", "false");
localStorage.setItem("loged","false");



document.addEventListener('click',function(e)
{
    if(e.target && e.target.id == 'modify-list-btn')
    {
        goModifiy();
    }
});

//aici modific lista
function modifyItem(book)
{
    localStorage.setItem("onSearch", "false");
    main = document.getElementById('main-section');
    main.innerHTML =`<main class = 'main-div'>
    <div class='add-book'>
        <div class = 'add-poza-titlu'>
            <div class ='desc-produs'>
                <img class = 'img' id ='display-book' alt='book' src='./img/add-book.jpg'>
            </div>
            <form>
                <br>
                <label for="book name">book name</label><br>
                <input class='add-input' type="text" id="book_name" name="book name" placeholder="book name"><br>
    
                <label for="Price">Price</label><br>
                <input class='add-input' type="text" id="price" name="Price" placeholder="Price"><br>
                <label for="Image">Image link</label><br>
                <input class='add-input' type="text" id="Image" name="Image" placeholder="Image link"><br>
                
            </form>
        </div>

        <div class = 'descriere'>
           <h3>
               Add description:
           </h3>
           <form>
            <textarea name="message" id = 'book-desc' class='add-input-desc' rows="20" cols="150"></textarea>
           </form>
           <br>

        </div>

        <button type='button' class='add-book-btn' id = 'modify-book-btn'>
            Modify the book!
        </button>
        
        <button type='button' class='add-book-btn' id = 'delete-book-btn'>
            Delete the book!
        </button>
    </div>
</main>
    `;
    
    document.getElementById("display-book").src = book.img;
    document.getElementById("book_name").value = book.name;
    document.getElementById("price").value = book.price;
    document.getElementById("Image").value = book.img;
    document.getElementById("book-desc").value = book.description;
    //aici modific elementul
    document.getElementById('modify-book-btn').addEventListener('click',function()
    {
        const Obj = 
        {
            name: document.getElementById("book_name").value,
            price: document.getElementById("price").value,
            description:document.getElementById("book-desc").value,
            img:document.getElementById("Image").value,
            id:book.id
        }
        fetch(`http://localhost:3000/books/${book.id}`, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(Obj)
        }).then(function () {
        goModifiy();
    });


    });
    //aici sterg elementul
    document.getElementById("delete-book-btn").addEventListener('click',function()
    {
        fetch(`http://localhost:3000/books/${book.id}`, {
        method: 'DELETE',
    }).then(function () {
        //console.log(response);
        goModifiy();
    }); 
    });

}



function goModifiy()
{
    localStorage.setItem("onSearch", "false");

    let mainSection = document.getElementById('main-section');
    while(mainSection.firstChild)
    {
        mainSection.removeChild(mainSection.firstChild);
    }
    let main_div = document.createElement("main");
    main_div.className = "main-div-search";
    main_div.id = "main-div-search";
    //let main = document.getElementById('main-div-search');
    //while(main.firstChild)
        //main.removeChild(main.firstChild);
    fetch('http://localhost:3000/books')
    .then(function (response) {
        // Trasform server response to get the dogs
        response.json().then(function (books) {
            for(let i = 0; i < books.length; i++)
            {
                let div_id = document.createElement("div");
                div_id.id = books[i].id;
                div_id.className = 'book';

                let div_poz_titlu = document.createElement("div");
                div_poz_titlu.className = 'poza-titlu';
                
                let div_desc = document.createElement("div");
                div_desc.className = 'desc-produs';
                
                let img = document.createElement("img");
                img.className = 'img';
                img.alt = 'book'
                img.src = books[i].img;
                
                div_desc.appendChild(img);
                
                let div_titlu_pret = document.createElement("div");
                div_titlu_pret.className = "titlu-pret";

                let h3 = document.createElement("p");
                h3.className = 'titlu';
                h3.innerText = books[i].name;

                let h4 = document.createElement("p");
                h4.className = 'pret';
                h4.innerText = books[i].price;

                div_titlu_pret.appendChild(h3);
                div_titlu_pret.appendChild(h4);
                div_poz_titlu.appendChild(div_desc);
                div_poz_titlu.appendChild(div_titlu_pret);

                let div_descriere = document.createElement("div");
                div_descriere.className = "descriere";
                div_descriere.innerText = books[i].description;

                let btn = document.createElement("button");
                btn.className = "btn-buy";
                btn.type = "button";
                btn.id = "modify"
                btn.innerText = "Modify it!";
                btn.addEventListener('click', function () {
                    modifyItem(books[i]); // de pus functia de steregere 
                });

                div_id.appendChild(div_poz_titlu);
                div_id.appendChild(div_descriere);
                div_id.appendChild(btn);

                main_div.appendChild(div_id);
            }
            
        });
    });

    mainSection.appendChild(main_div);
}



function goLogIn(){
    localStorage.setItem("onSearch", "false");
    main = document.getElementById('main-section');
    main.innerHTML = `
    <main class = 'main-div-sign'>
        <form>
            <h1 class = 'sing-in-header'>Sign in</h1>
            <label for="username">User name</label><br>
            <input class='input' type="text" id="username" name="username" placeholder="username"><br>
            <br>
            <label for="password">Passowrd</label><br>
            <input class='input' type="password" id="password" name="password" placeholder="password"><br>
            <br>
            <input  value="Log in" id='submit-log-in' class="submit-button">
            
            <h1 class = 'sing-up-header'>Don't have an account? Sign up!</h1>
            <label for="username2">User name</label><br>
            <input class='input' type="text" id="username2"  name="username2" placeholder="username"><br>
            <br>

            <label for="email">Email adress</label><br>
            <input class='input' type="text" id="email"  name="email" placeholder="email"><br>
            <br>

            <label for="password2">Password</label><br>
            <input class='input' type="password" id="password2"  name="password2" placeholder="password"><br>
            <br>

            <label for="password2c">Confirm password</label><br>
            <input class='input' type="password" id="password2c"  name="password2c" placeholder="confirm password"><br>
            <br>

            <input value="Sign up" id='submit-sign-up' class="submit-button">
            <br>
        </form>
        <br>       
    </main>
    `;
}



// display books to the list 
function goSearchbooks(){
    
    //if we try to reload the list but there is no need to, abort
    if(localStorage.getItem("onSearch") == 'true')
    {
        //console.log(localStorage.getItem("onSearch"));
        return;
    }
    localStorage.setItem("onSearch",'true');
    let mainSection = document.getElementById('main-section');
    while(mainSection.firstChild)
    {
        mainSection.removeChild(mainSection.firstChild);
    }
    let main_div = document.createElement("main");
    main_div.className = "main-div-search";
    main_div.id = "main-div-search";
    

    fetch('http://localhost:3000/books')
    .then(function (response) {
        
        response.json().then(function (books) {
            for(let i = 0; i < books.length; i++)
            {
                let div_id = document.createElement("div");
                div_id.id = books[i].id;
                div_id.className = 'book';

                let div_poz_titlu = document.createElement("div");
                div_poz_titlu.className = 'poza-titlu';
                
                let div_desc = document.createElement("div");
                div_desc.className = 'desc-produs';
                
                let img = document.createElement("img");
                img.className = 'img';
                img.alt = 'book'
                img.src = books[i].img;
                
                div_desc.appendChild(img);
                
                let div_titlu_pret = document.createElement("div");
                div_titlu_pret.className = "titlu-pret";

                let h3 = document.createElement("p");
                h3.className = 'titlu';
                h3.innerText = books[i].name;

                let h4 = document.createElement("p");
                h4.className = 'pret';
                h4.innerText = books[i].price;

                div_titlu_pret.appendChild(h3);
                div_titlu_pret.appendChild(h4);
                div_poz_titlu.appendChild(div_desc);
                div_poz_titlu.appendChild(div_titlu_pret);

                let div_descriere = document.createElement("div");
                div_descriere.className = "descriere";
                div_descriere.innerText = "Author: " + books[i].author + "\n Description: " + books[i].description;

                let btn = document.createElement("button");
                btn.className = "btn-buy";
                btn.type = "button";
                btn.innerText = "Details";

                div_id.appendChild(div_poz_titlu);
                div_id.appendChild(div_descriere);
                div_id.appendChild(btn);
                
                btn.addEventListener('click', function () {
                    buybooks(books[i]); // de pus functia de steregere 
                });

                main_div.appendChild(div_id);

            }
            
        });
    });

    mainSection.appendChild(main_div);
}

function goHome(){
    localStorage.setItem("onSearch", "false");
    main = document.getElementById('main-section');
    main.innerHTML = `
    <main class = 'main-div' id = 'main-div'>
            <br>
            <h1 id = 'welcome' class = 'welcome'>Welcome, Guest!</h1>
            <br>
            <div class ='welcome-div'>
                <div>
                    <img class = 'img' class = 'welcome-img' alt='book' src='./img/welcome.png'>
                    <br>
                    <br>
                    <br>
                </div>
                <div class = 'welcome-3'>
                Our website is dedicated to literature lovers. Whether you would like to buy or sell books, this is the right place to be! Save money or share your passion in an instant: just register and you'll be taken on a whole new dimension: a world full of stories!
                </div>
            </div>
        </main>
    `;
    if (localStorage['loged'] == 'true')
    {
        document.getElementById('welcome').innerHTML = "Welcome, " + localStorage['user'] +"!";
    }
}


