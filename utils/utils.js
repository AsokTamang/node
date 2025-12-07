export const Jsonoutput = (res, code, payload) => { //here we are making an arrow function of utils where response , code and payload must be passed 
  res.statusCode = code;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
};
