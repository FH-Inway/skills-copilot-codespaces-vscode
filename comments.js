// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

// Create event handler
app.post('/events', async (req, res) => {
  const { type, data } = req.body;

  if (type === 'CommentCreated') {
    // Update comment status
    const { id, content, postId } = data;
    const status = content.includes('orange') ? 'rejected' : 'approved';
  }
});