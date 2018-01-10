import {Category} from "./enums";
import {Book, Author, Magazine, Librarian, Logger} from "./interfaces";
import { UniversityLibrarian, ReferenceItem} from "./classes";
showHello("greeting", "TypeScript");
import * as _ from "lodash";
import Shelf from './shelf';
import RefBook from './encyclopedia';
import * as purge from './lib/utility-functions'
import 'babel-polyfill';
import {getBookByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResult} from './lib/utility-functions'
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}




//-----------------------
//---------Task 01

 function logFirstAvailable(books: Array<any>= purge.getAllBooks()): void {
    const numberOfBooks: number = books.length;
    let firstAvailable: string = "";

    for(let currentBook of books){
        if(currentBook.available){
            firstAvailable=currentBook.title;
            break;
        }
    }
    console.log(`Total Books: ${numberOfBooks}`);
    console.log(`First Available ${firstAvailable}`);
} 
console.log('Task 01');
console.log(logFirstAvailable());

//-----------------------
//---------Task 02
const javaScriptBooks: Array<string> = purge.getBookTitlesByCategory(Category.JavaScript);
console.log('Task 02');
purge.logBookTitles(javaScriptBooks);

//------------------------
//---------Task 03

javaScriptBooks.forEach((val: string, idx:number, arr:string[]) => console.log(`${++idx}`));
console.log('Task 03');
console.log(purge.getBookById(1));

//------------------------
//---------Task 04

let myId = purge.createCustomerID('Miri', 28);
console.log(myId);

let IdGenerator: (a: string, b: number) => string;
IdGenerator = (name: string, id: number) => `${name}${id}`; 
IdGenerator = purge.createCustomerID;
myId = IdGenerator('Mark', 33);
console.log('Task 04');
console.log(myId);

//------------------------
//---------Task 05

purge.CreateCustomer('Mary');
purge.CreateCustomer('Boris',20);
purge.CreateCustomer('Jane',25,'Atlanta');
const r = purge.getBookTitlesByCategory();
console.log(r);

logFirstAvailable();

const myBooks = purge.checkoutBooks('Mary', 1,2,3);
console.log('Task 05');
myBooks.forEach(title => console.log(title));

//------------------------
//---------Task 06

const checktitles = purge.getTitles("Tim Kutswell");
console.log('Task 06');
console.log(checktitles); 

//------------------------
//---------Task 07
const myBook: Book = {
     id: 5,
     title: 'colors',
     author: 'Aric A. Mayer',
     available: true,
     category: Category.CSS,
     year: 2015,
     pages: 200,
     markDamaged: (reason: string) => console.log(`Damaged ${reason}`)
 }

 purge.PrintBook(myBook);

//------------------------
//---------Task 08
 const logDamage: Logger = (reason: string) => console.log(reason);
 console.log(logDamage);
 
//------------------------
//---------Task 09, Task 10
 const favoriteAuthor: Author = {
    email: 'Lyanna@gmail.com',
    name: 'Lyanna',
    numBooksPublished: 3
 };

 const favoriteBasicLibrarian: Librarian = {
     email: 'Boris@gmail.com',
     name: 'Boris',
     department: 'Classical',
     assistCustomer: (name: string) => console.log(`Assist ${name}`)
 } 

  const favoriteLibrarian: Librarian = new UniversityLibrarian();
 favoriteLibrarian.name= `LibraRian`;
 favoriteLibrarian.assistCustomer("YOU");

//------------------------
//---------Task 11
const ref: ReferenceItem = new ReferenceItem('CHIP', 1999);
ref.printItem();
ref.publisher = 'random publisher';
console.log(ref.publisher); 

//------------------------
//---------Task 12, Task 13
const refBook = new RefBook('WorldPedia', 1900, 2);
refBook.printItem();
refBook.printCitation();

//------------------------
//---------Task 17
const  inventory = purge.getAllBooks();
 const purgedBooks: Array<Book> = purge.purge<Book>(inventory);
console.log(purgedBooks);
console.log(purge.purge<number>([1,2,3,4]));

//------------------------
//---------Task 18
const bookShelf: Shelf<Book> = new Shelf<Book>();
//inventory.forEach(book=> bookShelf.add(book));
const firstBook: Book = bookShelf.getFirst();
console.log(firstBook);

const magazines = [{title: 'programming language', publisher: 'code maps'}, {title: 'five points', publisher: 'GSU'}];
const magShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(mag=>magShelf.add(mag));
const firstMag: Magazine = magShelf.getFirst();
console.log(firstMag);

//------------------------
//---------Task 19
magShelf.printTitles();
const magCodeComplete = magShelf.find('programming language');
console.log(magCodeComplete.publisher);

//Task 21
//getBookByCategory(Category.CSS);
//------------------------
//---------Task 21
getBooksByCategoryPromise(Category.JavaScript)
.then(titles=> {
    console.log(`Found titles`);
    console.log(titles);
    return titles.length;
})
.then(numberOfBooks=> console.log(numberOfBooks))
.catch(reason=>console.log(reason));
console.log(`end`);


console.log ('Begin search..');
logSearchResult(Category.JavaScript);
console.log(`happy end`);