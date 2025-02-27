const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/task-completed', (req, res) => {
  const taskId = req.body.taskId;

  console.log(`Notification received: Task ${taskId} completed!`);

  res.send('Notification received.');
});

app.listen(port, () => {
  console.log(`Notification service listening at http://localhost:${port}`);
});