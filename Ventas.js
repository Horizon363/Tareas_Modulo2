const productos = [
    { nombre: "Aqua", precio: 200 },
    { nombre: "Emoción", precio: 180 },
    { nombre: "Alegría", precio: 160 },
    { nombre: "Frescura", precio: 150 }
  ];
  
  const vendedorJuana = {
    nombre: "Juana",
    ventas: [0, 0, 0, 0], 
    total: 0 
  };
  
  const vendedorPedro = {
    nombre: "Pedro",
    ventas: [0, 0, 0, 0], 
    total: 0 
  };
  
  function registrarVenta(vendedor, productoIndex, cantidad) {
    if (isNaN(cantidad)) {
      console.log("Error: Ingresa un valor numérico válido.");
      return;
    }
    
    const producto = productos[productoIndex];
    const ventaTotal = producto.precio * cantidad;
    
    vendedor.ventas[productoIndex] += cantidad;
    vendedor.total += ventaTotal;
  }
  
  function empleadoDelMes() {
    if (vendedorJuana.total > vendedorPedro.total) {
      return vendedorJuana.nombre;
    } else if (vendedorPedro.total > vendedorJuana.total) {
      return vendedorPedro.nombre;
    } else {
      return "Empate";
    }
  }
  
  // Posibles ventas
  registrarVenta(vendedorJuana, 0, 3); 
  registrarVenta(vendedorPedro, 2, 2); 

  console.log("Ventas de Juana:", vendedorJuana.ventas);
  console.log("Total de Juana:", vendedorJuana.total);
  console.log("Ventas de Pedro:", vendedorPedro.ventas);
  console.log("Total de Pedro:", vendedorPedro.total);
  console.log("Empleado del mes:", empleadoDelMes());
  