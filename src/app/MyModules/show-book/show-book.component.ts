import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService } from 'src/app/MyService/service.service';

@Component({
  selector: 'ShowBook',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent
{


  constructor(private service:ServiceService, private snackBar: MatSnackBar)
  {
    console.log("get all running inside Show book component");
    this.service.getAllBooks().subscribe(data => {
      console.log(data);
      this.book = data;
    });

}

  book=[{
    id:0,
    title:"",
    author:"",
    price:0,
    category:""
  }]

onSubmit( book: any)
{
  console.log(book);
  var index = this.book.indexOf(book);
  delete this.book[index];

  this.service.deleteBook(book.id).subscribe(
    (      Response: any) =>{
      console.log(Response);
    },
    (      error: any)=>{
      console.log(error);

    }
  )

}




  }

