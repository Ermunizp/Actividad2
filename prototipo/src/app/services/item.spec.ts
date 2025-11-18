import { Item } from './item';

describe('Item', () => {
  let item: Item;

  beforeEach(() => {
    item = { name: 'Prueba', description: 'Descripción', quantity: 1 };
  });

  it('should be created', () => {
    expect(item).toBeTruthy();
    expect(item.name).toBe('Prueba');
    expect(item.quantity).toBe(1);
  });
});
