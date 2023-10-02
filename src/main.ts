import app from "./server";
import config from "./config";

const PORT = config.port || 5000;
const URL = `http://localhost:${PORT}`;

app.listen(PORT, () => {
  console.log(`listening on ${URL}`);
});
