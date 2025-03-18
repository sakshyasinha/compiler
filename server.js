require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

// Serve static frontend files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Root route - serve index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "chat.html"));
});

// API route to get API keys
app.get("/keys", (req, res) => {
    res.json({
        rapidapiKey: process.env.RAPIDAPI_KEY,
        mistralApiKey: process.env.MISTRAL_API_KEY
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
