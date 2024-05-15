const { MongoClient, ObjectId } = require('mongodb');

const client = new MongoClient(String(process.env.MONGO_URI), {
    // tls: true,
    // tlsCAFile: require('path').resolve(__dirname, './root.crt'),
});

export const database = client.db(String(process.env.MONGO_DATABASE));

export { ObjectId };

export const Files = database.collection('files');
export const Users = database.collection('users');
// export const Resumes = database.collection('resumes');

client.connect().catch((error) => {
    console.log(error);
    process.exit(1);
});
