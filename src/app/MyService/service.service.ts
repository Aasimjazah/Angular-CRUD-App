import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {



  constructor(private service:HttpClient){}

  saveBook(book: any)
  {
    return this.service.post("http://localhost:8091/save",book, {responseType:'text'});
  }

  updateBook(book: any)
  {
    return this.service.put("http://localhost:8091/editDetails/"+book.id,book,{responseType:'text'});
  }

  deleteBook(a:number)
  {
    return this.service.delete("http://localhost:8091/deleteBook/"+a, {responseType:'text'});
  }

  getAllBooks()
  {
  return this.service.get<any>("http://localhost:8091/getAll");
  }
}
