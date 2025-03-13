const express = require("express");
const { doSomeHeavyTask } = require("./util");

const app = express();
const PORT = 8000;

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

app.listen(PORT, () => {
  console.log(`Express Server running on port ${PORT}`);
});
