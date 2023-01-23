const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 60;
console.log("testing")
class Server {
  constructor() {
    this.initMiddlewares();
    this.initStaticFiles();
    this.initRoutes();
    this.start();
  }

  initMiddlewares() {
    app.use(cors());
    app.use(require('prerender-node').set('prerenderToken', 'hlWhD4SMjwIgzSWrIO0d'));
  }

  initStaticFiles() {
    app.use(express.static(path.resolve(__dirname, "./build")));
  }

  initRoutes() {
    // keep at end
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "./build/index.html"));
    });
  }

  start() {
    app.listen(port, () => console.log(`server is live on port ${port}`));
  }
}

new Server();
