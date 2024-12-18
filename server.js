const express = require("express");
const app = express();
const PORT = 7071;

// Middleware to parse JSON bodies (if needed)
app.use(express.json());

// Handle GET requests to the root URL
app.get("/", (req, res) => {
    res.send("Welcome to the Node.js server!");
});

// Handle POST requests to /data
app.post("/api/post", (req, res) => {
    const receivedData = req.body;
    res.send(`POST request received! Data: ${JSON.stringify(receivedData)}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
