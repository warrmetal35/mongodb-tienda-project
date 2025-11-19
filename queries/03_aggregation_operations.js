/**
 * CONSULTAS DE AGREGACIÓN
 */

use tienda

// 1. ESTADÍSTICAS BÁSICAS POR CATEGORÍA
db.products.aggregate([
  {
    $group: {
      _id: "$category",
      totalProductos: {$sum: 1},
      precioPromedio: {$avg: "$price"},
      precioMaximo: {$max: "$price"},
      precioMinimo: {$min: "$price"},
      sumaPrecios: {$sum: "$price"}
    }
  },
  {
    $sort: {precioPromedio: -1}
  }
])

// 2. ESTADÍSTICAS DE RATING POR CATEGORÍA
db.products.aggregate([
  {
    $group: {
      _id: "$category",
      ratingPromedio: {$avg: "$rating.rate"},
      totalReviews: {$sum: "$rating.count"},
      productoMejorCalificado: {$max: "$rating.rate"},
      productoPeorCalificado: {$min: "$rating.rate"}
    }
  },
  {
    $sort: {ratingPromedio: -1}
  }
])

// 3. PRODUCTOS MÁS CAROS POR CATEGORÍA
db.products.aggregate([
  {
    $sort: {price: -1}
  },
  {
    $group: {
      _id: "$category",
      productoMasCaro: {$first: "$title"},
      precioMaximo: {$first: "$price"},
      ratingProductoMasCaro: {$first: "$rating.rate"}
    }
  }
])

// 4. DISTRIBUCIÓN DE PRECIOS
db.products.aggregate([
  {
    $bucket: {
      groupBy: "$price",
      boundaries: [0, 25, 50, 100, 200, 500, 1000],
      default: "Above1000",
      output: {
        count: {$sum: 1},
        productos: {$push: "$title"},
        precioPromedio: {$avg: "$price"}
      }
    }
  }
])
