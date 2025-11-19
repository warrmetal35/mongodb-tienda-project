# Diseño de la Base de Datos

## Caso de Uso
Catálogo de productos para tienda online

## Esquema MongoDB
- Base de datos: tienda
- Colección: products

## Estructura del Documento
```javascript
{
  "id": 1,
  "title": "Nombre del producto",
  "price": 109.95,
  "description": "Descripción del producto",
  "category": "men's clothing",
  "image": "https://ejemplo.com/imagen.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
