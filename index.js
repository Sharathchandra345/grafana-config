const express = require("express");
const client = require("prom-client");
const { doSomeHeavyTask } = require("./util");

const app = express();
const PORT = 8000;

const collectDefaultMetrics = client.collectDefaultMetrics;

collectDefaultMetrics({ register: client.register });

app.get("/", (req, res) => {
  return res.json({ message: `Hello from server` });
});

app.get("/slow", async (req, res) => {
  try {
    const timeTaken = await doSomeHeavyTask();
    return res.json({
      status: "Success",
      message: `Heavy task completed in ${timeTaken}ms`,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Error", error: "Internal Server Error" });
  }
});

//collect metrics and send to this route (uses prom client)
app.get("/metrics", async (req, res) => {
  res.setHeader("Content-Type", client.register.contentType);
  const metrics = await client.register.metrics();
  res.send(metrics);
});

app.listen(PORT, () => {
  console.log(`Express Server running on port ${PORT}`);
});
