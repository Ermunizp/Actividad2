// src/app/app.ts
import { Component } from '@angular/core';
import { ItemListComponent } from './components/item-lists/item-list';

@Component({
  selector: 'app-root',
  template: `
    <h1>Prototipo</h1>
    <app-item-list></app-item-list>
  `,
  standalone: true,
  imports: [ItemListComponent]
})
export class App {}
