# Proyecto Biblioteca Pública  
Este proyecto es una aplicación web que simula el funcionamiento de una biblioteca.

## Descripción

- **Carga inicial**  
  Simula la lectura asíncrona de un “JSON” en memoria con libros precargados.  
  Muestra tres columnas:  
  - **Disponible**: libros que pueden prestarse.  
  - **Prestado**: libros actualmente prestados.  
  - **Inventario**: listado completo, solo lectura.  

- **Gestión de libros**  
  - **Agregar libro**: abre un formulario, valida campos y añade el libro como “Disponible”.  
  - **Prestar/Devolver**: cada tarjeta tiene un botón para alternar su estado; al pulsarlo, se simula una escritura asíncrona y se refresca la vista.  

- **Interfaz**  
  HTML semántico + CSS minimalista para layout en columnas y estilos de tarjeta.  
  JavaScript vanilla con callbacks y `setTimeout()` para simular operaciones E/S asíncronas.

## Instalación

1. Clona el repositorio  
   ```bash
   git clone https://github.com/tu-usuario/biblioteca-publica.git


![Interfaz principal – Biblioteca Pública](https://i.postimg.cc/4nCx3P8x/1.png)  
![Formulario de añadir libro](https://i.postimg.cc/668VyQHk/2.png)  
![Libros disponibles y prestados](https://i.postimg.cc/pV3f8t4p/3.png)  
![Vista de inventario completo](https://i.postimg.cc/vZs5qtQy/4.png)  


