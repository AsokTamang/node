const url = new URL(req.url,`http://${req.headers.host}`)
const obj = Object.fromEntries(url.searchParams)  //in this way, we can create an object from a search params