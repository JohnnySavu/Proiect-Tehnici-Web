function buybooks(book)
{
    localStorage.setItem("onSearch", "false");
    main = document.getElementById('main-section');

    if (localStorage['loged'] == 'true'){
    main.innerHTML =`<main class = 'main-div'>
    <div class='add-book'>
        <div class = 'add-poza-titlu'>
            <div class ='desc-produs'>
                <img class = 'img' id ='display-book' alt='book' src='./img/book.jpg'>
            </div>
            <form>
                <br>
                <label for="book name">Book name</label><br>
                <input class='add-input' type="text" id="book_name" name="book name" placeholder="book name" disabled><br>

                <label for="Author name">Author name</label><br>
                <input class='add-input' type="text" id="author_name" name="Author name" placeholder="Author name" disabled><br>

                <label for="Price">Price</label><br>
                <input class='add-input' type="text" id="price" name="Price" placeholder="Price" disabled><br>


                
            </form>
        </div>

        <div class = 'descriere'>
           <h3>
               Add description:
           </h3>
           <form>
            <textarea name="message" id ='book_desc' class='add-input-desc' rows="20" cols="150" disabled></textarea>
           </form>
           <br>

        </div>

        <button type='button' class='add-book-btn' id = 'buy-now-book-btn'>
            Buy the book!
        </button>

    </div>
</main>
    `;
    document.getElementById("display-book").src = book.img;
    document.getElementById("book_name").value = book.name;
    document.getElementById("author_name").value = book.author;
    document.getElementById("price").value = book.price;
    document.getElementById('book_desc').value = book.description;
    document.getElementById("buy-now-book-btn").addEventListener('click', function(){
  
        fetch(`http://localhost:3000/books/${book.id}`, {
        method: 'DELETE',
        }).then(function () {
        showThanks();
    }); 
    });


    }
    else{
        main.innerHTML =`<main class = 'main-div'>
        <div class='add-book'>
            <div class = 'add-poza-titlu'>
                <div class ='desc-produs'>
                    <img class = 'img' id ='display-book' alt='book' src='./img/book.jpg'>
                </div>
                <form>
                    <br>
                    <label for="book name">Book name</label><br>
                    <input class='add-input' type="text" id="book_name" name="book name" placeholder="book name" disabled><br>
    
                    <label for="Author name">Author name</label><br>
                    <input class='add-input' type="text" id="author_name" name="Author name" placeholder="Author name" disabled><br>
    
                    <label for="Price">Price</label><br>
                    <input class='add-input' type="text" id="price" name="Price" placeholder="Price" disabled><br>
    
    
                    
                </form>
            </div>
    
            <div class = 'descriere'>
               <h3>
                   Add description:
               </h3>
               <form>
                <textarea name="message" id ='book_desc' class='add-input-desc' rows="20" cols="150" disabled></textarea>
               </form>
               <br>
    
            </div>
    
        </div>
    </main>
        `;
        document.getElementById("display-book").src = book.img;
        document.getElementById("book_name").value = book.name;
        document.getElementById("author_name").value = book.author;
        document.getElementById("price").value = book.price;
        document.getElementById('book_desc').value = book.description;
    }

}


function showThanks()
{
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
                    You will soon recive an email about your command. Meanwhile, you can browse our site for more great books!
                </div>
            </div>
        </main>
    `;

    document.getElementById('welcome').innerHTML = "Thank you for your purchase, " + localStorage['user'] +"!";



}