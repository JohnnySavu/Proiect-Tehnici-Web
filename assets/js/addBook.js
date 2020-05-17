//document.getElementById("add-books-btn").addEventListener("click", goAddbooks);

function goAddbooks(){
    localStorage.setItem("onSearch", "false");
    main = document.getElementById('main-section');
    main.innerHTML =`<main class = 'main-div'>
    <div class='add-book'>
        <div class = 'add-poza-titlu'>
            <div class ='desc-produs'>
                <img class = 'img' alt='book' src='./img/book.jpg'>
            </div>
            <form>
                <br>
                <label for="book name">Book name</label><br>
                <input class='add-input' type="text" id="book_name" name="book name" placeholder="book name"><br>
                
                <label for="Author name">Author name</label><br>
                <input class='add-input' type="text" id="author_name" name="Author name" placeholder="Author name"><br>
    
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
        
        <button type='button' class='add-book-btn' id = 'add-book-btn'>
            Add the book!
        </button>
    </div>
</main>
    `;

}

document.addEventListener('click',function(e)
{
    if(e.target && e.target.id == 'add-book-btn')
    {
        bookName = document.getElementById("book_name").value;
        price = document.getElementById("price").value;
        imgLink = document.getElementById("Image").value;
        bookDesc = document.getElementById("book-desc").value;
        author = document.getElementById("author_name").value;
        
        obj = {
            name: bookName,
            price: price,
            description: bookDesc,
            img: imgLink,
            author: author
        }
        postbook(obj);
    }
});


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

