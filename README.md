# Instructions (Español abajo)

## API

In the `API` folder create a file called `.env` with the following contents:

```
DB_USER=postgresuser
DB_PASSWORD=postgrespassword
DB_HOST=localhost
PORT = 5000
```

Replace `postgresuser` and `postgrespassword` with your own credentials to connect to postgres. 

If no `PORT` is defined 5000 will be the default.

__IMPORTANT__: If you choose a port other than 5000, make sure you use the same for the `.env` in the front folder.

You will also need to create with psql a database called `techtask`.

### **Start the Server**

To start the server use the following commands:

#### `npm install`

This will install the dependencies required by the server.

#### `npm start`

This will start the server using nodemon in the port defined in the .env file.

## Front

Created using create-react-app.

In the `front` folder create a file called `.env` with the following contents:

```
REACT_APP_API=http://localhost:5000
```

__IMPORTANT__: If you changed the port of the server, make sure you write the same one in `REACT_APP_API`

### **Start the App**

To start the App use the following commands:

#### `npm install`

This will install the dependencies required by the App.

#### `npm start`

Runs the app in the development mode in [http://localhost:3000]

<br>

----------

<br>


# Instrucciones

## API

Crear en la carpeta `API` una archivo llamado `.env` con el siguiente contenido:

```
DB_USER=postgresuser
DB_PASSWORD=postgrespassword
DB_HOST=localhost
PORT = 5000
```

Reemplazar `postgresuser` y `postgrespassword` con tus credenciales para conectar a postgres. 

Si `PORT` no es definido, 5000 será el valor por defecto.

__IMPORTANTE__: Si eliges un puerto diferente al 5000, asegurate de usar el mismo en el `.env` de la carpeta front.

También necesitaras crear con psql una base de datos llamada `techtask`.

### **Iniciar el servidor**

Para iniciar el servidor usa los siguientes comandos:

#### `npm install`

Instalará las dependencias necesarias para el servidor.

#### `npm start`

Iniciará el servidor usando nodemos en el puerto definido en el `.env`.

## Front

Creado usando create react app

En la carpeta `front` creat un archivo llamado `.env` con los siguientes contenidos:

```
REACT_APP_API=http://localhost:5000
```

__IMPORTANTE__: Si cambiaste el puerto del servidor, asegurate de escribir el mismo en `REACT_APP_API`

### **Iniciar la aplicación**

Para iniciar la aplicación usa los siguientes comandos:

#### `npm install`

Instalará las dependencias necesarias para el proyecto.

#### `npm start`

Inicia la aplicación en modo de desarrollo en [http://localhost:3000]