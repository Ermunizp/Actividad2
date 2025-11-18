// src/app/components/item-lists/item-list.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../../services/item';
import { FirebaseTestService } from '../../services/firebase-test.service';
import { ItemFormComponent } from '../item-forms/item-form';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, ItemFormComponent],
  templateUrl: './item-list.html',
  styleUrls: ['./item-list.css']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  selectedItem: Item = { name: '', description: '', quantity: 0 };

  constructor(private firebaseService: FirebaseTestService) {}

  ngOnInit(): void {
    this.firebaseService.getItems().subscribe((data: Item[]) => {
      this.items = data;
    });
  }

  editItem(item: Item) {
    this.selectedItem = { ...item };
  }

  deleteItem(id: string) {
    this.firebaseService.deleteItem(id).catch(err => console.error(err));
  }
}
