const http = require('http');
const fs = require("fs");

const getContentType = ext => {
  switch (ext) { // if (ext === 'xzy')
    case "css":
      return "text/css"
    case "jpg":
      return "image/jpeg"
    default:
      return "text/plain"
  }
}

const server = http.createServer((req, res) => {
  // Your code here
  // res.end('Hey Maica')

  // css
  // if (req.method === "GET" && req.url === "/static/css/application.css"){

  //   const fileContents = fs.readFileSync("./assets/css/application.css","utf-8");
  //   // console.log(fileContents);

  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/css");
  //   return res.end(fileContents);
  // }

  //image
  // if (req.method === "GET" && req.url === "/static/images/dog.jpg"){

  //   const fileContents = fs.readFileSync("./assets/images/dog.jpg");
  //   // console.log(fileContents) // log for images
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type","image/jpeg")
  //   return res.end(fileContents);

  // }

  if (req.method === "GET" && req.url.startsWith("/static")) {

    // console.log(req.url); // where are the reqs for css and image going to? /static/css/application.css , /static/images/dog.jpg

    // split them up
    const splitUrl = req.url.split('/static');
    // console.log(splitUrl); // [ '', '/css/application.css' ], [ '', '/images/dog.jpg' ]

    const assetPath = `./assets${splitUrl[1]}`;
    console.log(assetPath); // ./assets/css/application.css , ./assets/images/dog.jpg

    const fileContents = fs.readFileSync(assetPath);

    res.statusCode = 200;

    // what about the MIME type?? -> Create a helper func to handle this part
    const ext = splitUrl[1].split(".")[1];

    const contentType = getContentType(ext)

    res.setHeader("Content-Type", contentType);

    return res.end(fileContents);

  }

  const fileContents = fs.readFileSync('./index.html','utf-8');
  // console.log(fileContents);
  res.statusCode = 200;
  res.setHeader("Content-Type","text/html");
  return res.end(fileContents);

});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
