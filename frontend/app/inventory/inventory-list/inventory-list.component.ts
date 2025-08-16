declare var bootstrap: any;
import { Component, OnInit } from '@angular/core';
import { Inventory } from '../models/inventory';
import { InventoryService } from '../inventory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss'],
})
export class InventoryListComponent implements OnInit {

  items: Inventory[] = [];
  isEditMode: boolean = false;
  constructor(private inventory: InventoryService, private router: Router) { }
  item: Inventory = {
    id: 0,
    name: '',
    quantity: 0,
    price: 0,
    category: '',
    supplier: '',
    description: ''
  };
  
  addItem() {
    if (this.isEditMode) {
      // Update existing item
      const index = this.items.findIndex(i => i.id === this.item.id);
      if (index !== -1) {
        this.items[index] = { ...this.item };
      }
      this.isEditMode = false;
    } else {
      // Add new item
      const newItem: Inventory = {
        ...this.item,
        id: this.items.length > 0 ? this.items[this.items.length - 1].id + 1 : 1
      };
      this.items.push(newItem);
    }

    // Reset form
    this.item = {
      id: 0,
      name: '',
      quantity: 0,
      price: 0,
      category: '',
      supplier: '',
      description: ''
    };

    // Close modal
    const modal = document.getElementById('addInventoryModal');
    if (modal) {
      const modalInstance =
        (window as any).bootstrap.Modal.getInstance(modal) ||
        new (window as any).bootstrap.Modal(modal);
      modalInstance.hide();
    }
  }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.items = this.inventory.getItems()
  }

  deleteItem(id: number) {
    this.inventory.delete(id);
    this.getData();
  }

  openEditModal(item: Inventory) {
    this.isEditMode = true;
    this.item = { ...item }; // Clone item into form
    const modal = new (window as any).bootstrap.Modal(
      document.getElementById('addInventoryModal')
    );
    modal.show();
  }


}
