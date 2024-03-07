## Instalación de dependencias:

Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo e instalarlo desde ```Node.js website```.

Luego, ejecuta el siguiente comando para instalar las dependencias necesarias:

```
npm install axios commander
```

## Cliente CLI:

Guarda el código proporcionado en un archivo con nombre ``` cli.js ``` en tu proyecto.

## Ejecución:
Desde la línea de comandos, navega hasta el directorio donde guardaste el archivo ```cli.js``` y ejecuta el cliente CLI con el siguiente comando:
```
node cli.js <comando>
```
Reemplaza ```<comando>``` con uno de los siguientes comandos:
```
listar: Para obtener la lista de usuarios.
eliminar <id>: Para eliminar un usuario por su ID.
crear <nombre> <apellido> <correo>: Para crear un nuevo usuario.
```
### Por ejemplo:

``` 
node cli.js listar
node cli.js eliminar 1
node cli.js crear Juan Camacho juan@example.com
```
