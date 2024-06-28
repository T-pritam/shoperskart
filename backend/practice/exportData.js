// exportData.js

const fs = require('fs');
const { MongoClient } = require('mongodb');

// Connection URI and Database Name
const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB connection URI
const dbName = 'EcommDB'; // Replace with your database name
const collectionName = 'reviews'; // Replace with your collection name

// Function to fetch data from MongoDB and save to JSON file
async function exportData() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    // Fetch all documents from the collection
    const documents = await collection.find({}).toArray();

    // Write documents to JSON file
    fs.writeFileSync(collectionName+'.json', JSON.stringify(documents, null, 2));

    console.log('Data exported successfully to exportedData.json');
  } catch (error) {
    console.error('Error exporting data:', error);
  } finally {
    await client.close();
  }
}

// Call the exportData function to start the export process
exportData();
