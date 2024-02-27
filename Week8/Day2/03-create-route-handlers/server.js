const http = require("http");

let nextDogId = 1;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  // username = brandon & password=badPassword & image=url & age=300
  req.on("end", () => {
    // Parsing the body of the request
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
      console.log(req.body);
    }
    // ! Do not edit above this line

    // define route handlers here

    // * GET /
    if (req.method === "GET" && req.url === "/") {
      // console.log('do we make it?')

      const resBody = "Dog Club";

      res.statusCode = 200;

      res.setHeader("Content-Type", "text/plain");

      // res.write(resBody);
      res.end(resBody);
      return;
    }

    // * GET /dogs
    if (req.method === "GET" && req.url === "/dogs") {
      // const resBody = 'Dogs index';

      res.statusCode = 200;

      res.setHeader("Content-Type", "text/plain");

      // res.write(resBody);
      res.end("Dogs index");
      return;
    }

    // * GET /dogs/:dogId
    if (req.method === "GET" && req.url.startsWith("/dogs")) {
      // console.log(req.url); // /dogs/1
      const urlParts = req.url.split("/");
      // console.log(urlParts); // [ '', 'dogs', '1' ]

      if (urlParts.length === 3) {
        const dogId = urlParts[2];

        const resBody = `Dog details for dogId: ${dogId}`;

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        return res.end(resBody);
      }
    };


    // * POST /dogs
    if(req.method === 'POST' && req.url === '/dogs') {

      res.statusCode = 302;
      // dogs/2
      res.setHeader('Location', '/dogs/' + getNewDogId());
      return res.end();
    }

    // ! Do not edit below this line
    // Return a 404 response when there is no matching route handler
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    return res.end("No matching route handler found for this endpoint");
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
