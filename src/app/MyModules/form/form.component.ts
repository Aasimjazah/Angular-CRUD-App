import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceService } from 'src/app/MyService/service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  constructor(private service:ServiceService, private snackBar: MatSnackBar){}

  book={
    title:"",
    author:"",
    price:0,
    category:""
  }

  onSubmit()
  {

    console.log(this.book);
    this.service.saveBook(this.book).subscribe(
      (      Response: any) =>{
        console.log(Response);
        this.snackBar.open("Book saved","ok");

      },
      (      error: any)=>{
        console.log(error);
      }
    )

  }

  getAll()
  {
    console.log("get all running");
        this.service.getAllBooks().subscribe(data => {
          this.book = data;
        });

        console.log(this.book);
    }
  }

