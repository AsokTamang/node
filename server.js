import http from "node:http";
import { getDataFromDB } from "./database/db.js";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB(); //as this getdatafromdb is an async function, we must use await method
  /*
Challenge:
  1. Store our data in a const ‘destinations’.
  2. When a GET request is received to the ‘/api' endpoint, send our JSON stringified data.
    Think: What changes will you need to make to get this to work?
*/

  if (req.url === "/api" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(destinations)); //and as a response we are returning the stringified version of JSON data
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type','application/json');
    res.end(
      JSON.stringify({
        error: "not found",
        message: "The requested route does not exist",
      })
    );
  }
});

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`));
