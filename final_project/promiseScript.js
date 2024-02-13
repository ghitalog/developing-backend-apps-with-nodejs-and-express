const axios = require('axios');
// prosesAllBooks();
async function prosesAllBooks () {
    const books = await getAllBooks();
}
async function getAllBooks  () {
let config = {
  method: 'get',
  url: 'http://localhost:5000/',
}

await axios.request(config)
.then((response) => {
  console.log(response.data);
})
.catch((error) => {
  console.log(error);
});
};

async function searchByIsbn () {
    const isbn = await getAllIsbn(129); 
}
// searchByIsbn();
async function getAllIsbn (somenumber) {
let config = {
  method: 'get',
  
  url: `http://localhost:5000/isbn/${somenumber}`,
};

await axios.request(config)
.then((response) => {
  console.log(response.data)
})
.catch((error) => {
  console.log(error);
});
}

async function searchByAuthor () {
  const isbn = await getAllAuthor('Hans Christian Andersen'); 
}
// searchByAuthor();
async function getAllAuthor (someAuthor) {
let config = {
method: 'get',

url: `http://localhost:5000/author/${someAuthor}`,
};

await axios.request(config)
.then((response) => {
console.log(response.data)
})
.catch((error) => {
console.log(error);
});
}

async function searchByTitle () {
  const isbn = await getAllTitle('The Epic Of Gilgamesh'); 
}
searchByTitle();
async function getAllTitle (someTitle) {
let config = {
method: 'get',

url: `http://localhost:5000/title/${someTitle}`,
};

await axios.request(config)
.then((response) => {
console.log(response.data)
})
.catch((error) => {
console.log(error);
});
}