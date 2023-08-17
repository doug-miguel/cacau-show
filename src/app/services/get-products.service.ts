import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../types/products';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {
  constructor(private httpClient: HttpClient) { }

  baseUrl: string = "https://fakestoreapi.com";

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Um erro ocorreu';
    if (error.error instanceof ErrorEvent) {
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.baseUrl + "/products")
      .pipe(
        catchError(this.handleError)
      );
  }

  getProductId(id: number): Observable<IProduct> {
    const url = `${this.baseUrl}/products/${id}`
    return this.httpClient.get<IProduct>(url)
      .pipe(
        catchError(this.handleError)
      );
  }
}
