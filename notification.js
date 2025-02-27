const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/task-completed', (req, res) => {
  const taskId = req.body.taskId;

  if (!taskId) {
    res.status(400).send('Task ID is required.');
    return;
  }
  console.log(`Notification received: Task ${taskId} completed!`);

  // res.send('Notification received.');
  res.send(`Task ${taskId} received notification!`);
});

app.listen(port, () => {
  console.log(`Notification service listening at http://localhost:${port}`);
});