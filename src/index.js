import server from "./app";

const port = process.env.PORT || 5000;
server(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
