const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  console.log(req.body.userName);
  console.log(req.body.passWord);
  if (isValid(req.body.userName) && req.body.passWord) {
    users.push({
      "userName": req.body.userName,
      "passWord": req.body.passWord
    })
    return res.status(200).json({message: "User successfully created"});
  }
  return res.status(404).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  console.log(books);
  return res.status(200).json(books);
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  console.log(req.params.isbn)
  let foundBook = null;
  for (let key in books)
  {
    let book = books[key];

    if (book.isbn === req.params.isbn) {
      if(book) {

        return res.status(200).json(book);
    } else {
      return res.status(404).json({message: "book not found"});
      
    }
      }
      
  }
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  console.log(req.params.author)
   for (let i in books) {
    let author = books[i];
    if (author.author === req.params.author)
    {
      if(author) {
        return res.status(200).json(author)
      } else {
        return res.status(404).json({message: "book not found"});
      }
    }
   }
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  console.log(req.params.title);
  for (let key in books)
  {
    let titleFound = books[key];
    console.log('--');
     
    
     console.log('--');
     if (titleFound.title === req.params.title)
  {
        return res.status(200).json(titleFound)
    }
  }
  return res.status(404).json({message: "book not found"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {

  let foundReview = null;
  for (let i in books) {
    let book = books[i];
    if (book.isbn === req.params.isbn)
    {
        foundReview = book;
    }

   }
   if (foundReview)
   {
    return res.status(200).json(foundReview.reviews)
  } else {
    return res.status(404).json({message: "book not found"});
   }
   
});

module.exports.general = public_users;
