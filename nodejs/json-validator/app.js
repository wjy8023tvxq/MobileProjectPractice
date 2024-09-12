const fs = require('fs');

function isValidJson(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');

        // Check if the file is empty
        if (data.trim().length === 0) {
            console.log('The file is empty.');
            return false; // Return false because the file is empty
        }

        // Attempt to parse the string as JSON
        JSON.parse(data); 
        
        // If parsing succeeds, return true (file is valid JSON)
        return true;
    } catch (error) {
        // If a SyntaxError is thrown, it means the JSON is invalid
        if (error instanceof SyntaxError) {
            return false;
        } 
        // If the error is due to the file not being found
        else if (error.code === 'ENOENT') {
            console.log('File not found.');
            return false;
        } else {
            throw error;
        }
    }
}

const filePath = process.argv[2];

if (!filePath) {
    console.log('Please provide a file path.');
    process.exit(1);
}

if (isValidJson(filePath)) {
    console.log('The file is a valid JSON file.');
} else {
    console.log('The file is not a valid JSON file.');
}
