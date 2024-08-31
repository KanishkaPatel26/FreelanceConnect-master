</br>
<div align="center">
<!--   <img src="https://github.com/Anass001/FreelanceConnect/blob/master/freelance-connect.gif" width="350px"> -->
</div>
</br>
WorkHub is a website developed using Node.js, MongoDB, React, and GraphQL. It serves as a platform for connecting freelancers with clients. Freelancers can showcase their services and clients can easily browse and order these services.

## Features
This project includes the following features:

- **User Authentication**: Users can register an account, log in, and log out. Authentication is handled using JSON Web Tokens (JWT) for secure access to protected routes.
- **CRUD Operations**: Users can perform CRUD (Create, Read, Update, Delete) operations on various entities in the application, such as creating, editing, and deleting services or orders.
- **Real-time Messaging**: The application utilizes GraphQL subscriptions to provide real-time messaging functionality. Users can send and receive messages in real-time without needing to refresh the page.
- **Image Upload**: Users can upload images to the application using the Cloudinary platform. The uploaded media is securely stored and accessible in the application.
- **Search Functionality**: Users can search for specific content within the application using keywords. The search functionality provides relevant and filtered results based on user queries.
- **Responsive Design**: The application is designed to be responsive and accessible across different devices and screen sizes, providing a seamless experience for users on desktops, tablets, and mobile devices.
- **Error Handling**: The application includes robust error handling mechanisms to gracefully handle and display error messages when encountering failures or invalid input.
- **Security**: Various security measures are implemented, including secure password hashing, input validation, and authorization checks to protect user data and prevent unauthorized access.

## Technologies Used

This project utilizes the following technologies:

- **MERN Stack:**
  - MongoDB: A NoSQL database for storing data.
  - Express.js: A web application framework for building the server-side application.
  - React: A JavaScript library for building user interfaces.
  - Node.js: A runtime environment for executing server-side JavaScript code.

- **GraphQL:** A query language and runtime for APIs.

- **NGINX:** A web server and reverse proxy server used for server deployment.

- **JWT (JSON Web Tokens):** A standard for securely transmitting information between parties as a JSON object.

- **Cloudinary:** A cloud-based image and video management platform.

- **Other libraries and tools:** React Router, Apollo Client, GraphQL-Upload, Nodemon, etc.

## API Documentation

The API of this project follows the GraphQL specification. Below is an overview of the available queries, mutations, and subscriptions:

### Queries

#### `login`
- Description: Authenticates a user based on their email and password.
- Input:
  - `email: String!` - The user's email address.
  - `password: String!` - The user's password.
- Output:
  - `AuthData` - An object containing the user's authentication token and user information.

#### `user`
- Description: Retrieves information about a specific user.
- Input:
  - `userId: ID!` - The unique identifier of the user.
- Output:
  - `User` - The user object containing information such as username, email, and profile details.

#### `service`
- Description: Retrieves information about a specific service.
- Input:
  - `serviceId: ID!` - The unique identifier of the service.
- Output:
  - `Service` - The service object containing information such as title, description, and pricing.

### Mutations

#### `createUser`

- Description: Creates a new user.
- Input:
  - `user: UserInput` - The user object with details such as username, email, and password.
- Output:
  - `User` - The newly created user object.

#### `createService`

- Description: Creates a new service.
- Input:
  - `service: ServiceInput` - The service object with details such as title, description, and pricing.
- Output:
  - `Service` - The newly created service object.

### Subscriptions

#### `messageSent`
- Description: Subscribes to new messages in a conversation.
- Input:
  - `conversationId: ID!` - The unique identifier of the conversation.
- Output:
  - `Message` - The newly sent message object.

Refer to the GraphQL schema and corresponding resolvers for detailed information about the input and output types of each field.

## Project Setup and Installation

To run this project locally or deploy it to a server using NGINX, follow the steps below:

### Prerequisites

Before getting started, ensure that you have the following prerequisites installed on your system:

- Node.js (v12 or higher)

### Local Development
Install project dependencies:

   ```bash
   npm install
   ```
   
Replace the placeholders with the actual values specific to your project.
Access the application:

- Server: http://localhost:4000
- Client: http://localhost:3000

Install project dependencies:

   ```bash
   npm install
   ```
   



Together, we dedicated ourselves to crafting a remarkable endeavor that showcases our skills and knowledge in the field of web development and frameworks.
