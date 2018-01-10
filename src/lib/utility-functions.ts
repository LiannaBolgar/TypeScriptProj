import {Category} from './../enums';
import {Book} from './../interfaces';

export function purge<T>(inventory: Array<T>): Array<T>
{
return inventory.splice(2, inventory.length);

}

export  function getBookByCategory(category: Category, callback: LibMgrCallBack): void {
    setTimeout(()=>{
        try{
            const foundBooks: string[]= getBookTitlesByCategory(category);
            if(foundBooks.length >0){
                callback(null, foundBooks);
            }else { throw new Error('No books found');}
        }
        catch(error){
           callback(error, null);
        }
    }, 2000);
}
export function logCategorySearch(err: Error, titles: string[]): void{

    if(err){
        console.log(`Error message: ${err.message}`);
    }
    else{
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]>{
const p: Promise<string[]> = new Promise((resolve, reject) => (
    setTimeout(()=>{  
         const foundBooks: string[]= getBookTitlesByCategory(category);
        if(foundBooks.length >0){
            resolve(foundBooks);
        }else { reject('No books found');}}, 2000)
));
return p;
}

export async function logSearchResult(category: Category): Promise<void>{

    try { 
        const foundBooks: string[] = await getBooksByCategoryPromise(category); 
        console.log(foundBooks);
    }
    catch(err){
        console.log('Error: ', err.message);
    }
}
interface LibMgrCallBack {
(err: Error, titles: string[]):void;
}
//-----------------------
//---------Task 01
export function getAllBooks(): Array<Book>{
    let books : Array<Book>= 
    [{id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript},
    {id: 2, title: 'Transcend', author:'Tim Kutswell', available:false, category: Category.Misc},
    {id: 3,title: '7 skills of highly effective people', author:'Stephen Covey', available:false, category: Category.Fiction},
    {id: 4, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
    {id: 5, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
    
    ];
return books;
}

export function getBookTitlesByCategory(categoryFilter?: Category): Array<string>{
    console.log('Getting books in category: ${Category[categoryFiter]}');
    const allBooks: Array<any> =getAllBooks();
    const filteredTitles: string[] = [];

    for(let currentBook of allBooks)
    {
        if(currentBook.category === categoryFilter)
        {filteredTitles.push(currentBook.title);}
    }
    return filteredTitles;
}
//-----------------------
//---------Task 02

export function logBookTitles(titles: string[]): void {
    for(let title of titles){console.log(title);}
}

export function getBookById(id: number)
{
const allBooks = getAllBooks();
return allBooks.find(book=> book.id === id);
}

export function createCustomerID(name:string, id: number): string
{
return `${name}${id}`;
}
//Task5
export function CreateCustomer(name: string, age?: number, city?: string): void
{
console.log(`Create customer ${name}`);
if(age){console.log(`Age ${age}`)}
if(city){console.log(`City ${city}`)}
age = 15;
city= "Kiev";
}

export function checkoutBooks(customer: string, ...bookIds: number[]): string[]
{
    console.log(`Check out books for customer ${customer}`);
    const bookTitles: string[] = [];
    for(let id of bookIds){
        let book = getBookById(id);
        if(book &&  book.available){ bookTitles.push(book.title);}
    }
    return bookTitles;
}

//Task6
export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(bookProp: any): string[]
{
    const allBooks = getAllBooks();
    const bookTitles: string[] = [];
    if(typeof bookProp === 'string'){
        for(let book of allBooks){if(book.author === bookProp){bookTitles.push(book.title);}}
    }
    else if(typeof bookProp ==='boolean') {
        for (let book of allBooks) {
            if(book.available)
            {bookTitles.push(book.title);}
    }}

return bookTitles;
}


export function PrintBook(book: Book): void {
    console.log(book.title);
}
