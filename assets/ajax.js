

//post a book in the list!

document.addEventListener('click',function(e)
{
    if(e.target && e.target.id == 'add-book-btn')
    {
        bookName = document.getElementById("book_name").value;
        price = document.getElementById("price").value;
        imgLink = document.getElementById("Image").value;
        bookDesc = document.getElementById("book-desc").value;
        obj = {
            name: bookName,
            price: price,
            description: bookDesc,
            img: imgLink
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
        document.getElementById("book_name").value = "";
        document.getElementById("price").value = "";
        document.getElementById("Image").value = "";
        document.getElementById("book-desc").value = "";
        
        //de adaugat move to search books 
    });

}
