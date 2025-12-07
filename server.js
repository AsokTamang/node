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
  } else if (req.url.startsWith(`/api/continent`) && req.method === "GET") {
    const last = req.url.split('/').pop(); //here pop always gets the last element from any array and we are splitting the url at /
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    const required = destinations.filter(
      (destination) => destination.continent === last
    );
    res.end(
      JSON.stringify({ data: required, message: "Successfully retrieved" })
    );
  } else {
    res.statusCode = 404; //404 code is of not found
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        //here we are returning the stringified version of JSON object
        error: "not found",
        message: "The requested route does not exist",
      })
    );
  }
});

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`));
