import buildFastifyApp from "./src/app";

const loggerOption = {
  logger: true,
};
const app = buildFastifyApp(loggerOption);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
