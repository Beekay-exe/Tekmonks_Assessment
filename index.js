import express from "express";
import getTimeStories from "./routes/getTimeStories.js"
const app = express();

const PORT = 3000;

app.use("/getTimeStories", getTimeStories);

app.listen(PORT, () => {
  console.log(`server is running on PORT:${PORT}`);
});