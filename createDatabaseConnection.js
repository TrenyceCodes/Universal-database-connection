const { Sequelize } = require("sequelize");
const { initializeApp } = require("firebase-admin/app");

//createDatabaseConnection
const createDatabaseConnection = (databaseType, databaseOptions) => {
    switch (databaseType) {
        case 'postgres':
            return createPostgresConnection(databaseOptions.host, databaseOptions.port, databaseOptions.database);
        case 'firebase':
            return createFirebaseConnection(databaseOptions.firebaseConfig);
        default:
            console.log('Database type not supported.');
            break;
    }
}

function createPostgresConnection(host, port, database) {
    let connection = new Sequelize(`postgres://postgres:@${host}:${port}/${database}`);
    return new Promise((resolve, reject) => {
        connection.sync().then(() => {
            console.log('Postgres Database Synced');
            connection.authenticate();
            resolve(connection);
        }).catch(reject);
    });
}

function createFirebaseConnection(firebaseConfig) {
    return new Promise((resolve, reject) => {
      const app = initializeApp(firebaseConfig);
      if (app) {
        console.log("Firebase is connected");
        resolve(app);
      } else {
        console.log("Firebase is not connected");
        reject("Firebase connection is not established");
      }
    });
}  

module.exports = createDatabaseConnection;