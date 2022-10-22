//scratch.js

let myLibrary = [{
    title: "book1",
    author: "author1",
    pages: "pages1",
    read: "yes"
},
{
    title: "book2",
    author: "author2",
    pages: "pages2",
    read: "no"
},
{
    title: "book3",
    author: "author",
    pages: "pages3",
    read: "yes"
}
];

let singleBook = {
    title: "book1",
    author: "author1",
    pages: "pages1",
    read: "yes"
};

Object.values(singleBook).forEach(val => console.log(val));

