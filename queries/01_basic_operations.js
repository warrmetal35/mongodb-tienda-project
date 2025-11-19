/**
 * CONSULTAS BÁSICAS - OPERACIONES CRUD
 */

use tienda

// 1. VERIFICACIÓN
db.products.countDocuments()

// 2. INSERCIÓN
db.products.insertOne({
  "id": 21,
  "title": "Nuevo Producto de Prueba",
  "price": 49.99,
  "description": "Este es un producto de prueba insertado mediante MongoDB",
  "category": "electronics",
  "image": "https://ejemplo.com/imagen.jpg",
  "rating": { "rate": 4.5, "count": 50 }
})

// 3. SELECCIÓN
db.products.find()
db.products.find({}, {title: 1, price: 1, category: 1})
db.products.find().limit(5)

// 4. ACTUALIZACIÓN
db.products.updateOne(
  {id: 1},
  {$set: {price: 119.95}}
)

db.products.updateMany(
  {category: "electronics"},
  {$mul: {price: 1.1}}
)

// 5. ELIMINACIÓN
db.products.deleteOne({id: 21})
db.products.deleteMany({price: {$lt: 10}})
