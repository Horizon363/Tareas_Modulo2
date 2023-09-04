function cambiarSemáforo() {
    const semaforo = document.getElementById("semaforo");
  
    console.log("Verde");
    semaforo.style.backgroundColor = "green";
    setTimeout(() => {
      console.log("Amarillo");
      semaforo.style.backgroundColor = "yellow";
      
      setTimeout(() => {
        console.log("Rojo");
        semaforo.style.backgroundColor = "red";
  
        setTimeout(() => {
          console.log("Verde");
          semaforo.style.backgroundColor = "green";
          cambiarSemáforo(); 
        }, 2000); 
      }, 2000); 
    }, 2000); 
  }
  
  cambiarSemáforo();
  