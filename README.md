# Universal-Database-Connection
This is the first package i have ever made.

This package can make it easier to connect to databases without having to go through the trouble of finding the documentation to connect.

First you download the package
```npm i universal-database-connection```

then import the package

```
const createDatabaseConnection = require('universal-database-connection')
```

How to connect to the database (Postgres, Firebase)
-
- Postgres Connection
```
const createDatabaseConnection = require("universal-database-connection/createDatabaseConnection");
  const databaseOptions = {
    host: 'databasehost',
    database: 'databasename',
    password: 'databasepassword',
    port: databaseport,
};

createDatabaseConnection("postgres", databaseOptions);
```

- Firebase Connection
```
const createDatabaseConnection = require("universal-database-connection/createDatabaseConnection");
const databaseOptions = {
  firebaseConfig: {
    apiKey: "apiKey",
    authDomain: "authDomain",
    projectId: "projectId",
    storageBucket: "storageBucket",
    messagingSenderId: "messagingSenderId",
    appId: "appId",
    measurementId: "measurementId"
  }
}
```

Remember to change the databaseOptions properties to your host, database, password, port and firebaseConfig information.