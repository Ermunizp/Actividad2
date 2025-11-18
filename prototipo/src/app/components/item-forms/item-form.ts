import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Item } from '../../services/item';
import { FirebaseTestService } from '../../services/firebase-test.service';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-form.html',
  styleUrls: ['./item-form.css']
})
export class ItemFormComponent {

  @Input() item: Item = { 
    name: '', 
    description: '', 
    quantity: 0,
    available: false,
    category: '' 
  };

  categories: string[] = ['Electrónica', 'Ropa', 'Alimentos', 'Otros']; 

  constructor(private firebaseService: FirebaseTestService) {}

  saveItem() {
    console.log("🔵 Evento: submit ejecutado");

    if (this.item.id) {
      this.firebaseService.updateItem(this.item)
        .then(() => this.resetForm())
        .catch(err => console.error(err));
    } else {
      this.firebaseService.addItem(this.item)
        .then(() => this.resetForm())
        .catch(err => console.error(err));
    }
  }

  onCheckboxChange(event: any) {
    console.log("🟢 Checkbox cambiado:", event.target.checked);
  }

  resetForm() {
    console.log("🟡 Reseteando formulario");
    this.item = { name: '', description: '', quantity: 1, available: false, category: '' };
  }
}
