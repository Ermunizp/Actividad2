// src/app/services/item.ts
export interface Item {
  id?: string;
  name: string;
  description: string;
  quantity: number;
  available?: boolean;  // nuevo campo checkbox
  category?: string;    // nuevo campo combo box
}
