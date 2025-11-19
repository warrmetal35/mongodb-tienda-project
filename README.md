 🛍️ Proyecto MongoDB - Sistema de Tienda Online

## 📋 Descripción
Este proyecto implementa una base de datos MongoDB para gestionar un catálogo completo de productos de una tienda online. El sistema demuestra las ventajas de utilizar bases de datos NoSQL para aplicaciones de comercio electrónico, donde la flexibilidad en el esquema de datos y el rendimiento en consultas son cruciales.

## 🎯 Objetivos del Proyecto
- Demostrar el uso de MongoDB en un caso real de tienda online
- Implementar operaciones CRUD completas
- Realizar consultas avanzadas con filtros y operadores
- Aplicar pipelines de agregación para análisis de datos
- Documentar el diseño y estructura de la base de datos

## 🏗️ Arquitectura del Proyecto

### Base de Datos
- **Nombre**: `tienda`
- **Colección**: `products`
- **Documentos**: productos con datos realistas

### Esquema de Documentos
```javascript
{
  "id": 1,
  "title": "Nombre del producto",
  "price": 109.95,
  "description": "Descripción detallada",
  "category": "men's clothing",
  "image": "https://ejemplo.com/imagen.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
