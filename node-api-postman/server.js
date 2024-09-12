const { time } = require('console');
const express=  require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Setup for file upload
const upload = multer({dest: 'uploads/'});


// Endpoint to return server time
app.get('/time',(request, response) => {
    response.json({time: new Date().toISOString()});
});

// Endpoint to return a file
app.get('/file', (request, response) => {
    const filepath = path.join(__dirname, 'sample_file.txt');
    response.sendFile(filepath);
});

// Endpoint to upload a file
app.post('/upload', upload.single('file'), (request, response) => {
    response.json({ message: 'File uploaded successfully', file: request.file });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});