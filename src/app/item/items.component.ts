import { Component, OnInit } from '@angular/core';

import { Item } from './item';
import { ItemService } from './item.service';
import * as stringConstants from './items.component.strings';


@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item> = [];

  id: string = stringConstants.id;
  name: string = stringConstants.name;
  position: string = stringConstants.position;
  height: string = stringConstants.height;
  nationality: string = stringConstants.nationality;
  appearances: string = stringConstants.appearances;
  goals: string = stringConstants.goals;
  assists: string = stringConstants.assists;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }
}
