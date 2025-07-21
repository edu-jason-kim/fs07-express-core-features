let products = [
  { id: 1, name: 'Keyboard', price: 20_000 },
  { id: 2, name: 'Mouse',    price: 15_000 },
];

// 실제 DB로 접근하는 로직들
// ** 철저하게 DB 접근외 아무런 로직도 수행하지 않음 **
// 부가적인 처리는 Service layer에서 수행 (validation 등)
export default {
  findAll () { return products },
  findById (id) { return products.find(p => p.id === id) }
  // ... create, update, remove 등등
}
