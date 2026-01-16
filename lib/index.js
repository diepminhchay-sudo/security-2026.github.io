
const express = require('express');
const app = express();

/**
 * Gateway Entry Point
 * Handles incoming traffic from operator sites.
 */
app.use((req, res, next) => {
    console.log(`[Gateway] Request received: ${req.path}`);
    next();
});

module.exports = app;
