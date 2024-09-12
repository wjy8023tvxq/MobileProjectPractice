
# API-Postman

This is a simple Node.js API built with Express that demonstrates basic file upload functionality and time retrieval. It is designed to handle file uploads via a POST request, provide the current server time, and return a sample file.

## Features

- **File Upload:** Upload files using `multer` to handle multipart/form-data.
- **Get Server Time:** Retrieve the current server time in ISO format.
- **Download a Sample File:** Serve a static file from the server.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **Multer**: Middleware for handling `multipart/form-data` for file uploads.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/wjy8023tvxq/MobileProjectPractice.git
   ```

2. Navigate to the project directory:
   ```bash
   cd MobileProjectPractice/node-api-postman
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Server

You can start the server by running the following command:

```bash
node server.js
```

The server will be running on [http://localhost:3000](http://localhost:3000).

## API Endpoints

### 1. Get Server Time

- **URL**: `/time`
- **Method**: `GET`
- **Description**: Returns the current server time in ISO format.

```json
{
  "time": "2024-09-11T14:20:30.000Z"
}
```

### 2. Get Sample File

- **URL**: `/file`
- **Method**: `GET`
- **Description**: Serves a static file from the server.

### 3. Upload a File

- **URL**: `/upload`
- **Method**: `POST`
- **Description**: Upload a file to the server.

Use a tool like Postman to test this endpoint by sending a `multipart/form-data` request with a file.

```json
{
  "message": "File uploaded successfully",
  "file": {
    "fieldname": "file",
    "originalname": "your-file.txt",
    "encoding": "7bit",
    "mimetype": "text/plain",
    "destination": "uploads/",
    "filename": "somefileid",
    "path": "uploads/somefileid",
    "size": 1234
  }
}
```

## Dependencies

- `cors` (v2.8.5)
- `express` (v4.19.2)
- `multer` (v1.4.5-lts.1)

## License

This project is licensed under the ISC License.
