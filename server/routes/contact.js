const express = require('express');
const rateLimit = require('express-rate-limit');
const { submitContact } = require('../controllers/contactController');

const router = express.Router();

// Strict rate limiting for contact form — 5 submissions per hour per IP
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: { message: 'Too many messages submitted. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post('/', contactLimiter, submitContact);

module.exports = router;
