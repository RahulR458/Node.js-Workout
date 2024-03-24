const http = require('http');
const fs = require('fs');
const path = require('path');

const user = [{Name: 'Jhon', Age: '1' }, {Name: 'Migayel', Age: '4'}];
// Create server
const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Orgin","*")
    // Handling the request
    console.log(req.url, "_____req.method");
    const filePath = req.url === '/' ? './index.html' : `.${req.url}`;
    console.log(filePath, "___filePath");
    const extname = path.extname(filePath);
    console.log(extname,  "__extname");
    let contentType = 'text/html';

    // if (filePath == "/user") {
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(user));
    // }

    // Check extension and set content type accordingly
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Page not found
                fs.readFile('./404.html', (err, content) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                });
            } else {
                // Server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

// Define port
const PORT = process.env.PORT || 5000;

// Start the server
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));