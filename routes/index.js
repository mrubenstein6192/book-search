const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes...getting from our api folder
router.use("/api", apiRoutes);

// If there isn't an API route, send just to React app
router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;