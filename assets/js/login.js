
document.addEventListener('click',function(e)
{
    if(e.target && e.target.id == 'submit-log-in')
    {
        let obj = {
            username : document.getElementById("username").value,
            password: document.getElementById("password").value
        }
        fetch('http://localhost:3000/login', {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(obj)
        }).then(function (response) {
            fetch('http://localhost:3000/login2')
            .then(function (response) { 
                response.json().then(function (res) {
            if (res == "admin")
            {
                document.getElementById("navigator").innerHTML = `
                <button type='button' class='nav-button' id='home-btn'> Home </button>
                <button type='button' class='nav-button' id = 'search-books-btn'> Search books </button>
                <button type='button' class='nav-button' id = 'add-books-btn'> Add books </button>
                <button type='button' class='nav-button' id = 'contact-btn'> Contact </button>
                <button type='button' class='nav-button' id = 'log-in-btn'> Log in </button>
                <button type='button' class='nav-button' id = 'modify-list-btn'> Modify List</button>
                `
                document.getElementById("home-btn").addEventListener("click", goHome);
                document.getElementById("log-in-btn").addEventListener("click", goLogIn);
                document.getElementById("search-books-btn").addEventListener("click", goSearchbooks);
                document.getElementById("add-books-btn").addEventListener("click", goAddbooks);
                
                localStorage.setItem("admin", "true");
                localStorage.setItem("loged","true");
                localStorage.setItem("user", "Administrator");
                goHome();
            }
            if(res == 'loged')
            {
                document.getElementById("navigator").innerHTML = `
                <button type='button' class='nav-button' id='home-btn'> Home </button>
                <button type='button' class='nav-button' id = 'search-books-btn'> Search books </button>
                <button type='button' class='nav-button' id = 'add-books-btn'> Add books </button>
                <button type='button' class='nav-button' id = 'contact-btn'> Contact </button>
                <button type='button' class='nav-button' id = 'log-in-btn'> Log in </button>
                `
                document.getElementById("home-btn").addEventListener("click", goHome);
                document.getElementById("log-in-btn").addEventListener("click", goLogIn);
                document.getElementById("search-books-btn").addEventListener("click", goSearchbooks);
                document.getElementById("add-books-btn").addEventListener("click", goAddbooks);
                localStorage.setItem("loged","true"); 
                localStorage.setItem("user", document.getElementById("username").value);
                goHome();  
            }
        });
        });
        
        });
        
    }
});


document.addEventListener('click', function(e)
{
   // console.log("lamyyyy");
    if(e.target && e.target.id == 'submit-sign-up')
    {
        let obj = 
        {
            username : document.getElementById("username2").value,
            password: document.getElementById("password2").value,
            email: document.getElementById("email").value
        }
        fetch('http://localhost:3000/sign-up', {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(obj)
        }).then(function (response) {
            document.getElementById("navigator").innerHTML = `
                <button type='button' class='nav-button' id='home-btn'> Home </button>
                <button type='button' class='nav-button' id = 'search-books-btn'> Search books </button>
                <button type='button' class='nav-button' id = 'add-books-btn'> Add books </button>
                <button type='button' class='nav-button' id = 'contact-btn'> Contact </button>
                <button type='button' class='nav-button' id = 'log-in-btn'> Log in </button>
                `
                document.getElementById("home-btn").addEventListener("click", goHome);
                document.getElementById("log-in-btn").addEventListener("click", goLogIn);
                document.getElementById("search-books-btn").addEventListener("click", goSearchbooks);
                document.getElementById("add-books-btn").addEventListener("click", goAddbooks);
                localStorage.setItem("loged","true"); 
                localStorage.setItem("user", document.getElementById("username2").value);
                goHome();  
        });
    }


}

);

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