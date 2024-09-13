# Blockchain Audit Application

A blockchain audit application for decentralized apps and exchanges, built with Node.js, React, and integrated smart contract analysis tools.

## Features

- Smart contract vulnerability analysis using Mythril.
- Backend API for auditing and compliance checks.
- Frontend interface for uploading and analyzing smart contracts.
- Scalable architecture with Docker and CI/CD support.

## Prerequisites

- [Node.js](https://nodejs.org) (v14 or later)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/) (optional for Docker setup)
- [Git](https://git-scm.com/)

## Installation

Clone the repository using `git clone https://github.com/kashimkyari/blockchain-audit-app.git` and navigate to the project directory with `cd blockchain-audit-app`. 

To install backend dependencies, navigate to the backend directory with `cd backend` and run `npm install`. Then, navigate to the frontend directory with `cd ../frontend` and run `npm install` to install frontend dependencies.

## Configuration

Create a `.env` file in the `backend` directory with the following content:

```plaintext
MONGODB_URI=mongodb://localhost:27017/blockchain-audit
PORT=5000  ```

## Running the Application

Start the backend server by navigating to the `backend` directory and running `node server.js`. To start the frontend, navigate to the `frontend` directory and run `npm start`. The frontend will be available at [http://localhost:3000](http://localhost:3000) and the backend API at [http://localhost:5000](http://localhost:5000).

## Docker Setup

To run the application using Docker, make sure Docker is installed. Build and run the Docker containers with `docker-compose up --build`. This will set up the application along with a MongoDB instance. Access the frontend at [http://localhost:3000](http://localhost:3000) and the backend API at [http://localhost:5000](http://localhost:5000).

## Running Tests

To run backend tests, navigate to the `backend` directory and use `npm test`. Frontend tests can be run from the `frontend` directory with `npm test`.

## CI/CD

The project includes a GitHub Actions configuration for continuous integration. Push changes to the `main` branch to trigger the pipeline.

