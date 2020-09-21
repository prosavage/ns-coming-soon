import { Db, MongoClient } from "mongodb";

const withDatabase = async () => {
    const client: MongoClient = new MongoClient(process.env.DB_URL);
    const connected = await client.connect()
    console.log("Connected to database.")
    const db = client.db("ns-coming-soon")
    return db;
}

export default withDatabase;