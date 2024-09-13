## About This Project

Welcome to the **Blockchain Audit Application** – an innovative solution designed for the rigorous auditing of **decentralized applications (dApps)** and **cryptocurrency exchanges**. This cutting-edge project leverages **Node.js** to deliver robust, scalable, and secure blockchain audits, ensuring the integrity and security of smart contracts and decentralized systems.

### Key Features

- **Comprehensive Blockchain Auditing**: Analyze smart contracts and blockchain protocols for vulnerabilities and inefficiencies.
- **Advanced Security Measures**: Employ state-of-the-art cybersecurity practices to safeguard your decentralized applications and exchanges.
- **Scalable Architecture**: Built with **Node.js** to handle large-scale audits efficiently, making it ideal for both small projects and enterprise-level applications.
- **Docker Integration**: Utilize **Docker Compose** for streamlined development, testing, and deployment of containerized applications.
- **Continuous Integration/Continuous Deployment (CI/CD)**: Integrated with **GitHub Actions** for automated testing and deployment pipelines.

### Technologies Used

- **Node.js**: Fast, scalable JavaScript runtime for building high-performance applications.
- **Docker**: Containerization platform for consistent development and production environments.
- **MongoDB**: NoSQL database for storing audit data and results.
- **GitHub Actions**: Automate your workflows with CI/CD to ensure code quality and deployment efficiency.

Explore the repository to see how this blockchain audit tool can enhance the security and reliability of your decentralized projects. For more details on setup, usage, and contributions, please refer to the documentation and follow our guidelines.

## Installation

Clone the repository using `git clone https://github.com/kashimkyari/blockchain-audit-app.git` and navigate to the project directory with `cd blockchain-audit-app`. 

To install backend dependencies, navigate to the backend directory with `cd backend` and run `npm install`. Then, navigate to the frontend directory with `cd ../frontend` and run `npm install` to install frontend dependencies.

## Configuration

Create a `.env` file in the `backend` directory with the following content:

`MONGODB_URI=mongodb://localhost:27017/blockchain-audit
PORT=5000`

## Running the Application

Start the backend server by navigating to the `backend` directory and running `node server.js`. To start the frontend, navigate to the `frontend` directory and run `npm start`. The frontend will be available at [http://localhost:3000](http://localhost:3000) and the backend API at [http://localhost:5000](http://localhost:5000).

## Docker Setup

To run the application using Docker, make sure Docker is installed. Build and run the Docker containers with `docker-compose up --build`. This will set up the application along with a MongoDB instance. Access the frontend at [http://localhost:3000](http://localhost:3000) and the backend API at [http://localhost:5000](http://localhost:5000).

## Running Tests

To run backend tests, navigate to the `backend` directory and use `npm test`. Frontend tests can be run from the `frontend` directory with `npm test`.

## CI/CD

The project includes a GitHub Actions configuration for continuous integration. Push changes to the `main` branch to trigger the pipeline.


## LICENSE

```plaintext
MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
