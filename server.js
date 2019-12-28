const http = require('http');

const server = http.createServer(() => {
    console.log(req.headers)
    console.log(req.method)
    console.log(req.url)
    const user = {
        name: 'John',
        hobby: 'Skating'
    }

    response.setHeader('Content-Type', 'application/json');
    response.end('<h1>Hello</h1>');
    response.end(JSON.stringify(user));
})

server.listen(3000);
