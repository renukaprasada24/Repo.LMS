import { Component, OnInit,Input,ViewChild } from '@angular/core';
import {BookListService} from '../book-list.service';
import {BookDetailsService} from '../book-details.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService:BookListService,private bookinfoservice:BookDetailsService ){ }
  booksList;
  bookinfoObject;

  ngOnInit() {
    this.booksList=this.bookService.showBookList();
    this.bookinfoObject=this.bookinfoservice.getBookInfo();
    //alert(JSON.stringify(this.bookinfoObject));
  }
  selectedBook;
  selectedBookinfo;
 
  ChangingValue(event){

    //alert("inside"+JSON.stringify(event.target.value));
    this.selectedBook=event.target.value;
    //alert(JSON.stringify(this.bookinfoObject));
  
   this.bookinfoObject.forEach(book => {
    if(book.bookName===this.selectedBook){
      this.selectedBookinfo=book;
    }
  });
      }
  @Input('firstname') firstname:string;
  @Input('lastname') lastname:string;

  //child to parent data binding -----------

  @ViewChild(BookListService) childcomp;
  price;
  ngAfterViewInit(){
    this.price=this.childcomp;
  }
  //chile to parent function calling 
  bookadded123;
  bookprasent=false;
  displayAddedBook(event){
    //console.log(event);
this.bookadded123=event.bookName;
this.bookprasent=true;
  }
}
