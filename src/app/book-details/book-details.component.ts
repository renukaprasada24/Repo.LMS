import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {BookDetailsService} from '../book-details.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  valueofbook;
  constructor(private bookinfoservice : BookDetailsService) { }


  ngOnInit() {
  }

  @Input('selectedBook') selectedBook:String;
@Input('selectedBookinfo') selectedBookinfo:Object;



// //child to parent data passing--------

ngAfterViewInit(){
this.valueofbook=this.selectedBookinfo;
}
// child to parent function call------
@Output() bookadded=new EventEmitter();
counter=0;
@Output() countbook=new EventEmitter();
addBook(){
  //alert(JSON.stringify(this.valueofbook) ) 
  //this.counter=this.counter+1;
    this.bookadded.emit(this.valueofbook);
    //this.countbook.emit(this.counter);
  
}


}
