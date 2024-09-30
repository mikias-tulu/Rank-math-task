# Rank Math Assessment - Node.js Task

This project is a Node.js-based web application built as part of an assessment task assigned by Rank Math. The app uses Express, Axios, and EJS to handle HTTP requests, fetch external data, and render it dynamically on a webpage.

## Prerequisites

    - Node.js v14 or higher.
    - npm (comes with Node.js).

## Getting Started
1. Clone the Repository

To clone the repository, run the following command:
``` 
git clone https://github.com/mikias-tulu/Rank-math-task.git

cd Rank-math-task
```

2. Install Dependencies

After navigating to the project directory, install the required dependencies using npm:

bash

``` 
npm install
```

3. Set Up Environment Variables

Create a .env file in the root directory of the project with the following structure:

```bash

# API Key for external API
OMDB_API_KEY=api_key_here

# Server Port
PORT=3000
```

Replace api_key_here with actual API key from OMDB

4. Run the Application

To run the application in development mode:

```
npm run dev
```
5. Open the Application

Once the server is running, open your web browser and navigate to:

```
http://localhost:3000

```
This will show a simple input form where you can submit data, and the fetched details will be displayed on the same page.

