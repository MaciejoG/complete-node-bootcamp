const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1 - only works on small files and local apps
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });

  // Solution 2 - streams: production ready
  // Create pieces of the file and send them chunk by chunk to the client
  // const readable = fs.createReadStream("test-file.txt");
  // readable.on("data", (chunk) => {
  //   // Response is a writeable stream, we send it back to the client
  //   res.write(chunk);
  // });
  // // End event for streaming streams
  // readable.on("end", () => {
  //   // Signal that we finished
  //   res.end();
  // });
  // // Error event
  // readable.on("error", (err) => {
  //   console.log("error", err);
  //   res.statusCode = 500;
  //   res.end("File not found!");
  // });

  // Solution 3 - use pipe operator so that output of readable stream is piped write into the writeable stream and so the speed of reading matches the writing speed of writeable stream
  const readable = fs.createReadStream('test-file.txt');
  readable.pipe(res);
  // conceptually: readableSource.pipe(writeableDest)


});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening...");
});
