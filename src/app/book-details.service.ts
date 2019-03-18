import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookDetailsService {

  constructor() { }

  public books:Array<Object> = [
    {id: 1, bookName: 'Ramayana',bookAuthor:'akash',bookPrice:100},
    {id: 2, bookName: 'Mahabharatha',bookAuthor:'arp',bookPrice:200},
    {id: 3, bookName: 'Legendry Ravana',bookAuthor:'adarsh',bookPrice:300},
    {id: 4, bookName: 'steps to success',bookAuthor:'vishnu',bookPrice:400},
];
getBookInfo(){
  return this.books;
}

}
