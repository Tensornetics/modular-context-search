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
│   ├── components/
│   │   ├── MyComponent.jsx
│   │   └── OtherComponent.jsx
│   ├── services/
│   │   ├── db.js
│   │   ├── search.js
│   │   └── fileParser.js
│   ├── hooks/
│   │   ├── useState.js
│   │   ├── useEffect.js
│   │   └── useContext.js
│   ├── index.js
├── test/
│   ├── services.test.js 
│   ├── components.test.js
│   ├── hooks.test.js
├── python_script/
│   ├── pdf_parser.py
│   ├── docx_parser.py
├── assets/
│   ├── dictionary.json
│   ├── translation-database.json
│   ├── audio/
│   ├── images/
│   ├── texts/
├── node_modules/
│   ├── mongoose
│   ├── elasticsearch
│   └── pdf-parser
├── .eslintrc
├── .gitignore
├── package.json
└── README.md
```
