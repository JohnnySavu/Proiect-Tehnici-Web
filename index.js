const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuidv1 = require('uuid/v1');

const fs = require("fs");
var admin = false;
var loged = false;

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());


app.post("/books", (req, res) => {
  const booksList = readJSONFile();
  const newbook = req.body;
  newbook.id = uuidv1();
  const newbookList = [...booksList, newbook];
  writeJSONFile(newbookList);
  res.json(newbook);
});


app.get("/books/:id", (req, res) => {
  const booksList = readJSONFile();
  const id = req.params.id;
  let idFound = false;
  let foundbook;

  booksList.forEach(book => {
    if (id == book.id) {
      idFound = true;
      foundbook = book
    }
  });

  if (idFound) {
    res.json(foundbook);
  } else {
    res.status(404).send(`book ${id} was not found`);
  }
});

app.post("/sign-up", (req, res) => {
  let signData = req.body;
  const userList = readUsers();
  const newUser = req.body;
  newUser.id = uuidv1();
  const newUserList = [...userList, newUser];
  writeUsers(newUserList);
  res.json(newUser);
});


app.post("/login", (req, res) => {
  admin = false;
  loged = false;
  let logData = req.body;
  if (logData.username == 'admin' && logData.password == 'admin')
  {
    admin = true;
    loged = true;
  }
  else{
    let users = readUsers();
    let found = 0;
    for (let i = 0 ; i < users.length; i++)
    {
      if (logData.username == users[i].username && logData.password == users[i].password)
        found = 1;
    }
    if (found == 1)
      loged = true;
    else 
      loged = false;
  }
  res.json("ok");

});

app.get("/login2", (req, res) => {
  if (admin == true)
    res.json("admin");
  else if (loged == true)
    res.json("loged");
  else
    res.json("not loged");

});


app.get("/books", (req, res) => {
  const booksList = readJSONFile();
  res.json(booksList);
});


app.put("/books/:id", (req, res) => {
  let booksList = readJSONFile();
  let id = req.params.id;
  let newbook = req.body;
  newbook.id = id;
  idFound = false;

  const newbooksList = booksList.map((book) => {
     if (book.id == id) {
       idFound = true;
       return newbook
     }
    return book
  })
  
  writeJSONFile(newbooksList);

  if (idFound) {
    res.json(newbook);
  } else {
    res.status(404).send(`book ${id} was not found`);
  }

});


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


function readJSONFile() {
  return JSON.parse(fs.readFileSync("db.json"))["books"];
}

function readUsers() {
  return JSON.parse(fs.readFileSync("db.json"))["users"];
}


function writeJSONFile(content) {
  fs.writeFileSync(
    "db.json",
    JSON.stringify({ books: content, users : readUsers() }),
    "utf8",
    err => {
      if (err) {
        console.log(err);
      }
    }
  );
}

function writeUsers(content) {
  fs.writeFileSync(
    "db.json",
    JSON.stringify({ books : readJSONFile(),users: content }),
    "utf8",
    err => {
      if (err) {
        console.log(err);
      }
    }
  );
}

app.use(express.static('assets'));

// Pornim server-ul
app.listen("3000", () =>
  console.log("Server started at: http://localhost:3000")
);