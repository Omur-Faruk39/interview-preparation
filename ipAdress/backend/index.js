const http = require("http");
const fs = require("fs");
const path = require("path");

const requestHandler = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    try {
      const newEntry = JSON.parse(body);
      const filePath = path.join(__dirname, "userLocation.json");

      // Read existing file or start with an empty array
      fs.readFile(filePath, "utf8", (readErr, fileData) => {
        let dataArray = [];

        if (!readErr && fileData) {
          try {
            dataArray = JSON.parse(fileData);
            if (!Array.isArray(dataArray)) {
              dataArray = [dataArray]; // convert old object format to array
            }
          } catch {
            dataArray = [];
          }
        }

        dataArray.push(newEntry); // Add new data to array

        fs.writeFile(
          filePath,
          JSON.stringify(dataArray, null, 2),
          "utf8",
          (writeErr) => {
            if (writeErr) {
              res.writeHead(500, { "Content-Type": "text/plain" });
              res.end("Error writing file");
            } else {
              res.writeHead(200, { "Content-Type": "text/plain" });
              res.end("Data appended successfully!");
            }
          }
        );
      });
    } catch (error) {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("Invalid JSON format");
    }
  });
};

const server3000 = http.createServer(requestHandler);

server3000.listen(3000, () => {
  console.log("Server on port 3000 ready");
});
