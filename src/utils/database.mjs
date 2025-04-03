const databaseType = {
    userType: "admin",
    typeData: "dataLocal"
}

async function connectToDatabase(dataName) {
    // Lógica de conexão
    console.log(`Conectado ao banco ${dataName}`)
}

async function disconnectDatabase(){
    console.log("Desconectando do banco de dados")
}

export {
    connectToDatabase, disconnectDatabase, databaseType
}