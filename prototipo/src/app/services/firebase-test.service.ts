import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  updateDoc,
  deleteDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class FirebaseTestService {
  private firestore = inject(Firestore);
  private collectionName = 'items';

  getItems(): Observable<Item[]> {
    const itemsRef = collection(this.firestore, this.collectionName);
    return collectionData(itemsRef, { idField: 'id' }) as Observable<Item[]>;
  }

  addItem(item: Item): Promise<any> {
    const itemsRef = collection(this.firestore, this.collectionName);
    return addDoc(itemsRef, {
      name: item.name,
      description: item.description,
      quantity: item.quantity
    });
  }

  updateItem(item: Item): Promise<void> {
    if (!item.id) throw new Error("Item sin ID no puede actualizarse");

    const itemRef = doc(this.firestore, `${this.collectionName}/${item.id}`);
    
    // ⚡ Crear objeto plano sin 'id'
    const updateData = {
      name: item.name,
      description: item.description,
      quantity: item.quantity
    };

    return updateDoc(itemRef, updateData);
  }

  deleteItem(id: string): Promise<void> {
    const itemRef = doc(this.firestore, `${this.collectionName}/${id}`);
    return deleteDoc(itemRef);
  }
}
