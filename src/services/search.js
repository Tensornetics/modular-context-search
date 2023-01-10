const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
    host: process.env.ELASTIC_URI,
    log: 'trace'
});

const indexDocument = async (data) => {
    const result = await client.index({
        index: "documents",
        type: "_doc",
        body: data
    });
    return result;
}

const searchDocument = async (query) => {
    const result = await client.search({
        index: 'documents',
        body: query
    });
    return result.hits.hits;
}

const updateDocument = async (id, data) => {
    const result = await client.update({
        index: 'documents',
        type: '_doc',
        id: id,
        body: {
            doc: data
        }
    });
    return result;
}

const deleteDocument = async (id) => {
    const result = await client.delete({
        index: 'documents',
        type: '_doc',
        id: id
    });
    return result;
}

module.exports = { indexDocument, searchDocument, updateDocument, deleteDocument };
