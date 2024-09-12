
# JSON Validator CLI

This project is a simple Node.js command-line tool to validate whether a given file contains valid JSON.

## Features

- Checks if a file contains valid JSON.
- Provides clear error messages if the file is empty, missing, or contains invalid JSON.
- Can be easily used from the command line by providing a file path as an argument.

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/wjy8023tvxq/MobileProjectPractice.git
   ```
   
2. Navigate into the project directory:
   ```bash
   cd MobileProjectPractice/nodejs/json-validator
   ```

3. Install dependencies (none required at the moment, as the project only uses built-in Node.js modules).

## Usage

To use this tool, run the following command in your terminal:

```bash
node app.js <path-to-json-file>
```

For example:

```bash
node app.js ./data/sample.json
```

The script will output whether the file contains valid JSON or not. If the file is invalid or empty, you'll receive an appropriate message.

## Error Handling

- If the file does not exist, the tool will notify you: `File not found.`
- If the file is empty, it will return: `The file is empty.`
- If the file contains invalid JSON, it will return: `The file is not a valid JSON file.`

## Technologies Used

- **Node.js**: The project utilizes Node.js's built-in `fs` module to handle file reading and JSON validation.

## License

This project is licensed under the MIT License.
