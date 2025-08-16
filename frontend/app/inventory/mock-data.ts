// src/app/models/mock-inventory.ts
import { Inventory } from "./models/inventory";

export const INVENTORY_DATA: Inventory[] = [
  { id: 1, name: 'Laptop', quantity: 10, price: 1500, category: 'Electronics', supplier: 'Tech Corp', description: 'High-end business laptop' },
  { id: 2, name: 'Mouse', quantity: 50, price: 20, category: 'Accessories', supplier: 'Gadget Supply', description: 'Wireless mouse' },
  { id: 3, name: 'Keyboard', quantity: 30, price: 40, category: 'Accessories', supplier: 'Gadget Supply', description: 'Mechanical keyboard' },
  { id: 4, name: 'Monitor', quantity: 15, price: 200, category: 'Electronics', supplier: 'Display World', description: '24-inch Full HD Monitor' }
];
