const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{
  return username.length >= 3 ? true : false
}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
}
//Task 7: Login as a Registered user - 3 Points
//only registered users can login
regd_users.post("/login", (req,res) => {
  console.log(users);
  for (let i = 0; i < users.length; i++) {
    if (req.body.userName === users[i].userName && req.body.password === users[i].password)
    {
      return res.status(200).json({message: "you have entered as user"});
    } else {
      return res.status(404).json({message: "Yet to be implemented"});
    }
    
  }
  return res.status(404).json({message: "Yet to be implemented"});
});
//so you will need to check if a review is already there and then edit it, and if it's not there you can add it
// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {

  // console.log(req.params.isbn);
  
  for (let key in books)
  {
    let book = books[key];
    if (book.isbn === req.params.isbn) {
      
        // console.log(req.body.name, req.body.message);
        book.reviews.name = req.body.name;
        book.reviews.message = req.body.message;
        return res.status(200).json(book.reviews);
    }
  }
  return res.status(404).json({message: 'book not found'});  
});
regd_users.delete("/auth/review/:isbn", (req, res) => {
  console.log(req.params.isbn);
  for (let key in books)
  {
    let book = books[key];
    if (book.isbn === req.params.isbn) {
      
        //  console.log(req.body.name, req.body.message);
        book.reviews.name = "";
        book.reviews.message = "";
        return res.status(200).json(book.reviews);
    }
  }
  return res.status(404).json({message: 'book not found'});  
});



module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
