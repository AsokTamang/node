export const sendJSONResponse = (res, code, payload) => {
  //here we are making an arrow function of utils where response , code and payload must be passed
  res.statusCode = code;
  res.setHeader("Access-Control-Allow-Origin", "*"); //this allows our server to be accessed from any frontends
  res.setHeader("Access-Control-Allow-Methods", "GET"); //this only allows the GET method in our server endpoint
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload)); //here res.end is for sending the output
};
