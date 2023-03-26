import { Injectable } from "@angular/core";
import { Product } from "./products";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class DatabaseService {
  //URL para consumir los productos
  baseUrl = "http://localhost:5000/products";
  items: Product[] = []; //Productos vacíos iniciando

  constructor(private http: HttpClient) { }

  // GET
  getItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }
}
