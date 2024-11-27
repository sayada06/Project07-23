import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class DataapiService {
  constructor(
    public http:HttpClient,
  ) {}

  addproduct(data: any){
    console.log("ข้อมูลที่ส่งไปยัง API",data);
    return this.http.post('http://127.0.0.1/Project07_API/insert.php',data);
   }
}

