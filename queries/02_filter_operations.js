/**
 * CONSULTAS CON FILTROS Y OPERADORES
 */

use tienda

// 1. FILTROS POR PRECIO
db.products.find({price: {$gt: 150}})
db.products.find({price: {$gte: 80, $lte: 200}})
db.products.find({price: 119.95})

// 2. FILTROS POR CATEGORÍA Y TEXTO
db.products.find({category: "electronics"})
db.products.find({$text: {$search: "Women"}})
db.products.find({title: {$regex: "jacket", $options: "i"}})

// 3. OPERADORES LÓGICOS
db.products.find({
  $and: [
    {category: "electronics"},
    {price: {$gt: 500}}
  ]
})

db.products.find({
  $or: [
    {category: "men's clothing"},
    {category: "women's clothing"}
  ]
})

// 4. FILTROS EN DOCUMENTOS EMBEBIDOS
db.products.find({"rating.rate": {$gt: 4}})

db.products.find({
  $and: [
    {"rating.rate": {$gt: 4}},
    {"rating.count": {$gt: 300}}
  ]
})
