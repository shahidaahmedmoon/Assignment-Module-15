
const http = require('http');
const fs = require('fs');

// Create the server
const server = http.createServer((req, res) => {

    if (req.url == '/') {
        res.write('This is the Home Page');
        res.end();
    } 
    else if (req.url == '/about') {
        res.write('This is the About Page');
        res.end();
    } 
    else if (req.url == '/contact') {
        res.write('This is the Contact Page');
        res.end();
    }
    else if (req.url === '/file-write') {
    
        fs.writeFile('demo.txt', 'hello world', (err) => {

            if (err) {
                res.write('Failed to write to file');
            } 
            else {
                res.write('File created and written successfully');
            }
            res.end();
        });
    } else {
        
        res.write('404 Not Found');
        res.end();
    }
});

// Start the server and listen on port 5500

server.listen(5500, () => {
    console.log('Server is listening on port 5500');
});
