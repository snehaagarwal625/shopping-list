import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  count = null;
  constructor(private listService: ShoppingListService) {
  }
  ngOnInit(): void {
    this.listService.count$.subscribe(data => {
      if (data){
        this.count = data;
      }
    }
    );
  }


}
