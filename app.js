/*
🧠 Lógica principal del JavaScript
Gestiona la lectura/escritura simulada y renderiza la UI.
*/

/*
🧩 Pasos del proyecto
1.- Simular lectura asíncrona (leerBiblioteca).
2.- Simular escritura asíncrona (guardarBiblioteca).
3.- Mostrar/ocultar formulario.
4.- Agregar libro.
5.- Cambiar estado de libro.
6.- Renderizar UI.
*/

// Paso 1: Base de datos simulada en memoria
let biblioteca = [
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Realismo mágico", disponible: true },
  { titulo: "1984", autor: "George Orwell", genero: "Distopía", disponible: false }
];

// Paso 2: Simula lectura asíncrona con callback
function leerBiblioteca(callback) { // callback: función que se ejecuta tras la lectura
  setTimeout(() => callback(biblioteca), 500);
}

// Paso 3: Simula escritura asíncrona con callback
function guardarBiblioteca(callback) { // callback: función que se ejecuta tras guardar
  setTimeout(() => callback(biblioteca), 500);
}

// Paso 4: Mostrar formulario
function mostrarFormulario() {
  document.getElementById("formulario").classList.remove("oculto"); // form: elemento <form> del DOM
}

// Paso 5: Ocultar formulario y limpiar campos
function cancelarFormulario() {
  const form = document.getElementById("formulario"); // form: formulario a ocultar
  form.classList.add("oculto");
  document.getElementById("titulo").value = "";
  document.getElementById("autor").value = "";
  document.getElementById("genero").value = "";
}

// Paso 6: Agregar un nuevo libro (siempre disponible)
function agregarLibro() {
  const titulo = document.getElementById("titulo").value.trim();
  const autor = document.getElementById("autor").value.trim();
  const genero = document.getElementById("genero").value.trim();

  if (!titulo || !autor || !genero) {
    alert("Por favor completa todos los campos.");
    return;
  }

  const nuevoLibro = { titulo, autor, genero, disponible: true }; // nuevoLibro: objeto libro con estado inicial
  biblioteca.push(nuevoLibro); // biblioteca: arreglo de libros en memoria

  guardarBiblioteca(() => { // callback: tras guardar, refresca vista
    cancelarFormulario(); // form: cierra formulario
    renderizarLibros();
  });
}

// Paso 7: Renderizar libros en columnas
function renderizarLibros() {
  const zonaDisp = document.getElementById("disponible"); // zonaDisp: columna de libros disponibles
  const zonaPres = document.getElementById("prestado"); // zonaPres: columna de libros prestados
  const zonaInv = document.getElementById("inventario"); // zonaInv: columna de inventario completo

  zonaDisp.innerHTML = "";
  zonaPres.innerHTML = "";
  zonaInv.innerHTML = "";

  biblioteca.forEach((libro, index) => { // index: posición del libro en el arreglo
    const tarjeta = document.createElement("div"); // tarjeta: contenedor visual de cada libro
    tarjeta.className = "tarjeta";
    tarjeta.innerHTML = `
      <strong>${libro.titulo}</strong><br>
      Autor: ${libro.autor}<br>
      Género: ${libro.genero}<br>
    `;

    const btn = document.createElement("button"); // btn: botón para cambiar estado
    if (libro.disponible) {
      btn.textContent = "Prestar 📕";
      btn.onclick = () => {
        biblioteca[index].disponible = false;
        guardarBiblioteca(renderizarLibros); // callback: refresca vista
      };
      zonaDisp.appendChild(tarjeta);
    } else {
      btn.textContent = "Devolver 📗";
      btn.onclick = () => {
        biblioteca[index].disponible = true;
        guardarBiblioteca(renderizarLibros); // callback: refresca vista
      };
      zonaPres.appendChild(tarjeta);
    }

    tarjeta.appendChild(btn);

    const tarjetaInv = tarjeta.cloneNode(true); // tarjetaInv: copia de tarjeta para Inventario
    tarjetaInv.querySelector("button").disabled = true;
    zonaInv.appendChild(tarjetaInv);
  });
}

// Paso 8: Iniciar lectura y renderizado
leerBiblioteca(renderizarLibros); // callback: arranca renderizado