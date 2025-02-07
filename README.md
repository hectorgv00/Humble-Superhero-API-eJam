# Humble Superhero API for eJam

## Table of Contents

- [Humble Superhero API for eJam](#humble-superhero-api-for-ejam)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [API Endpoints](#api-endpoints)
    - [Add a New Superhero](#add-a-new-superhero)
    - [Fetch the List of Superheroes](#fetch-the-list-of-superheroes)
  - [Running Tests](#running-tests)
  - [Collaboration](#collaboration)
  - [If I had more time](#if-i-had-more-time)
  - [I have added...](#i-have-added)

## Description

This project is a simple API that allows users to add superheroes with their name, superpower, and a "humility score" (a rating out of 10 that shows how humble they are). Users can also fetch the list of superheroes, ordered by their humility score in descending order.

## Requirements

- Node.js
- npm

## Installation

1. Clone the repository:
   ```sh
   git clone [<repository-url>](https://github.com/hectorgv00/Humble-Superhero-API-eJam.git)
   ```
2. Navigate to the project directory:
   ```sh
   cd e-jam/nestJs
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Running the Application

1. Start the application:
   ```sh
   npm run start
   ```
2. The application will be running at `http://localhost:4000`.

## API Endpoints

### Add a New Superhero

- **URL**: `/superhero`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "name": "Superman",
    "superpower": "Fly",
    "humilityScore": 9
  }
  ```
- **Response**:
  - `200 OK`: Superhero added successfully.
  - `422 Unprocessable Entity`: Humility score must be between 0 and 10.

### Fetch the List of Superheroes

- **URL**: `/superhero`
- **Method**: `GET`
- **Response**:
  ```json
  [
    {
      "name": "Superman",
      "superpower": "Fly",
      "humilityScore": 9
    },
    {
      "name": "Wolverine",
      "superpower": "Paws",
      "humilityScore": 2
    }
  ]
  ```

## Running Tests

1. Run the tests:
   ```sh
   npm run test
   ```

## Collaboration

To collaborate with a teammate, I would:

- Use Git for version control and create pull requests for code reviews.
- Discuss and agree on coding standards and best practices.
- Pair program on complex features to ensure quality and share knowledge.
- Use a task management tool to track progress and assign tasks.
- Share knowledge and resources to help each other grow.
- Distribute the workload evenly and communicate openly and honestly.

## If I had more time

If I had more time, I would:

- Add more unit and integration tests to cover edge cases.
- Implement a persistent database to store superhero data in MySQL or SQLite for better data management.
- Add authentication and authorization to secure the API endpoints.
- Implement validation to ensure that the request body is valid before processing it.
- Create more endpoints to update, delete superheroes and get a single superhero by ID.

## I have added...

- I have added the superhero.repository.ts file to handle the communications with the database, so in this files structure, the controller gets the request, and makes simples validations, the service handles the business logic, and the repository handles the database communications.

- I have added the Superhero API eJam postman collection from postman, so you can test the API with the postman collection.
