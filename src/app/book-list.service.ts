import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookListService {

  constructor() { }

  showBookList(){

  let  booksList=["Ramayana","Mahabharatha","Legendry Ravana","steps to success"];
  return booksList;
  }
  
}
