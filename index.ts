/* Proxy server to hide the public API key */

// core modules
import path from "path";

// 3rd party
import "dotenv/config";
import express, { Request, Response, Application } from "express";
import cors from "cors";

// local
import { PORT } from "./server";


const app: Application = express();

// cors

const whitelist = ['127.0.0.1', 'localhost']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));

//static folder
const buildPath: string = path.join(__dirname, "build");

app.use(express.static(buildPath));

// SPA Routing
app.get("/*", (req: Request, res: Response) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));