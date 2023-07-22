# Pinecone-Discord-CRUD-API

## Description

This project aims to create a backend API with user authentication using Discord OAuth2 and implement CRUD functionality for a specific resource using MongoDB as the data store. The API will allow users to authenticate with their Discord accounts, retrieve user information, and perform CRUD operations for the chosen resource (e.g., posts, comments).

## Task Breakdown

1. Set up MongoDB:
   - Create and configure a MongoDB database to store data for the backend API.
   - Establish a connection to the MongoDB database from your Node.js application.

2. Implement Discord Authentication:
   - Integrate the Discord OAuth2 protocol to enable user authentication with their Discord accounts.
   - Create API endpoints to handle user authentication and retrieval of user information.

3. CRUD Functionality with MongoDB:
   - Implement CRUD (Create, Read, Update, Delete) functionality for a specific resource (e.g., posts, comments).
   - Use MongoDB as the data store to store and manage the resource data.

## Progress

### Completed Tasks

1. Set up MongoDB:
   - MongoDB has been set up, and a database has been created and configured to store data for the backend API.
   - The Node.js application successfully connects to the MongoDB database.

2. Implement Discord Authentication:
   - Discord OAuth2 has been integrated into the backend API, enabling user authentication with their Discord accounts.
   - API endpoints for handling user authentication and retrieval of user information have been implemented.

### Current Task

3. CRUD Functionality with MongoDB:
   - In progress - CRUD functionality for a specific resource is being implemented (e.g., posts, comments).
   - MongoDB is being used as the data store to store and manage the resource data.
## How to Run the Project

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install`.
3. Set up your Discord application on the Discord Developer Portal to obtain the Client ID and Client Secret.
4. Configure the environment variables for the Discord Client ID and Client Secret in the project.
5. Ensure MongoDB is installed and running on your system, and configure the connection details in the project.
6. Run the backend server using `npm start`.
7. Access the application in your web browser and initiate the Discord OAuth2 login to test the authentication and retrieval of user information.

## Next Steps

Once the CRUD functionality is completed, the next steps will involve testing the API endpoints thoroughly, handling error cases, and implementing proper validation and authentication mechanisms. Additionally, consider using a client-side JavaScript framework (e.g., React, Vue.js) to build a frontend that interacts with the backend API and allows users to perform CRUD operations in a user-friendly manner.

## Contributing

If you would like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request. Any contributions, suggestions, or bug reports are highly appreciated!

## License

This project is licensed under the [MIT License](LICENSE).
