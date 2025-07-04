import { MongoClient, ServerApiVersion } from "mongodb";

let db;

const connectDB = async () => {
if (db) {
    return db
}
try {
    
    const uri = process.env.NEXT_PUBLIC_MongoDB_URI;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true,
    }
})
db = client.db('next-intro2')
return db
} catch (error) {
    console.log(error);
}
};

export default connectDB;