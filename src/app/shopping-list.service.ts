import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  constructor(private httpService: HttpClient) { }
  public count$ = new BehaviorSubject<any>(0);
  items: string[];
  increment = 0;

  counter() {
    this.count$.next(++this.increment);
  }



}
