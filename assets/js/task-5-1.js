document.addEventListener("click", function(e)
{
    if (e.target && e.target.id == "go-modify-users")
    {
        goDisplayList();
    }

})

function goDisplayList()
{
    main = document.getElementById('main-section');
    main.innerHTML = `
    <main class = 'main-div-sign'>
        <form>
            <h1 class = 'sing-in-header'>Change/Delete user</h1>
            <label for="username">Username</label><br>
            <input class='input' type="text" id="username" name="username" placeholder="username"><br>
            <br>
            <label for="password">Passowrd</label><br>
            <input class='input' type="password" id="password" name="password" placeholder="password"><br>
            <br>

            <input  value="Change password" id='change-password' class="submit-button">
            <br>
            <input  value="Delete user" id='delete-user' class="submit-button">
            
            <h1 class = 'sing-up-header'>Create new user</h1>
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

            <input value="Create user" id='create-user' class="submit-button">
            <br>
        </form>
        <br>       
    </main>
    `;
}


document.addEventListener("click", function(e)
{
    if (e.target && e.target.id == 'create-user')
    {
        let obj = 
        {
            username : document.getElementById("username2").value,
            password: document.getElementById("password2").value,
            email: document.getElementById("email").value
        };
        fetch('http://localhost:3000/sign-up', {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(obj)
        }).then(function(){
            goHome();
        });
    }
    if (e.target && e.target.id == 'change-password')
    {
        let obj = 
        {
            username : document.getElementById("username").value,
            password: document.getElementById("password").value
        };
        fetch('http://localhost:3000/putuser', {
        method: 'put',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(obj)
        }).then(function(){
            goHome();
        })
    }

    if (e.target && e.target.id == 'delete-user')
    {
        let obj = 
        {
            username : document.getElementById("username").value,
            password: document.getElementById("password").value
        };
        fetch('http://localhost:3000/deleteuser', {
        method: 'put',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(obj)
        }).then(function(){
            goHome();
        })
    }

})

