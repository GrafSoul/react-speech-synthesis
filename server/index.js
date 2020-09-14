const path = require('path');
const express = require('express');
const http = require('http');
const port = 5000;

const app = express();

const server = http.createServer(app);

app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Started the server
server.listen(port, () => {
    console.log(`**************************************`);
    console.log(`Server is running on port: ${port}`);
    console.log(`URL address: http://localhost:${port}`);
    console.log(`**************************************`);
});
