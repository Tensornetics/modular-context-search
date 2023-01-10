const mongoose = require('mongoose');
const Documents = require('../models/Documents')

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
};

const createDocument = async (data) => {
    const document = new Documents(data);
    await document.save();
    return document;
}

const getDocument = async (query) => {
    return await Documents.find(query);
}

const updateDocument = async (query, data) => {
    return await Documents.findOneAndUpdate(query, data, { new: true });
}

const deleteDocument = async (query) => {
    return await Documents.findOneAndDelete(query);
}

module.exports = { connectDB, createDocument, getDocument, updateDocument, deleteDocument };
