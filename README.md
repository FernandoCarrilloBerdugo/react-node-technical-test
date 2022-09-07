# Instructions (Español abajo)

## API

In the `API` folder create a file called `.env` with the following contents:

```
DB_USER=postgresuser
DB_PASSWORD=postgrespassword
DB_HOST=localhost
PORT = 5000
```

Replace `postgresuser` and `postgrespassword` with your own credentials to connect to postgress. This file will be ignored when uploading to github. 

If no `PORT` is defined 5000 will be the default.

__IMPORTANT__: If you choose a port other than 5000, make sure you use the same for the .env in the front folder.

You also will need to create with psql a database called `techtask`.

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

To start the server use the following commands:

#### `npm install`

This will install the dependencies required by the App.

#### `npm start`

Runs the app in the development mode in [http://localhost:3000]