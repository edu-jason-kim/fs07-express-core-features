let products = [
  { id: 1, name: 'Keyboard', price: 20_000 },
  { id: 2, name: 'Mouse',    price: 15_000 },
];

// 실제 DB로 접근하는 로직들
export default {
  findAll () { return products },
  findById (id) { return products.find(p => p.id === id) }
  // ... create, update, remove 등등
}
