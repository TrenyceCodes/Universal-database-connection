const createDatabaseConnection = require("./createDatabaseConnection");

const databaseOptions = {
    firebaseConfig: {
        apiKey: "AIzaSyCgnOM5rd-ZFDvzAszPHx5LZ4GoG0Y_9cw",
        authDomain: "universal-database-connection.firebaseapp.com",
        projectId: "universal-database-connection",
        storageBucket: "universal-database-connection.appspot.com",
        messagingSenderId: "723805083172",
        appId: "1:723805083172:web:e62b2ac7a8b2810aee2ab1",
        measurementId: "G-5VWNPXHQFJ"
    }
};

createDatabaseConnection("firebase", databaseOptions);