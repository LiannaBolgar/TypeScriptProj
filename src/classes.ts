import * as Interfaces from  "./interfaces";
import {sealed, logger} from './decorators';


class ReferenceItem{
    
     /*   constructor(
            newTitle: string,
            newYear:number)
        {
            console.log(`creating new ReferenceItem`);
            this.title = newTitle;
            this.year = newYear;
        } */
        private  _publisher: string;
        get publisher(): string{
            return this._publisher.toUpperCase();
        }
        set publisher(newPublisher: string){
           this._publisher= newPublisher;
        }
        constructor(public title:string, public year: number){ console.log(`creating new ReferenceItem`);};
        printItem():void {
            console.log(`${this.title} was published in a ${this.year}`);
        }
        printCitation(){};
    }
    //Task 20
    @sealed('UniversityLibrarian')
    @logger
    class UniversityLibrarian implements Interfaces.Librarian
    {
        name: string;
        department: string;
        email: string;
        assistCustomer(custName:string): void{ console.log(`${this.name} is assisting ${custName}`)}

        assistFaculty(){console.log('Assist faculty');}
        assistCommunity(){console.log('Teaching Community');}
    }

    export{ReferenceItem, UniversityLibrarian};