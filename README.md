# Repositorio del Trabajo Final de Graduación de Licenciatura en Informatica

# Titulo
Sistema de gestión de alquiler de vestimenta casual para vacaciones

# Configuración

### Incluye:
- Firebase configuración
- Authentication
- Database: Recuperar y enviar datos
- Cloud Storage: Cargue el archivo y guárdelo en la base de datos

### Comenzando
- Crea tu proyecto de Firebase en `http://console.firebase.google.com`.
- Copiar la configuración en el tablero **Configuración Web** y pegar a `firebase.js`.
- Clonar proyectos e instalar dependencias.
```
> git clone 
> cd react-firebase
> npm install
```

### Autenticación
Ver documentación [Firebase Authentication](https://firebase.google.com/docs/auth/web/start).
`firebase.auth()`

El método de inicio de sesión está utilizando `GoogleAuthProvider` con una ventana emergente. Cuándo se llama a `ComponentDidMount`,
`auth.onAuthStateChanged` escuchará el estado actual del usuario de autenticación. Cuando el usuario inicia sesión, se establecerá el estado del usuario en el componente.

### Base de Datos
Ver documentación [Firebase Authentication](https://firebase.google.com/docs/auth/).
`firebase.database()`

Creado inicialmente un objeto `guides` como nuestra primera colección para impulsar nuestros datos. El `guidesRef` es la base de datos de referencia para el `guides` objeto en firebase.
Al presionar los nuevos datos también se agregará la identificación de usuario actual, que creó los datos.

### Cloud Storage
Ver documentación [Firebase Storage](https://firebase.google.com/docs/storage/web/start).
`firebase.storage()`

Tenemos entrada de archivo para aceptar imágenes.(`png|gif|jpeg`),
`onChange` cargará el archivo primero en la referencia de almacenamiento dada y luego obtendrá la ruta del archivo y lo guardará en `users` en la base de datos.
También podemos escuchar los cambios de estado mientras se carga el archivo, lo que puede mostrar el porcentaje del progreso de la carga.

### Proceso de implementación con firebase
1. Instalar **Firebase Tools** globalmente.
```
> npm install -g firebase-tools
```
2. Inicie sesión en firebase usando esta herramienta en CLI
```
> firebase login
```
3. CD a su proyecto de trabajo e inicialice firebase.
```
> cd react-firebase
> firebase init
```
4. Configurar firebase:
- Permitir funciones de CLI para **Database**, **Hosting**.
- Seleccione su proyecto de Firebase que se utilizará.
- Acepte las reglas predeterminadas para escribir en el archivo predeterminado`database.rules.json`
- Instalar dependencias.
- Elegir `build` directorio de nombres desde que creamos nuestra aplicación.
- Seleccionar **Yes** para configurar una sola página de aplicación. Esto también es adecuado cuando la aplicación está usando `react-router`.
- **Firebase inicialización completa!**

5. Luego, crearemos nuestra aplicación.
```
> npm build
```
6. Desplegar!
```
> firebase deploy
```

# Link de vista previa al sitio web (en construcción)
https://rtmreservation.web.app/

# Autor
Adrián Matías Dominguez
