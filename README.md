# Modular Context Search
A program that allows to store and search pdf, word, and other text documents using MongoDB and Elasticsearch. 

## Getting started
1. Clone the repository 
2. Run `npm install` to install the dependencies
3. Run `npm start` to start the server

## Usage
To extract text from the documents, run `npm run extract` this will parse the documents and extract the text, then store it in MongoDB.
To start the search engine, run `npm run search` this will start the Elasticsearch engine and it will be ready to accept search queries.

## Technologies used
- React
- Node.js
- MongoDB
- Elasticsearch
- Python (to extract text from documents)
- Webpack (for building and bundling the JavaScript code)
- Jest (for testing)

## How to Contribute
- Feel free to open issues and send pull requests
- Follow the project's coding style and guidelines
- Please add test coverage for any new features or bug fixes

## License
- The project is under the MIT license

```
modular-context-search
├── src/
│   ├── components/ (Contain React components for building UI)
    ├── useMyContext.js
│   ├── services/   (Contain functions for interacting with the database and external APIs)
    ├── db.js
    ├── search.js
    ├── fileParser.js
│   ├── hooks/     (Contain custom hooks for handling state)
    ├── useState.js
    ├── useEffect.js
    ├── useContext.js
│   ├── index.js   (The entry point of the application)
├── test/
│   ├── services.test.js 
│   ├── components.test.js
│   ├── hooks.test.js
├── assets/
│   ├── dictionary.json
│   ├── translation-database.json
│   ├── audio/
│   ├── images/
│   ├── texts/
├── node_modules/ (Contain modules installed by npm)
    ├── mongoose
    ├── elasticsearch
    ├── pdf-parse
├── .eslintrc.js
├── .gitignore
├── package.json
└── README.md
```
