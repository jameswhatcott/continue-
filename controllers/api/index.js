const express = require('express');
const router = express.Router();
const cartRoutes = require('./cartRoute');
const ConsoleRoutes = require('./ConsoleRoutes');
const gamesConsoleRoutes = require('./gamesConsoleRoutes');
const userRoutes = require('./userRoute');

// Define routes
router.use('/user', userRoutes);
router.use('/cart', cartRoutes);
router.use('/consoles', ConsoleRoutes);
router.use('/gamesConsole', gamesConsoleRoutes);

module.exports = router;

