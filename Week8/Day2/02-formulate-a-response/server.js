// Your code here

const http = require("http");

const server = http.createServer((req, res) => {
  // console.log('hey did we enter')

  if (req.method === "GET" && req.url("/")) {
    // console.log(req, res)
    const responseBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World!</title>
</head>
<body>
  <h1>Hello there!</h1>
</body>
</html>
`;

    // console.log('response',res)
    res.statusCode = 200;

    res.setHeader("Content-Type", "text/html");

    // res.write(responseBody);
    // res.end()

    res.end(responseBody);

    return;
  };

  if (req.method === "GET" && req.url("/dogs")) {

  }

});

const port = 5000;

// console.log(server.listen)

server.listen(port, () => console.log(`listening on port ${port}`));
