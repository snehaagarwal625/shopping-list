import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private httpService: HttpClient,
              private listService: ShoppingListService) { }
  items: string[];

  ngOnInit(): void {
    this.httpService.get('./assets/data.json').subscribe(
      data => {
        this.items = data as string[];
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
  addCounter() {
    this.listService.counter();
  }
  
}
