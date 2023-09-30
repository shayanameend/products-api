import app from "./src/server";

const PORT = process.env.PORT || 5000;
const URL = `http://localhost:${PORT}`;

app.listen(PORT, () => {
  console.log(`listening on ${URL}`);
});
