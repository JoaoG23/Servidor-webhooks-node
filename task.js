const express = require('express');
const axios = require('axios'); // For making HTTP requests
const app = express();
const port = 3000;

app.use(express.json()); // To parse JSON bodies

const webhookUrl = 'http://localhost:3001/task-completed'; // Notification service URL

app.post('/complete-task', (req, res) => {
  const taskId = req.body.taskId;

  console.log(`Task ${taskId} completed.`);

  // Simulate task completion (you'd have your actual task logic here)

  // Send the webhook
  axios.post(webhookUrl, { taskId: taskId })
    .then(() => {
      console.log('Webhook sent successfully.');
      res.send('Task completed and webhook sent.');
    })
    .catch((error) => {
      console.error('Error sending webhook:', error);
      res.status(500).send('Error sending webhook.');
    });
});

app.listen(port, () => {
  console.log(`Task service listening at http://localhost:${port}`);
});