import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService } from 'src/app/MyService/service.service';

@Component({
  selector: 'UpdateForm',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent {

  constructor(private service:ServiceService, private snackBar: MatSnackBar){}


  book={
    id:0,
    title:"",
    author:"",
    price:0,
    category:""
  }

  onSubmit()
  {
    console.log(this.book);
    this.service.updateBook(this.book).subscribe(
      (      Response: any) =>{
        console.log(Response);
        this.snackBar.open("Book details edited","ok");
      },
      (      error: any)=>{
        console.log(error);
        this.snackBar.open("No record associated with this ID","ok");
      }
    )

  }
}
