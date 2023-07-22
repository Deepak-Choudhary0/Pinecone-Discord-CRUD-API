// app.ts
import express, { Request, Response } from 'express';
const { request } = require('undici');
import { MongoClient } from 'mongodb';

const app = express();
const { clientId, clientSecret, port } = require('./config.json');

const mongoURI = `mongodb://127.0.0.1:27017`;
const redirectUri = 'http://localhost:53134/callback';
const connectToMongoDB = async () => {
  try {
    const client = await MongoClient.connect(mongoURI);
    const db =client.db('discord_project');
    console.log('Connected to MongoDB database discord_project.');

    //try
    const collectionName = 'data';
    const collectionExists = await db.listCollections({ name: collectionName }).hasNext();

    if (collectionExists) {
        console.log(`The collection '${collectionName}' exists in the 'person' database.`);
        
        const collection = db.collection(collectionName);
        
    // // CRUD on MongoDB

    // // // Create data

    //   // Single document insertion
    //   const document = { name: 'John Doe', age: 30 };
    //   const result = await collection.insertOne(document);
    //   console.log('Inserted document ID:', result.insertedId);

    //   // Multiple document insertion
    //   var documents = [
    //     { name: 'Jane Smith', age: 25 },
    //     { name: 'Mike Johnson', age: 35 },
    //   ];
    //   const results = await collection.insertMany(documents);
    //   console.log('Inserted document IDs:', results.insertedIds);

    //Reading Part
        var documents = await collection.find().toArray();
        console.log('\nAll documents:',documents.length,'\n');

        //Get keys for index 0, as other keys gonna be same too for other indixes
        const keys = Object.keys(documents[0]);

        // Iterate through the object properties
        for (let i=0;i<documents.length;i++){
            console.log(`Data ID: ${i}`);
            for (const row in keys){
                let key=keys[row];
                console.log(`==> ${key} : ${documents[i][key]}`);
            }
        };

    // // Update
    //   const documentToUpdate = { _id: documents[0][keys[0]] };
    //   const updateFields = { $set: { age: 40 } };
    //   const updateResult = await collection.updateOne(documentToUpdate, updateFields);
    //   console.log('\nUpdated document count:', updateResult.modifiedCount,'\n');

    //   console.log('Updated Data:');

    //   //Get data again from DB
    //   documents = await collection.find().toArray();
    //   for (x in keys){
    //     key=keys[x];
    //     console.log(`==> ${key} : ${documents[0][key]}`);
    //   }

    // // Delete
    //   const documentToDelete = { _id: documents[0][keys[0]] }; // Replace <documentId> with the actual document ID
    //   const deleteResult = await collection.deleteOne(documentToDelete);
    //   console.log('\nDeleted document count:', deleteResult.deletedCount,'\n');

    //   console.log('Data after deletion:');

    //   //Get data again from DB
    //   documents = await collection.find().toArray();
    //   for (let i=0;i<documents.length;i++){
    //     console.log(`Data ID: ${i}`);
    //     for (x in keys){
    //       key=keys[x];
    //       console.log(`==> ${key} : ${documents[i][key]}`);
    //     }
    //   };

    // //Query
    //   const query = { age: { $gte: 35 } }; // Example query to find documents with age greater than or equal to 30
    //   const documentsMatching = await collection.find(query).toArray();
    //   if (documentsMatching.length > 0) {
    //     console.log('\nMatching documents:',documentsMatching.length,'\n');
    //     for (let i=0;i<documentsMatching.length;i++){
    //       console.log(`Matching ID: ${i}`);
    //       for (x in keys){
    //         key=keys[x];
    //         console.log(`==> ${key} : ${documentsMatching[i][key]}`);
    //       }
    //     };
    //   } else {
    //     console.log('No matching documents found.');
    //   }
    // } 
    // else {
    //   console.log(`The collection '${collectionName}' does not exist in the 'person' database.`);
    // }

    // // Middleware to parse JSON bodies
    // app.use(express.json());

    // // Sample data
    // let users = [
    //   { id: 1, name: 'John Doe', age: 17 },
    //   { id: 2, name: 'Jane Smith', age: 26 }
    // ];

    // // Route handler for GET /person
    // app.get('/person', (req, res) => {
    //   res.json(users);
    // });

    // // Route handler for POST /person
    // app.post('/person', (req, res) => {
    //   // const { name, age } = req.body;
    //   id = users.length + 1;
    //   let name='deepak';
    //   let age =30;
    //   const newPerson = { id, name, age };
    //   users.push(newPerson);
    //   res.redirect('/person');
    // });

    // // GET /person/:id - Display a form to edit a person with a specified ID
    // app.get('/person/:id', (req, res) => {
    //   const id = parseInt(req.params.id);
    //   const person = users.find(p => p.id === id);
    //   if (!person) {
    //     res.status(404).json({ error: 'Person not found' });
    //     return;
    //   }
    //   res.json(person);
    // });

    // // PUT /person/:id - Update a person with a specified ID
    // app.put('/person/:id', (req, res) => {
    //   const id = parseInt(req.params.id);
    //   const { inputid, name, age } = req.body;
    //   const personIndex = users.findIndex(p => p.id === id);
    //   if (personIndex === -1) {
    //     res.status(404).json({ error: 'Person not found' });
    //     return;
    //   }
    //   users[personIndex] = { ...users[personIndex], name, age };
    //   res.json({ message: `Person updated successfully ` });
    // });


    // // DELETE /person/:id
    // app.delete('/person/:id', (req, res) => {
    //   const id = parseInt(req.params.id);
    //   const personIndex = users.findIndex(p => p.id === id);
    //   if (personIndex === -1) {
    //     res.status(404).json({ error: 'Person not found' });
    //     return;
    //   }
    //   const deletedPerson = users.splice(personIndex, 1);
    //   res.json({ message: 'Person deleted', deletedPerson });
    // });

    // // POST /users - Create a new user
    // app.post('/users', (req, res) => {
    //   console.log('POST User request....');

    //   const name='Deepak';
    //   const email = 'deepak@gmail.com';
    //   // Generate a unique ID for the new user
    //   const id = users.length + 1;

    //   // Create the new user object
    //   const newUser = { id, name, email };

    //   // Add the new user to the list
    //   users.push(newUser);
    //   console.log('User created....');

    //   res.status(201).json(newUser);
    // });


    // Middleware to parse request body as JSON
    app.use(express.json());

    app.get('/', (request, response) => {
        console.log('GET Empty request....');
        return response.sendFile('index.html', { root: '.' });
    });
    

    // Endpoint to initiate the Discord OAuth2 login
    app.get('/login', (req: Request, res: Response) => {
        res.redirect(
            `https://discord.com/api/oauth2/authorize?client_id=1132152657386152098&redirect_uri=http%3A%2F%2Flocalhost%3A53134%2Fcallback&response_type=code&scope=identify`
        );
        });

    // Endpoint to handle the Discord OAuth2 callback
    app.get('/callback', async (req: Request, res: Response) => {
        const code = req.query.code as string;
    
        // Exchange the authorization code for an access token
        try {
        const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: redirectUri,
            scope: 'identify',
            }),
        });
    
        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;
    
        // Fetch user information using the access token
        const userResponse = await fetch('https://discord.com/api/users/@me', {
            headers: {
            Authorization: `Bearer ${accessToken}`,
            },
        });
    
        const userData = await userResponse.json();
        const { id, username, discriminator, avatar } = userData;
    
        console.log(userData);
        // Here, you can create or update the user in your MongoDB database
        // For simplicity, we will just return the user information as a response
        res.json({ id, username, discriminator, avatar });
        } catch (error) {
        console.error('Error handling callback:', error);
        res.status(500).json({ error: 'Error handling callback' });
        }
    });
  
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });

    
    // // Stop the server
    // server.close(() => {
    //   // CLose the MongoDB
    //   client.close((err) => {
    //     if (err) {
    //       console.error('Error closing MongoDB connection:', err);
    //       return;
    //     }
    
    //     console.log('MongoDB connection closed');
    //   });
    
    //   console.log('Server and Database have been stopped');
    // });
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToMongoDB();