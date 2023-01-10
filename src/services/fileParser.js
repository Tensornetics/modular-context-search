const mime = require('mime-types');
const pdfExtract = require('pdf-text-extract');
const docxExtract = require('docx-wasm').default;

const parseFile = async (filePath) => {
    const fileType = mime.lookup(filePath);
    let text = '';
    if (fileType === 'application/pdf') {
        text = await parsePdfFile
