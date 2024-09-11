const express = require('express');

require('dotenv').config();
const sequelize = require('../config/db');
const adminRoutes = require('../routes/adminRoutes');
const receiptRoutes = require('../routes/receiptRoutes');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/receipts', receiptRoutes);

// Sync Database
sequelize.sync().then(() => console.log('Database & tables created!'));

module.exports = app;