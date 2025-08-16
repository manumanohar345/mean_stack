import { Injectable } from '@angular/core';
import { Inventory } from './models/inventory';
import { INVENTORY_DATA } from './mock-data';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private items: Inventory[] = INVENTORY_DATA;
  getItems(): Inventory[] {
    return this.items;
  }

  addItems(item: Inventory) {
    this.items.push(item);
  }

  updateItem(updatedItem: Inventory) {
    const index = this.items.findIndex(i => i.id === updatedItem.id);
    if (index !== -1) {
      this.items[index] = updatedItem;
    }
  }

  delete(id: number) {
    this.items = this.items.filter(i => i.id !== id);
  }
}
