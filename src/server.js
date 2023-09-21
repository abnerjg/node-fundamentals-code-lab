const http = require ("http");
const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  const url = new URL(req.url, `http://${host}:${port}`);
  res.writeHead(200, { "Content-Type": "application/json" });

  if (url.pathname === "/user") {
    const name = url.searchParams.get("name") || null;
    const email = url.searchParams.get("email") || null;
    const user = JSON.stringify({ "name": name, "email": email });
    res.end(user);
    return;
  }

  res.end();
};

const server = http.createServer(requestListener);
module.exports = server;