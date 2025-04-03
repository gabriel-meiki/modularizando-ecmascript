// import connectToDatabase from "./utils/database.mjs"
// Pode usar as extensões tanto .js quanto .mjs
// .mjs só é usado para identificar que o arquivo é um módulo javascript, mas opcional por empresas
// .cjs só é usado para identificar que o arquivo é um módulo javascript usando commoonJS, normalmente visto em projetos legados (antigos)

// import * as database from "./utils/database.mjs"
// Importando tudo

import {connectToDatabase, databaseType} from "./utils/database.mjs";

import * as api from "./utils/api.js"

connectToDatabase('MyDataBase')

console.log(databaseType);

api.getDataFromApi()


// database.disconnectDatabase();
// usado o prefixo database. caso importar tudo do módulo referenciado