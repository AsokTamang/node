import http from "node:http";
import { getDataFromDB } from "./database/db.js";
import { Jsonoutput } from "./utils/utils.js";
import { error } from "node:console";

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
    Jsonoutput(res, 200, destinations);
  } else if (req.url.startsWith(`/api/continent`) && req.method === "GET") {
    const last = req.url.split("/").pop(); //here pop always gets the last element from any array and we are splitting the url at / and when we req with this url 'api/continent/asia'  then the value of last will be asia
    const required = destinations.filter(
      (destination) =>
        destination.continent.toLowerCase() === last.toLowerCase()
    );
    Jsonoutput(res, 200, required);
  } else {
    Jsonoutput(res, 404, { error: "not found" });
  }
});

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`));
