import {Category} from './enums';
//Task 07
interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean; 
    category: Category;
    year?: number;
    pages?: number;
    markDamaged?: DamageLogger
}
interface Person{
    
        name: string;
        email: string;
    }
    
interface Author extends Person
    {
        numBooksPublished: number;    
    }

    interface Librarian extends Person {
        department: string;
        assistCustomer:(custName: string) => void
    }
    interface DamageLogger{
        (reason: string): void;
        }
        
interface Magazine {
    title: string;
    publisher: string;
}
export {Book, DamageLogger as Logger, Person, Author, Librarian, Magazine};
