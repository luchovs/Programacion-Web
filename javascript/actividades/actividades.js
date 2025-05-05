let inventario = [];

inventario.push({
  nombre: "Auriculares",
  precio: 1500,
  categoria: "Electronica",
});
inventario.push({ nombre: "Silla", precio: 7000, categoria: "Muebles" });
inventario.push({ nombre: "Celular", precio: 50000, categoria: "Electronica" });
inventario.push({ nombre: "Libro", precio: 1200, categoria: "Libreria" });

console.log("Todos los productos:");
inventario.forEach((producto) => {
  console.log(producto);
});

let electronica = inventario.filter(
  (producto) => producto.categoria === "Electronica"
);

console.log("\n Productos de Electronica:");
electronica.forEach((producto) => {
  console.log(producto);
});

let nombres = inventario.map((producto) => producto.nombre);

console.log("\n Nombre de todos los productos:");
console.log(nombres);
