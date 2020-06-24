class MongoService{
    constructor(client){
        this.client =client;
    }

    async getDatabases(){
        const databases = await this.client.db().admin().listDatabases();
        return databases;
    }

    async getDatabasesCollections(databaseName){
        const collections= await this.client.db(databaseName).listCollections().toArray();
        return collections;
    }

    async getCollectionsDocuments(databaseName, collectionName){
        const collectionDocuments = await this.client.db(databaseName).collection(collectionName).find({}).toArray();
        return collectionDocuments;
    }
}

module.exports = MongoService;