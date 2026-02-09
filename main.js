import express from "express";
import path from "path";

// initialize the server and passing its reference to app variable
const app = express();

// to make static folder or files inside server
app.use("/public", express.static(path.join(import.meta.dirname, "public")));

// it tells server to use json format of request or handle json format so we can actually use that data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// home route request as a get request
app.get("/", (req, res) => {
  // sending file
  res.sendFile("index.html", { root: import.meta.dirname });
});

// post request for html form
app.post("/v1/api", (req, res) => {
  console.log(req.body);
  res.send();
});

// telling the server to run on specific port
app.listen(3000, () => console.log("running on http://localhost:3000"));
