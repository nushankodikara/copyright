require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (res) => {
    // Send a response to the client in json format
    res.json({
        developer: "Nushan Kodikara",
        website: "https://nushankodikara.com",
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
